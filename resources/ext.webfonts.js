( function( $, mw, undefined ) {
	"use strict";

	function fontID( font ) {
		if ( typeof font !== 'string' ) {
			return font;
		}
		return 'webfont-' + font.toLowerCase().replace(/[_ ]/g, '-' ).replace(/[^\-a-z]/g, '' );
	}

	mw.webfonts = {

		oldconfig: false,
		config: { fonts: {}, languages: {} },
		version: '0.1.2',
		fonts : [],

		set: function( font ) {
			if ( !font || font === 'none' ) {
				mw.webfonts.reset();
				return;
			}

			if ( mw.webfonts.config.fonts[font] === undefined ) {
				mw.log( 'Requested unknown font', font );
				return;
			}
			var	config = mw.webfonts.config.fonts[font],
				$body = $( 'body' );

			// Load the style sheet for the font
			mw.webfonts.addFont( font );

			// Save the current font and its size. Used for reset.
			if ( !mw.webfonts.oldconfig ) {
				mw.webfonts.oldconfig = {
					fontFamily: $body.css( 'font-family' ),
					fontSize: $body.css( 'font-size' )
				};
			}

			// Set the web font and the fallback fonts.
			// font-family of <input> and <textarea> must be changed explicitly.
			// @fixme TODO: Figure out a way to set font styling on <select> elements.
			// (if done, also add to reset() and to unit test).
			$( 'body, input, textarea' ).css(
				'font-family', '"' + font + '", Helvetica, Arial, sans-serif'
			);

			if ( config.normalization !== undefined ) {
				$( document ).ready( function() {
					mw.webfonts.normalize( config.normalization );
				} );
			}
			// Store the font choice in cookie
			$.cookie( 'webfonts-font', font, { 'path': '/', 'expires': 30 } );

			// If we had reset the fonts for tags with lang attribute, apply the fonts again.
			mw.webfonts.loadFontsForLangAttr();

			return true;
		},

		/**
		 * Reset the font with old configuration
		 */
		reset: function() {
			$( 'body, input, textarea' ).css( {
				fontFamily: mw.webfonts.oldconfig.fontFamily,
				fontSize: mw.webfonts.oldconfig.fontSize
			});

			// Reset the fonts applied for tags with lang attribute.
			$( '.webfonts-lang-attr' ).css( 'font-family', '' ).removeClass( 'webfonts-lang-attr' );

			// Remove the cookie
			$.cookie( 'webfonts-font', 'none', { 'path': '/', 'expires': 30 } );

			return true;
		},

		/**
		 * Does a find & replace of string in the page.
		 * @param normalization_rules hashmap of replacement rules.
		 */
		normalize: function( normalizationRules ) {
			$.each( normalizationRules, function( search, replace ) {
				var searchPattern = new RegExp( search, 'g' );
				return $( '*' ).each( function() {
					var node = this.firstChild,
						val, newVal;
					if ( node ) {
						do {
							if ( node.nodeType === 3 ) {
								val = node.nodeValue;
								newVal = val.replace( searchPattern, replace );
								if ( newVal !== val ) {
									node.nodeValue = newVal;
								}
							}
						} while ( node = node.nextSibling );
					}
				} );
			} );
		},

		/**
		 * Construct the CSS required for the font-family, inject it to the head of the body
		 * so that it gets loaded.
		 * @param fontFamily The font-family name
		 * @param variant The font variant, eg: bold, italic etc. Default is normal.
		 */
		loadCSS: function( fontFamily, variant ) {
			var	fontconfig = mw.webfonts.config.fonts[fontFamily],
				base = mw.config.get( 'wgExtensionAssetsPath' ) + '/WebFonts/fonts/',
				fontFormats = [],
				version = fontconfig.version || "0.0",
				versionSuffix = "?version=" + version + '&20111213',
				styleString = "@font-face { font-family: '"+fontFamily+"';\n",
				ua = navigator.userAgent;
			if( variant === undefined ) {
				variant = 'normal';
			}
			if ( variant !== 'normal' ) {
				if ( fontconfig.variants !== undefined && fontconfig.variants[variant] ) {
					fontFamily = fontconfig.variants[variant];
					fontconfig = mw.webfonts.config.fonts[fontFamily];
				}
			}
			if ( fontconfig.eot !== undefined ) {
				styleString += "\tsrc: url('" + base + fontconfig.eot + versionSuffix + "');\n";
			}

			styleString += "\tsrc: ";

			 // If the font is present locally, use it.
			if( ua.match( /Android 2\.3/ ) === null ) {
				// Android 2.3.x does not respect local() syntax.
				// http://code.google.com/p/android/issues/detail?id=10609
				styleString += "local('" + fontFamily + "'),";
			}

			if ( fontconfig.woff !== undefined ) {
				fontFormats.push( "\t\turl('" + base + fontconfig.woff + versionSuffix + "') format('woff')" );
			}

			if ( fontconfig.svg !== undefined ) {
				fontFormats.push( "\t\turl('" + base + fontconfig.svg + versionSuffix + "#" + fontFamily + "') format('svg')" );
			}

			if ( fontconfig.ttf !== undefined ) {
				fontFormats.push( "\t\turl('" + base + fontconfig.ttf + versionSuffix + "') format('truetype')" );
			}

			styleString += fontFormats.join() + ";\n";

			if ( fontconfig.fontweight !== undefined ) {
				styleString += "\tfont-weight:" + fontconfig.fontweight + ";";
			}
			if ( fontconfig.fontstyle !== undefined ) {
				styleString += "\tfont-style:" + fontconfig.fontstyle + ";";
			} else {
				styleString += "\tfont-style: normal;";
			}
			styleString += "}";

			// inject the css to the head of the page.
			mw.util.addCSS( styleString );

			// Generate css for the font variants too.
			if ( fontconfig.variants !== undefined ) {
				$.each( fontconfig.variants, function ( variant, variantFontFamily ) {
					mw.webfonts.loadCSS( fontFamily, variant );
				} );
			}
		},

		/**
		 * Add a font to the page.
		 * This method ensures that css are not duplicated and
		 * keep track of added fonts.
		 * @param fontFamilyName {String} The font-family name
		 * @return boolean False if font not found. True if loaded.
		 */
		addFont: function( fontFamilyName ) {
			// Avoid duplicate loading
			if ( $.inArray( fontFamilyName, mw.webfonts.fonts ) === -1 ) {
				// Check whether the requested font is available.
				if ( mw.webfonts.config.fonts[fontFamilyName] !== undefined ) {
					mw.webfonts.loadCSS( fontFamilyName );
					mw.webfonts.fonts.push( fontFamilyName );
				} else {
					return false;
				}
			}

			return true;
		},

		/**
		 * Checks whether the browser is supported
		 */
		isBrowserSupported: function() {
			if ( navigator.appName === 'Microsoft Internet Explorer' ) {
				var ua = navigator.userAgent;
				if ( /MSIE 6/i.test( ua ) ) {
					// IE6 doesn't have font fallbacks
					return false;
				}
			}
			return true;
		},

		/**
		 * Setup the font selection menu.
		 * It also apply the font from cookie, if any.
		 */
		setup: function() {
			// Some browsers are known to have issues with font rendering
			if ( !mw.webfonts.isBrowserSupported() ) {
				return false;
			}

			var	fonts = [],
				languages = mw.webfonts.config.languages,
				requested = [ mw.config.get( 'wgUserVariant' ), mw.config.get( 'wgContentLanguage' ),
					mw.config.get( 'wgUserLanguage' ), mw.config.get( 'wgPageContentLanguage' ) ],
				i, j;

			for ( i = 0; i < requested.length; i++ ) {
				if ( languages[requested[i]] !== undefined ) {
					fonts = languages[requested[i]];
					for ( j = 0; j < fonts.length; j++ ) {
						if ( $.inArray( fonts[j], fonts ) === -1 ) {
							fonts.push( fonts[j] );
						}
					}
				}
			}

			// Build font dropdown
			mw.webfonts.buildMenu( fonts );

			// See if there is a font in a cookie.
			// If not, the first font listed in the source is the default font.
			var	cookieFont = $.cookie( 'webfonts-font' ),
				selectedFont = null;
			// Check whether this font is for the current userlang/contentlang
			if ( $.inArray( cookieFont, fonts ) !== -1 || cookieFont === 'none' ) {
				selectedFont = cookieFont;
			}
			else {
				// We cannot use cookie font since it is not one of the fonts suitable
				// for current language.
				selectedFont = fonts[0];
			}
			if ( selectedFont ) {
				mw.webfonts.set( selectedFont );
				// Mark it as checked
				$( '#' + fontID( selectedFont ) ).prop( 'checked', true );
			}

			mw.webfonts.loadFontsForFontFamilyStyle();
			mw.webfonts.loadFontsForLangAttr();

			if ( $( '.webfonts-lang-attr' ).length && !$( '#webfonts-fontsmenu' ).length ) {
				// We need to show the reset option even if there is no font to show
				// for the main language, because there may be lang attr based font embedding.
				mw.webfonts.buildMenu( fonts );
			}
			return true;
		},

		/**
		 * Scan the page for tags with lang attr and load the default font
		 * for that language if available.
		 */
		loadFontsForLangAttr: function () {
			var languages = mw.webfonts.config.languages;
			var requested = [mw.config.get( 'wgUserVariant' ), mw.config.get( 'wgContentLanguage' ),
				mw.config.get( 'wgUserLanguage' ), mw.config.get( 'wgPageContentLanguage' )];
			var fontFamily = false;
			// Find elements with the lang attribute.
			$( 'body' ).find( '*[lang]' ).each( function ( i, el ) {
				// If the lang attribute value is same as one of
				// contentLang,useLang, variant, no need to do this.
				if( $.inArray( el.lang , requested ) === -1 ) {
					// check the availability of font, add a font-family style if it does not have any
					if( languages[el.lang] && ( !el.style.fontFamily || el.style.fontFamily === 'none' ) ) {
						fontFamily = languages[el.lang][0];
						mw.webfonts.addFont( fontFamily );
						$(el).css( 'font-family', fontFamily ).addClass( 'webfonts-lang-attr' );
					}
				}
			});
			return true;
		},

		/**
		 * Scan the page for tags with font-family style declarations
		 * If that font is available, embed it.
		 */
		loadFontsForFontFamilyStyle: function () {
			// If there are tags with font-family style definition, get a list of fonts to be loaded
			// Also check elements with CSS class attribute to see if there is any font-family defined
			// for the style corresponding to it.
			$( 'body' ).find( '[style], [class]' ).each( function ( i, el ) {
				var fontFamilyStyle = $( el ).css( 'fontFamily' );
				if ( fontFamilyStyle ) {
					var fontFamilyItems = fontFamilyStyle.split( ',' );
					$.each( fontFamilyItems, function ( i, fontFamily ) {
						// Remove the ' and " characters if any.
						fontFamily = $.trim( fontFamily.replace( /["']/g, '' ) );
						mw.webfonts.addFont( fontFamily );
					} );
				}
			} );
			return true;
		},

		/**
		 * Prepare the div containing menu items.
		 * @param fonts {Array} List of fonts to be provided as a menu option.
		 */
		buildMenuItems: function ( fonts ){
			var haveSchemes = false,
				$fontsMenu = $( '<ul>' )
					.attr( 'id', 'webfonts-fontsmenu' )
					.delegate( 'input:radio', 'click', function() {
						mw.webfonts.set( $(this).val() );
						// Changed font will make menu in wrong position.
						mw.webfonts.positionMenu();
					} ),
				len = fonts.length,
				i, font, $link, $label, $item,
				$resetLink, $resetLabel, $resetItem;

			for ( i = 0; i < len; i++ ) {
				font = fonts[i];

				$link = $( '<input type="radio" name="font" />' )
					.attr( 'id', fontID( font ) )
					.val( font );

				$label = $( '<label>' )
					.attr( 'for',fontID( font ) )
					.append( $link )
					.append( font );

				$item = $( '<li>' )
					.val( font )
					.append( $label );

				haveSchemes = true;

				$fontsMenu.append( $item );

			}

			if ( !haveSchemes && !$( '.webfonts-lang-attr' ).length ) {
				// No schemes available, and no tags with lang attr
				// with fonts loaded. Don't show the menu.
				return null;
			}
			$resetLink = null;
			if ( haveSchemes ) {
				$resetLink = $( '<input type="radio" name="font" />' );
			} else {
				// No font options to show. So show a checkbox instead or radio button.
				$resetLink = $( '<input type="checkbox" name="font" />' );
			}
			$resetLink.attr( 'value', 'webfont-none' )
				.attr( 'id', 'webfont-none' )
				.click( function() {
					mw.webfonts.set( 'none' );
					if( !this.checked ) {
						// If the checkbox not selected. Apply the font for elements with lang attribute.
						mw.webfonts.loadFontsForLangAttr();
					}
				});

			$resetLabel = $( '<label>' )
				.attr( 'for', 'webfont-none' )
				.append( $resetLink )
				.append( mw.message( 'webfonts-reset' ).escaped() );

			$resetItem = $( '<li>' )
				.val( 'none' )
				.append( $resetLabel );

			$fontsMenu.append( $resetItem );

			var helpPage = mw.config.get( 'wgWebFontsHelpPage' );
			var $helpLink = $( '<a id="webfont-help-link" >' )
				.text( mw.msg( 'webfonts-help' ) )
				.prop( 'href', helpPage  )
				.prop( 'target', '_blank');
			var $helpItem = $( '<li>' ).addClass( 'webfont-help-item' ).append( $helpLink );
			$fontsMenu.append( $helpItem );

			return $( '<div>' )
				.attr( 'id', 'webfonts-fonts' )
				.addClass( 'menu' )
				.append( $fontsMenu );
		},

		/**
		 * Prepare the menu for the webfonts.
		 * @param fonts {Array} List of fonts to be provided as a menu option.
		 */
		buildMenu: function( fonts ) {
			var $menuItemsDiv = mw.webfonts.buildMenuItems( fonts );
			if( $menuItemsDiv === null ) {
				return false;
			}

			if( $( 'li#pt-webfont' ).length > 0 ) {
				$( 'li#pt-webfont' ).remove();
				$( 'div#webfonts-menu' ).remove();
			}

			var $menu = $( '<div>' )
				.attr( 'id', 'webfonts-menu' )
				.addClass( 'webfontMenu' )
				.append( $menuItemsDiv );
			var $link = $( '<a>' )
				.prop( 'href', '#' )
				.text( mw.msg( 'webfonts-load' ) )
				.attr( 'title', mw.msg( 'webfonts-menu-tooltip' ) );

			// This is the fonts link
			var $li = $( '<li>' ).attr( 'id', 'pt-webfont' ).append( $link );

			var rtlEnv = $( 'body' ).hasClass( 'rtl' );

			// If RTL, add to the right of top personal links. Else, to the left
			var positionFunction = rtlEnv ? 'append' : 'prepend';
			$( '#p-personal ul:first' )[positionFunction]( $li );

			$( 'body' ).prepend( $menu );
			$li.click( function( event ) {
				mw.webfonts.positionMenu();
				if ( $menu.hasClass( 'open' ) ) {
					$menu.removeClass( 'open' );
				} else {
					$( 'div.open' ).removeClass( 'open' );
					$menu.addClass( 'open' );
					event.stopPropagation();
				}
				return false;
			} );

			$( 'html' ).click( function() {
				$menu.removeClass( 'open' );
			} );

			$menu.click( function( event ) {
				event.stopPropagation();
			} );
			// Workaround for IE bug - ActiveX components like input fields coming on top of everything.
			// @todo Is there a better solution other than hiding it on hover?
			if ( $.browser.msie ) {
				$( '#webfonts-menu' ).hover( function() {
					$( '#searchform' ).css( { visibility: 'hidden' } );
				}, function() {
					$( '#searchform' ).css( { visibility: 'visible' } );
				} );
			}
			return true;
		},

		/*
		 * Position the menu in correct position, depending on RTL/LTR
		 * environment.
		 */
		positionMenu : function(){
			var $menuLink = $( 'li#pt-webfont' );
			var $menuItemsDiv = $( 'div#webfonts-fonts' );
			var rtlEnv = $( 'body' ).hasClass( 'rtl' );
			var menuSide, menuOffset, distanceToEdge;
			if ( rtlEnv ) {
				distanceToEdge = $menuLink.outerWidth() + $menuLink.offset().left;
				if ( $menuItemsDiv.outerWidth() > distanceToEdge ) {
					menuSide = 'left';
					menuOffset = $menuLink.offset().left;
				} else {
					menuSide = 'right';
					menuOffset = $(window).width() - distanceToEdge;
				}
			} else {
				distanceToEdge = $(window).width() - $menuLink.offset().left;
				if ( $menuItemsDiv.outerWidth() > distanceToEdge ) {
					menuSide = 'right';
					menuOffset = distanceToEdge - $menuLink.outerWidth();
				} else {
					menuSide = 'left';
					menuOffset = $menuLink.offset().left;
				}
			}
			$menuItemsDiv.css( menuSide, menuOffset );
		}
	};

})( jQuery, mediaWiki );
