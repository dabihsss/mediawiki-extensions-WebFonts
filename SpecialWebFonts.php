<?php
/**
 * Contains logic for special page Special:WebFonts
 *
 * @file
 * @author Santhosh Thottingal
 * @copyright Copyright © 2012 Santhosh Thottingal
 * @license http://www.gnu.org/copyleft/gpl.html GNU General Public License 2.0 or later
 */

class SpecialWebFonts extends SpecialPage {
	public function __construct() {
		parent::__construct( 'WebFonts' );
	}

	public function execute( $params ) {
		$out = $this->getOutput();
		$this->lang = $this->getLanguage()->getCode();

		// Language::isValidBuiltInCode() will throw an exception if it's passed crap.
		if ( isset( $params ) && Language::isValidBuiltInCode( $params ) ) {
			$this->lang = $params;
		}

		$out->addModules( 'ext.webfonts.preview' );
		$this->setHeaders();
		$out->setPageTitle( $this->msg( 'webfonts' ) );
		$out->addWikiMsg( 'webfonts-preview-intro' );
		$this->showPreviewForm();
	}

	protected function showPreviewForm() {
		$out = $this->getOutput();

		$out->wrapWikiMsg( '==$1==', 'webfonts-preview-title' );
		$out->addHtml( $this->showToolbar() );
		$editArea = Html::Element( 'div',
			array( 'id' => 'webfonts-preview-area', 'contenteditable' => 'true' ),
			$this->msg( 'webfonts-preview-sampletext' )->text() );
		$out->addHtml( $editArea );
		$out->wrapWikiMsg( '== $1 ==', 'webfonts-preview-installing-fonts-title' );
		$out->addWikiMsg( 'webfonts-preview-installing-fonts-text' );
	}

	protected function showToolbar() {
		$langSelector = Xml::languageSelector( $this->lang );

		$fontSelector = new XmlSelect();
		$fontSelector->setAttribute( 'id', 'webfonts-font-chooser' );

		$sizeSelector = new XmlSelect();
		$sizeSelector->setAttribute( 'id', 'webfonts-size-chooser' );
		for ( $size = 8; $size <= 28; $size += 2 ) {
			$sizeSelector->addOption( $size, $size );
		}
		$sizeSelector->setDefault( 16 );

		$bold = Html::Element( 'button', array( 'id' => 'webfonts-preview-bold' ), 'B' );
		$italic = Html::Element( 'button', array( 'id' => 'webfonts-preview-italic' ), 'I' );
		$underline = Html::Element( 'button', array( 'id' => 'webfonts-preview-underline' ),  'U' );

		$download  = Html::Element( 'a', array( 'id' => 'webfonts-preview-download', 'href' => '#' ),
			$this->msg( 'webfonts-preview-download' )->text() );

		return Html::openElement( 'div', array( 'id' => 'webfonts-preview-toolbar' ) ) .
			$langSelector[1] .
			$fontSelector->getHtml() .
			$sizeSelector->getHtml() .
			$bold .
			$italic .
			$underline .
			$download .
			Html::closeElement( 'div' );
	}
}
