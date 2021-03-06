/**
 * Configuration file for webfonts
 * First font is the default font for the language
 */

( function ( $, mw ) {
	"use strict";

	var config = {
		fonts: {
			"Amiri": {
				eot: "Arab/amiri-regular.eot",
				ttf: "Arab/amiri-regular.ttf",
				woff: "Arab/amiri-regular.woff",
				version: "1.0.4",
				variants: {
					bold: "Amiri Bold",
					italic: "Amiri Italic",
					bolditalic: "Amiri Bold Italic"
				}
			},

			"Amiri Bold": {
				eot: "Arab/amiri-bold.eot",
				ttf: "Arab/amiri-bold.ttf",
				woff: "Arab/amiri-bold.woff",
				fontweight: "bold",
				version: "1.0.4"
			},

			"Amiri Italic": {
				eot: "Arab/amiri-slanted.eot",
				ttf: "Arab/amiri-slanted.ttf",
				woff: "Arab/amiri-slanted.woff",
				fontstyle: "italic",
				version: "1.0.4"
			},

			"Amiri Bold Italic": {
				eot: "Arab/amiri-boldslanted.eot",
				ttf: "Arab/amiri-boldslanted.ttf",
				woff: "Arab/amiri-boldslanted.woff",
				fontstyle: "italic",
				fontweight: "bold",
				version: "1.0.4"
			},

			"Iranian Sans": {
				eot: "Arab/IranianSans.eot",
				ttf: "Arab/IranianSans.ttf",
				woff: "Arab/IranianSans.woff",
				version: "1.0"
			},

			"Lohit Bengali": {
				eot: "Beng/Lohit-Bengali.eot",
				ttf: "Beng/Lohit-Bengali.ttf",
				woff: "Beng/Lohit-Bengali.woff",
				version: "2.5.1"
			},

			"Lohit Assamese": {
				eot: "Beng/Lohit-Assamese.eot",
				ttf: "Beng/Lohit-Assamese.ttf",
				woff: "Beng/Lohit-Assamese.woff",
				version: "2.5.1"
			},

			"Lohit Devanagari": {
				eot: "Deva/Lohit-Devanagari.eot",
				ttf: "Deva/Lohit-Devanagari.ttf",
				woff: "Deva/Lohit-Devanagari.woff",
				version: "2.5.1"
			},

			"Lohit Nepali": {
				eot: "Deva/Lohit-Nepali.eot",
				ttf: "Deva/Lohit-Nepali.ttf",
				woff: "Deva/Lohit-Nepali.woff",
				version: "2.5.1.1"
			},

			"Lohit Marathi": {
				eot: "Deva/Lohit-Marathi.eot",
				ttf: "Deva/Lohit-Marathi.ttf",
				woff: "Deva/Lohit-Marathi.woff",
				version: "2.5.1"
			},

			"Samyak Devanagari": {
				eot: "Deva/SamyakDevanagari.eot",
				ttf: "Deva/SamyakDevanagari.ttf",
				woff: "Deva/SamyakDevanagari.woff",
				version: "1.0"
			},

			"Madan": {
				eot: "Deva/madan.eot",
				ttf: "Deva/madan.ttf",
				woff: "Deva/madan.woff",
				version: "2.0"
			},

			AbyssinicaSIL: {
				eot: "Ethi/AbyssinicaSIL-R.eot",
				ttf: "Ethi/AbyssinicaSIL-R.ttf",
				woff: "Ethi/AbyssinicaSIL-R.woff",
				version: "1.2"
			},

			"Lohit Gujarati": {
				eot: "Gujr/Lohit-Gujarati.eot",
				ttf: "Gujr/Lohit-Gujarati.ttf",
				woff: "Gujr/Lohit-Gujarati.woff",
				version: "2.5.1"
			},
			"Samyak Gujarati": {
				eot: "Gujr/SamyakGujarati.eot",
				ttf: "Gujr/SamyakGujarati.ttf",
				woff: "Gujr/SamyakGujarati.woff",
				version: "1.0"
			},

			"Miriam CLM": {
				eot: "Hebr/MiriamCLM-Book.eot",
				ttf: "Hebr/MiriamCLM-Book.ttf",
				woff: "Hebr/MiriamCLM-Book.woff",
				version: "0.105"
			},

			"Taamey Frank CLM": {
				eot: "Hebr/TaameyFrankCLM.eot",
				ttf: "Hebr/TaameyFrankCLM.ttf",
				woff: "Hebr/TaameyFrankCLM.woff",
				version: "0.110"
			},

			KhmerOS: {
				eot: "Khmr/KhmerOS.eot",
				ttf: "Khmr/KhmerOS.ttf",
				woff: "Khmr/KhmerOS.woff",
				version: "1.10"
			},

			KhmerOSbattambang: {
				eot: "Khmr/KhmerOSbattambang.eot",
				ttf: "Khmr/KhmerOSbattambang.ttf",
				woff: "Khmr/KhmerOSbattambang.woff",
				version: "1.10"
			},

			KhmerOSbokor: {
				eot: "Khmr/KhmerOSbokor.eot",
				ttf: "Khmr/KhmerOSbokor.ttf",
				woff: "Khmr/KhmerOSbokor.woff",
				version: "1.10"
			},

			KhmerOSfreehand: {
				eot: "Khmr/KhmerOSfreehand.eot",
				ttf: "Khmr/KhmerOSfreehand.ttf",
				woff: "Khmr/KhmerOSfreehand.woff",
				version: "1.10"
			},

			KhmerOSfasthand: {
				eot: "Khmr/KhmerOSfasthand.eot",
				ttf: "Khmr/KhmerOSfasthand.ttf",
				woff: "Khmr/KhmerOSfasthand.woff",
				version: "1.10"
			},

			KhmerOSmuol: {
				eot: "Khmr/KhmerOSmuol.eot",
				ttf: "Khmr/KhmerOSmuol.ttf",
				woff: "Khmr/KhmerOSmuol.woff",
				version: "1.10"
			},

			KhmerOSmuollight: {
				eot: "Khmr/KhmerOSmuollight.eot",
				ttf: "Khmr/KhmerOSmuollight.ttf",
				woff: "Khmr/KhmerOSmuollight.woff",
				version: "1.10"
			},

			KhmerOSmuolpali: {
				eot: "Khmr/KhmerOSmuolpali.eot",
				ttf: "Khmr/KhmerOSmuolpali.ttf",
				woff: "Khmr/KhmerOSmuolpali.woff",
				version: "1.10"
			},

			KhmerOSsiemreap: {
				eot: "Khmr/KhmerOSsiemreap.eot",
				ttf: "Khmr/KhmerOSsiemreap.ttf",
				woff: "Khmr/KhmerOSsiemreap.woff",
				version: "1.10"
			},

			Gubbi: {
				eot: "Knda/Gubbi.eot",
				ttf: "Knda/Gubbi.ttf",
				woff: "Knda/Gubbi.woff",
				version: "1.3"
			},

			"Lohit Kannada": {
				eot: "Knda/Lohit-Kannada.eot",
				ttf: "Knda/Lohit-Kannada.ttf",
				woff: "Knda/Lohit-Kannada.woff",
				version: "2.5.1"
			},

			"Charis SIL": {
				eot: "Latn/CharisSIL-R.eot",
				ttf: "Latn/CharisSIL-R.ttf",
				woff: "Latn/CharisSIL-R.woff",
				version: "4.011"
			},

			RufScript: {
				eot: "Latn/Rufscript.eot",
				ttf: "Latn/Rufscript.ttf",
				woff: "Latn/Rufscript.woff",
				version: "0.1"
			},

			"Ubuntu": {
				eot: "Latn/Ubuntu-R.eot",
				ttf: "Latn/Ubuntu-R.ttf",
				woff: "Latn/Ubuntu-R.woff",
				svg: "Latn/Ubuntu-R.svg",
				version: "0.8",
				variants: {
					bold: "Ubuntu Bold",
					italic: "Ubuntu Italic"
				}
			},

			"Ubuntu Bold": {
				eot: "Latn/Ubuntu-B.eot",
				ttf: "Latn/Ubuntu-B.ttf",
				woff: "Latn/Ubuntu-B.woff",
				svg: "Latn/Ubuntu-B.svg",
				fontweight: "bold",
				version: "0.8"
			},

			"Ubuntu Italic": {
				eot: "Latn/Ubuntu-RI.eot",
				ttf: "Latn/Ubuntu-RI.ttf",
				woff: "Latn/Ubuntu-RI.woff",
				svg: "Latn/Ubuntu-RI.svg",
				fontstyle: "italic",
				version: "0.8"
			},

			AnjaliOldLipi: {
				eot: "Mlym/AnjaliOldLipi.eot",
				ttf: "Mlym/AnjaliOldLipi.ttf",
				woff: "Mlym/AnjaliOldLipi.woff",
				version: "0.730"
			},

			Meera: {
				eot: "Mlym/Meera.eot",
				ttf: "Mlym/Meera.ttf",
				woff: "Mlym/Meera.woff",
				version: "5.0.1"
			},

			RaghuMalayalam: {
				eot: "Mlym/RaghuMalayalam.eot",
				ttf: "Mlym/RaghuMalayalam.ttf",
				woff: "Mlym/RaghuMalayalam.woff",
				normalization: {
					// N.B.: ZWJ at the end of each value
					"ൾ": "ള്‍",
					"ൻ": "ന്‍",
					"ർ": "ര്‍",
					"ൺ ": "ണ്‍",
					"ൽ": "ല്‍",
					"ൿ": "ക്‍ "
				},
				version: "2.0"
			},

			Myanmar3: {
				eot: "Mymr/Myanmar3.eot",
				ttf: "Mymr/Myanmar3.ttf",
				woff: "Mymr/Myanmar3.woff",
				version: "3.0"
			},

			"Padauk": {
				eot: "Mymr/Padauk-Regular.eot",
				ttf: "Mymr/Padauk-Regular.ttf",
				woff: "Mymr/Padauk-Regular.woff",
				version: "2.8"
			},

			"Lohit Oriya": {
				eot: "Orya/Lohit-Oriya.eot",
				ttf: "Orya/Lohit-Oriya.ttf",
				woff: "Orya/Lohit-Oriya.woff",
				version: "2.5.1"
			},

			Utkal: {
				eot: "Orya/utkal.eot",
				ttf: "Orya/utkal.ttf",
				woff: "Orya/utkal.woff",
				version: "0.13"
			},

			Pagul: {
				eot: "Saur/Pagul.eot",
				ttf: "Saur/Pagul.ttf",
				woff: "Saur/Pagul.woff",
				version: "1.0"
			},

			"Lohit Tamil": {
				eot: "Taml/Lohit-Tamil.eot",
				ttf: "Taml/Lohit-Tamil.ttf",
				woff: "Taml/Lohit-Tamil.woff",
				version: "2.5.1"
			},

			"Lohit Tamil Classical": {
				eot: "Taml/Lohit-Tamil-Classical.eot",
				ttf: "Taml/Lohit-Tamil-Classical.ttf",
				woff: "Taml/Lohit-Tamil-Classical.woff",
				version: "2.5.1.1"
			},

			Thendral: {
				eot: "Taml/ThendralUni.eot",
				ttf: "Taml/ThendralUni.ttf",
				woff: "Taml/ThendralUni.woff",
				version: "1.0"
			},

			Thenee: {
				eot: "Taml/TheneeUni.eot",
				ttf: "Taml/TheneeUni.ttf",
				woff: "Taml/TheneeUni.woff",
				version: "1.0"
			},

			"Lohit Telugu": {
				eot: "Telu/Lohit-Telugu.eot",
				ttf: "Telu/Lohit-Telugu.ttf",
				woff: "Telu/Lohit-Telugu.woff",
				version: "2.5.1"
			},

			"Pothana2000": {
				eot: "Telu/Pothana2000.eot",
				ttf: "Telu/Pothana2000.ttf",
				woff: "Telu/Pothana2000.woff",
				version: "1.3"
			},

			"Vemana2000": {
				eot: "Telu/Vemana2000.eot",
				ttf: "Telu/Vemana2000.ttf",
				woff: "Telu/Vemana2000.woff",
				version: "1.3"
			},

			"Lohit Punjabi": {
				eot: "Guru/Lohit-Punjabi.eot",
				ttf: "Guru/Lohit-Punjabi.ttf",
				woff: "Guru/Lohit-Punjabi.woff",
				version: "2.5.1"
			},

			"Saab": {
				eot: "Guru/Saab.eot",
				ttf: "Guru/Saab.ttf",
				woff: "Guru/Saab.woff",
				version: "0.91"
			},
			"Siyam Rupali": {
				eot: "Beng/SiyamRupali.eot",
				ttf: "Beng/SiyamRupali.ttf",
				woff: "Beng/SiyamRupali.woff",
				version: "1.070"
			},
			"Jomolhari": {
				eot: "Tibt/Jomolhari.eot",
				ttf: "Tibt/Jomolhari.ttf",
				woff: "Tibt/Jomolhari.woff",
				version: "0.003"
			},
			"Saweri": {
				eot: "Bugi/saweri.eot",
				ttf: "Bugi/saweri.ttf",
				woff: "Bugi/saweri.woff",
				version: "2"
			},
			"Akkadian": {
				eot: "Xsux/Akkadian.eot",
				ttf: "Xsux/Akkadian.ttf",
				woff: "Xsux/Akkadian.woff",
				version: "2.56"
			},
			"TharLon": {
				eot: "Mymr/TharLon.eot",
				ttf: "Mymr/TharLon.ttf",
				woff: "Mymr/TharLon.woff",
				version: "1.0"
			},
			"Tuladha Jejeg": {
				eot: "Java/TuladhaJejeg_gr.eot",
				ttf: "Java/TuladhaJejeg_gr.ttf",
				woff: "Java/TuladhaJejeg_gr.woff",
				version: "1.92"
			},
			"Libertine": {
				eot: "Latn/LinLibertine_R.eot",
				ttf: "Latn/LinLibertine_R.ttf",
				woff: "Latn/LinLibertine_R.woff",
				version: "5.1.3",
				variants: {
					bold: "Libertine Bold",
					italic: "Libertine Italic",
					bolditalic: "Libertine Bold Italic"
				}
			},

			"Libertine Bold": {
				eot: "Latn/LinLibertine_RB.eot",
				ttf: "Latn/LinLibertine_RB.ttf",
				woff: "Latn/LinLibertine_RB.woff",
				fontweight: "bold",
				fontstyle: "normal",
				version: "5.1.3"
			},

			"Libertine Italic": {
				eot: "Latn/LinLibertine_RI.eot",
				ttf: "Latn/LinLibertine_RI.ttf",
				woff: "Latn/LinLibertine_RI.woff",
				fontstyle: "italic",
				version: "5.1.3"
			},

			"Libertine Bold Italic": {
				eot: "Latn/LinLibertine_RBI.eot",
				ttf: "Latn/LinLibertine_RBI.ttf",
				woff: "Latn/LinLibertine_RBI.woff",
				fontweight: "bold",
				fontstyle: "italic",
				version: "5.1.3"
			},

			"UnifrakturMaguntia": {
				eot: "Latn/UnifrakturMaguntia.eot",
				ttf: "Latn/UnifrakturMaguntia.ttf",
				woff: "Latn/UnifrakturMaguntia.woff",
				version: "2012-02-11"
			},

			"FreeFontThaana": {
				eot: "Thaa/FreeFont-Thaana.eot",
				ttf: "Thaa/FreeFont-Thaana.ttf",
				woff: "Thaa/FreeFont-Thaana.woff",
				version: "1.0",
				variants: {
					bold: "FreeFontThaana Bold"
				}
			},

			"FreeFontThaana Bold": {
				eot: "Thaa/FreeFont-Thaana-Bold.eot",
				ttf: "Thaa/FreeFont-Thaana-Bold.ttf",
				woff: "Thaa/FreeFont-Thaana-Bold.woff",
				version: "1.0",
				fontweight: "bold",
				fontstyle: "normal",
			}

/*
			,
			"Hapax Berbère": {
				eot: "Tfng/hapaxber.eot",
				ttf: "Tfng/hapaxber.ttf",
				woff: "Tfng/hapaxber.woff",
				version: "3.005"
			}
*/
		},

		languages: {
			// en:  [ "Libertine", "RufScript", "Ubuntu"],
			ahr: [ "Lohit Marathi" ],
			akk: [ "Akkadian" ],
			am:  [ "AbyssinicaSIL" ],
			as:  [ "Lohit Assamese" ],
			ar:  [ "Amiri" ],
			arb: [ "Amiri" ],
			// ber: [ "Hapax Berbère" ],
			bh:  [ "Lohit Devanagari" ],
			bho: [ "Lohit Devanagari" ],
			bn:  [ "Siyam Rupali", "Lohit Bengali" ],
			bo:  [ "Jomolhari" ],
			bpy: [ "Siyam Rupali", "Lohit Bengali" ],
			bug: [ "Saweri" ],
			cdo: [ "Charis SIL" ],
			dv:  [ "FreeFontThaana" ],
			dz:  [ "Jomolhari" ],
			fa:  [ "Iranian Sans", "Amiri" ],
			gu:  [ "Lohit Gujarati" ],
			hbo: [ "Taamey Frank CLM" ],
			he:  [ "Miriam CLM", "Taamey Frank CLM" ],
			hi:  [ "Lohit Devanagari" ],
			'jv-java':  [ "Tuladha Jejeg" ],
			km:  [ "KhmerOSbattambang", "KhmerOSsiemreap", "KhmerOS", "KhmerOSbokor",
			       "KhmerOSmuollight", "KhmerOSmuol", "KhmerOSmuolpali",
			       "KhmerOSfreehand", "KhmerOSfasthand" ],
			kn:  [ "Lohit Kannada", "Gubbi" ],
			kok: [ "Lohit Devanagari" ],
			gom: [ "Lohit Devanagari" ],
			mai: [ "Lohit Devanagari" ],
			mak: [ "Saweri" ],
			ml:  [ "Meera", "AnjaliOldLipi" ],
			mr:  [ "Lohit Marathi" ],
			my:  [ "TharLon", "Padauk", "Myanmar3" ],
			ne:  [ "Lohit Nepali", "Madan" ],
			or:  [ "Lohit Oriya" , "Utkal" ],
			pa:  [ "Lohit Punjabi", "Saab" ],
			// rif: [ "Hapax Berbère" ],
			sa:  [ "Lohit Devanagari" ],
			saz: [ "Pagul" ],
			// shi: [ "Hapax Berbère" ],
			sux: [ "Akkadian" ],
			ta:  [ "Lohit Tamil", "Thendral", "Thenee", "Lohit Tamil Classical" ],
			tcy: [ "Lohit Kannada", "Kedage" ],
			te:  [ "Lohit Telugu", "Pothana2000", "Vemana2000" ],
			ti:  [ "AbyssinicaSIL" ]
			// tmh: [ "Hapax Berbère" ],
			// tzm: [ "Hapax Berbère" ]
		}
	};

	$.extend( mw.webfonts.config, config );

} )( jQuery, mediaWiki );
