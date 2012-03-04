<?php
/**
 * MediaWiki extension for dynamic font embedding
 * https://www.mediawiki.org/wiki/Extension:WebFonts
 *
 * @file
 * @ingroup Extensions
 * @author Santhosh Thottingal
 * @author Niklas Laxström
 * @author Amir Aharoni
 * @copyright © 2011-2012 Santhosh Thottingal, Niklas Laxström, Amir Aharoni 
 * @licence GNU General Public Licence 3.0 or later
 */

if ( !defined( 'MEDIAWIKI' ) ) {
	echo( "This file is an extension to the MediaWiki software and cannot be used standalone.\n" );
	die( -1 );
}

$wgExtensionCredits['other'][] = array(
	'path'           => __FILE__,
	'name'           => 'WebFonts',
	'version'        => '1.0',
	'author'         => array( 'Santhosh Thottingal', 'Niklas Laxström', 'Amir Aharoni' ),
	'url'            => 'https://www.mediawiki.org/wiki/Extension:WebFonts',
	'descriptionmsg' => 'webfonts-desc',
);

$dir = dirname( __FILE__ );

// Internationalization
$wgExtensionMessagesFiles['WebFonts'] = "$dir/WebFonts.i18n.php";
$wgExtensionMessagesFiles['WebFontsAlias'] = "$dir/WebFonts.alias.php";

// Register auto load for the page class
$wgAutoloadClasses['WebFontsHooks'] = "$dir/WebFonts.hooks.php";
$wgAutoloadClasses['SpecialWebFonts'] = "$dir/SpecialWebFonts.php";

$wgHooks['BeforePageDisplay'][] = 'WebFontsHooks::addModules';
$wgHooks['GetPreferences'][] = 'WebFontsHooks::addPreference';
$wgHooks['UserGetDefaultOptions'][] = 'WebFontsHooks::addDefaultOptions';
$wgHooks['ResourceLoaderGetConfigVars'][] = 'WebFontsHooks::addConfig';
$wgHooks['ResourceLoaderTestModules'][] = 'WebFontsHooks::addTestModules';

$wgWebFontsEnabledByDefault = true;

$wgSpecialPages['WebFonts'] = 'SpecialWebFonts';
$wgSpecialPageGroups['WebFonts'] = 'wiki';

$wgResourceModules['ext.webfonts.init'] = array(
	'scripts' => 'resources/ext.webfonts.init.js',
	'localBasePath' => $dir,
	'remoteExtPath' => 'WebFonts',
	'dependencies' => 'ext.webfonts.core',
	'position' => 'top',
);

$wgResourceModules['ext.webfonts.core'] = array(
	'scripts' => array( 'resources/ext.webfonts.js', 'resources/ext.webfonts.fontlist.js' ),
	'styles' => 'resources/ext.webfonts.css',
	'skinStyles' => array(
		'modern' => 'resources/ext.webfonts.modern.css',
		'monobook' => 'resources/ext.webfonts.monobook.css',
	),
	'localBasePath' => $dir,
	'remoteExtPath' => 'WebFonts',
	'messages' => array(
		'webfonts-load',
		'webfonts-reset',
		'webfonts-menu-tooltip',
		'webfonts-help',
	),
	'dependencies' => array(
		'jquery.cookie',
		'mediawiki.util',
	),
	'position' => 'top',
);

$wgResourceModules['ext.webfonts.preview'] = array(
	'scripts' => 'resources/ext.webfonts.preview.js',
	'styles' => 'resources/ext.webfonts.preview.css',
	'localBasePath' => $dir,
	'remoteExtPath' => 'WebFonts',
	'dependencies' => 'ext.webfonts.core',
	'position' => 'top',
);
