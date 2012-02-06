/**
 * QUnit tests for Narayam
 *
 * @file
 * @author Amir E. Aharoni
 * @copyright Copyright © 2012 Amir E. Aharoni
 * @license http://www.gnu.org/copyleft/gpl.html GNU General Public License 2.0 or later
 */
( function () {

module( "ext.narayam", QUnit.newMwEnvironment() );

var oldUserLang = mw.config.get( wgUserLanguage );
// A language that definitely has input methods
mw.config.set( { wgUserLanguage: "ml" } );
$.narayam.setup();
$.narayam.enable();

test( "-- Initial check", function() {
	expect( 1 );

	ok( $.narayam, "$.narayam is defined" );
} );

test( "-- Initialization functions", function() {
	expect( 10 );

	var stateCookieName = "narayam-enabled";

	// Now it's supposed to be enabled, so toggle() is supposed to disable.
	$.narayam.toggle();
	equals( $.narayam.enabled(), false, "toggle() disables Narayam when it is enabled." );
	equals( $.cookie( stateCookieName ), "0", "The state cookie was set to 0." );
	ok(  $( "li#pt-narayam" ).hasClass( "narayam-inactive" ), "After disabling the Narayam menu header has the narayam-inactive class." );
	ok( !$( "li#pt-narayam" ).hasClass( "narayam-active" ),   "After disabling the Narayam menu header doesn't have the narayam-active class ." );
	ok( !$( "#narayam-toggle" ).attr( "checked" ), "After disabling the Narayam checkbox is not checked." );

	// Now it's supposed to be disabled, so toggle() is supposed to enable.
	$.narayam.toggle();
	equals( $.narayam.enabled(), true, "toggle() enables Narayam when it is disabled." );
	equals( $.cookie( stateCookieName ), "1", "The state cookie was set to 1." );
	ok( !$( "li#pt-narayam" ).hasClass( "narayam-inactive" ), "After enabling the Narayam menu header doesn't have the narayam-inactive class." );
	ok(  $( "li#pt-narayam" ).hasClass( "narayam-active" ),   "After enabling the Narayam menu header has the narayam-active class ." );
	ok(  $( "#narayam-toggle" ).attr( "checked" ), "After enabling the Narayam checkbox is checked." );

	
} );

test( "-- Simple character functions", function() {
	expect( 7 );

	equals( $.narayam.lastNChars( "foobarbaz", 5, 2 ), "ba", "lastNChars works with short buffer." );
	equals( $.narayam.lastNChars( "foobarbaz", 2, 5 ), "fo", "lastNChars works with long buffer." );

	equals( $.narayam.firstDivergence( "abc", "abc" ), -1 );
	equals( $.narayam.firstDivergence( "a", "b" ), 0 );
	equals( $.narayam.firstDivergence( "a", "bb" ), 0 );
	equals( $.narayam.firstDivergence( "abc", "abd" ), 2 );
	equals( $.narayam.firstDivergence( "abcd", "abd" ), 2 );
} );

mw.config.set( { wgUserLanguage: oldUserLang } );

}());
