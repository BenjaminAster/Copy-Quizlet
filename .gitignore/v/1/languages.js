

let languagesObject = {
	"title": {
		"en": "Quizlet Learnset Copier",
		"de": "Quizlet Lernset Kopierer"
	},
	"heading": {
		"mainHeading": {
			"en": "Quizlet Learnset Copier",
			"de": "Quizlet Lernset Kopierer"
		},
		"paragraph1": {
			"en": "Import vocabulary from an existing <a href=\"https://quizlet.com\">Quizlet</a>, from an Excel file, from a CSV file or from <a href=\"https://apps.ankiweb.net\">Anki</a> and export them to your own Quizlet, to an Excel file or to a CSV file. CSV files can also be imported into Anki. Before exporting, you can choose which vocabulary you want to use, edit them and add new ones. If you import multiple vocabulary sets, they will be added one after the other.",
			"de": "Importiere Vokabeln aus einem bereits vorhandenen <a href=\"https://quizlet.com\">Quizlet</a>, aus einer Excel-Datei, aus einer CSV-Datei oder von <a href=\"https://apps.ankiweb.net\">Anki</a> und exportiere sie in dein eigenes Quizlet, in eine Excel-Datei oder in eine CSV-Datei. CSV-Dateien lassen sich auch in Anki importieren. Vor dem Exportieren kannst du auswählen, welche Vokabeln du verwenden möchtest, sie bearbeiten und neue hinzufügen. Wenn du mehrere Vokabelsets importierst, werden sie aneinander gefügt."
		},
		"please-use-desktop": {
			"en": "Warning: this tool only works on a computer. <hr>",
			"de": "Achtung: Dieses Tool funktioniert nur am Computer. <hr>"
		},
		"please-use-chromium": {
			"en": "Caution: Please use a Chromium-based browser like Google Chrome, Opera, Vivaldi or the new MS Edge browser. <hr>",
			"de": "Achtung: Bitte verwende einen Chromium-basierten Browser wie Google Chrome, Opera, Vivaldi oder das neue Microsoft Edge. <hr>"
		}
	},
	"step-1": {
		"step-1-header": {
			"en": "Step 1: Import",
			"de": "Schritt 1: Importieren"
		},
		"import-from-quizlet": {
			"import-from-quizlet-tabname": {
				"en": "Quizlet",
				"de": "Quizlet"
			},
			"import-from-quizlet-header": {
				"en": "Import from a Quizlet",
				"de": "Von einem Quizlet importieren"
			},
			"import-from-quizlet-paragraph-1": {
				"en": "Import vocabulary from an already existing Quizlet learnset. It doesn't matter whether you created the quizlet yourself or not.",
				"de": "Importiere Vokabeln von einem bereits vorhandenen Quizlet-Lernset. Es spielt dabei keine Rolle, ob du das Quizlet selbst erstellt hast oder nicht."
			},
			"import-from-quizlet-header-2": {
				"en": "Step 1.1: Open leanset",
				"de": "Schritt 1.1: Lernset öffnen"
			},
			"import-from-quizlet-paragraph-2": {
				"en": "Open the Quizlet learnset you want to copy in another tab in your browser.",
				"de": "Öffne das Quizlet-Lernset, das du kopieren möchtest, in einem anderen Tab in deinem Browser."
			},
			"import-from-quizlet-header-3": {
				"en": "Step 1.2: Open the JavaScript console.",
				"de": "Schritt 1.2: JavaScript-Konsole öffnen."
			},
			"import-from-quizlet-paragraph-3": {
				"en": "Go to the Quizlet tab with the learnset and press <kbd>Ctrl</kbd> + <kbd>⇧ Shift</kbd> + <kbd>J</kbd> (or <kbd>⌘ Cmd</kbd> + <kbd>⌥</kbd> + <kbd>J</kbd> on MacOS) there to open the JavaScript console of your browser.",
				"de": "Gehe zum Quizlet-Tab mit dem Lernset und drücke dort <kbd>Strg</kbd> + <kbd>⇧ Shift</kbd> + <kbd>J</kbd> (oder <kbd>⌘ Cmd</kbd> + <kbd>⌥ Opt</kbd> + <kbd>J</kbd> auf MacOS), um die JavaScript-Konsole deines Browsers zu öffnen."
			},
			"import-from-quizlet-header-4": {
				"en": "Step 1.3: Copy code",
				"de": "Schritt 1.3: Code kopieren"
			},
			"import-from-quizlet-paragraph-4": {
				"en": "Click in the box below to copy the JavaScript code.",
				"de": "Klicke in die Box unten, um den JavaScript-Code zu kopieren."
			},
			"import-from-quizlet-header-5": {
				"en": "Step 1.4: insert code",
				"de": "Schritt 1.4: Code einfügen"
			},
			"import-from-quizlet-paragraph-5": {
				"en": "Paste the code you just copied into the console of the Quizlet tab by typing <kbd>Ctrl / ⌘ Cmd</kbd> + <kbd>V</kbd> and hit Enter.",
				"de": "Füge den Code, den du gerade kopiert hast, mit <kbd>Strg / ⌘ Cmd</kbd> + <kbd>V</kbd> in die Konsole vom Quizlet-Tab ein und drücke Enter."
			}
		},
		"import-from-xlsx": {
			"import-from-xlsx-tabname": {
				"en": "Excel file",
				"de": "Excel-Datei"
			},
			"import-from-xlsx-header": {
				"en": "Import from an Excel file",
				"de": "Von einer Excel-Datei importieren"
			},
			"import-from-xlsx-paragraph-1": {
				"en": "Import vocabulary from a Microsoft Excel file.",
				"de": "Importiere Vokabeln aus einer Microsoft Excel-Datei."
			},
			"import-from-xlsx-header-2": {
				"en": "Step 1.1: Upload the Excel file",
				"de": "Schritt 1.1: Excel-Datei hochladen"
			},
			"import-from-xlsx-paragraph-2": {
				"en": "Click the button below to upload the vocabulary as an .xlsx file.",
				"de": "Klicke auf den Button unten, um die Vokabeln als .xlsx-Datei hochzuladen."
			},
			"xlsx-upload-label": {
				"en": "upload .xlsx file",
				"de": ".xlsx-Datei hochladen"
			}
		},
		"import-from-csv": {
			"import-from-csv-tabname": {
				"en": "CSV file",
				"de": "CSV-Datei"
			},
			"import-from-csv-header": {
				"en": "Import from a CSV file",
				"de": "Von einer CSV-Datei importieren"
			},
			"import-from-csv-paragraph-1": {
				"en": "Import vocabulary from a CSV file.",
				"de": "Importiere Vokabeln aus einer CSV-Datei."
			},
			"import-from-csv-header-2": {
				"en": "Step 1.1: Upload the CSV file",
				"de": "Schritt 1.1: CSV-Datei hochladen"
			},
			"import-from-csv-paragraph-2": {
				"en": "Click the button below to upload the vocabulary as an .csv file.",
				"de": "Klicke auf den Button unten, um die Vokabeln als .csv-Datei hochzuladen."
			},
			"csv-upload-label": {
				"en": "upload .csv file",
				"de": ".csv-Datei hochladen"
			}
		},
		"import-from-anki": {
			"import-from-anki-tabname": {
				"en": "Anki",
				"de": "Anki"
			},
			"import-from-anki-header": {
				"en": "Import from Anki",
				"de": "Von einem Anki-Lernset importieren"
			},
			"import-from-anki-paragraph-1": {
				"en": "I am still working on it. In the meantime, please use another option.",
				"de": "Ich arbeite noch daran. Bitte verwende in der Zwischenzeit eine andere Option."
			},
			"import-from-anki-header-2": {
				"en": "Step 1.1: Export deck to Anki",
				"de": "Schritt 1.1: Stapel in Anki exportieren"
			},
			"import-from-anki-paragraph-2": {
				"en": "In the deck overview in Anki, click on the little gear next to the deck you want to export and select \"Export\".",
				"de": "Klicke bei der Stapelübersicht in Anki auf das kleine Zahnrad neben dem Stapel, den du exportieren möchtest, und wähle \"Exportieren\" aus."
			},
			"import-from-anki-header-3": {
				"en": "Step 1.2: Choose export format",
				"de": "Schritt 1.2: Exportformat auswählen"
			},
			"import-from-anki-paragraph-3": {
				"en": "In the \"Export format\" dropdown, select \"Cards as plain text (* .txt)\". You can leave the checkmark next to \"Include HTML and references to media files\", but any formatting will generally be ignored. Click on \"Export\" and save the .txt file.",
				"de": "Wähle beim \"Exportformat\"-Dropdown \"Karten als Plain Text (*.txt)\" aus. Das Häkchen bei \"HTML und Verweise auf Mediendateien miteinbeziehen\" kannst du ruhig angehakt lassen, allerdings wird jegliche Formatierung generell ignoriert. Klicke auf \"Exportieren\" und speichere die .txt-Datei ab."
			},
			"import-from-anki-header-4": {
				"en": "Step 1.3: Upload TXT file",
				"de": "Schritt 1.3: TXT-Datei hochladen"
			},
			"import-from-anki-paragraph-4": {
				"en": "Upload the .txt file you just exported from Anki here by clicking the button below.",
				"de": "Lade die .txt-Datei, die du soeben von Anki exportiert hast, hier hoch, indem du auf den Button unten klickst."
			},
			"anki-upload-label": {
				"en": "upload .txt file",
				"de": ".txt-Datei hochladen"
			}
		}
	},
	"step-2": {
		"step-2-header": {
			"en": "Step 2: Select",
			"de": "Schritt 2: Auswählen"
		},
		"step-2-paragraph-1": {
			"en": "Hold <kbd>Alt / ⌥ Opt</kbd> and click on a line to select it as the start line. Then click (without holding down <kbd>Alt / ⌥ Opt</kbd>) on another line to select it as the target line. If you press the <kbd>⇧ Shift</kbd> key while selecting the target line, all vocabulary between the start line and the target line will be highlighted in red. If you don't a key while selecting the target line, the lines will be highlighted in green. Vocabulary of lines marked in green are exported at the end, vocabulary of lines marked in red are not. <br> When you have selected a start line by <kbd>Alt / ⌥ Opt</kbd>-clicking, you can move it up or down by pressing <kbd>Alt / ⌥ Opt</kbd> + <kbd>⇧ Shift</kbd> + <kbd>↑↓ Arrow up/down</kbd>.",
			"de": "Halte <kbd>Alt / ⌥ Opt</kbd> gedrückt und klicke auf eine Zeile, um sie als Startzeile auszuwählen. Klicke anschließend (ohne <kbd>Alt / ⌥ Opt</kbd> gedrückt zu halten) auf eine andere Zeile, um diese als Zielzeile auszuwählen. Wenn du während des Zielzeilen-Auswählens die <kbd>⇧ Shift</kbd>-Taste gedrückt hast, werden alle Vokabeln zwischen der Startzeile und der Zielzeile rot markiert. Wenn du keine Taste gedrückt hältst, während du die Zielzeile auswählst, werden die Zeilen dazwischen grün markiert. Vokablen in grün markierten Zeilen werden ausgewählt und bei Schritt 3 (Bearbeiten) angezeigt, die in rot markierten Zeilen nicht. <br> Wenn du durch <kbd>Alt / ⌥ Opt</kbd>-Klicken eine Startzeile ausgewählt hast, kannst du diese nach oben oder unten verschieben, indem du <kbd>Alt / ⌥ Opt</kbd> + <kbd>⇧ Shift</kbd> + <kbd>↑↓ Pfeiltasten auf/ab</kbd> drückst."
		},
		"step-2-to-voc-arrived": {
			"en": "No vocabulary has been imported yet.",
			"de": "Bis jetzt wurden noch keine Vokabeln importiert."
		}
	},
	"step-3": {
		"step-3-header": {
			"en": "Step 3: Edit",
			"de": "Schritt 3: Bearbeiten"
		},
		"step-3-paragraph-1": {
			"en": "Here you can edit the vocabulary and create new flashcards. <br> With <kbd>Alt / ⌥ Opt</kbd> + <kbd>W</kbd> or <kbd>Alt / ⌥ Opt</kbd> + <kbd>S</kbd> you can add a new flashcard before/after another flashcard. <br> With <kbd>Alt / ⌥ Opt</kbd> + <kbd>⇧ Shift</kbd> + <kbd>←↑↓→ Arrow keys</kbd> or with <kbd>↹ Tab</kbd> and <kbd>⇧ Shift</kbd> + <kbd>↹ Tab</kbd> you can switch between the index cards. <br> With <kbd>Alt / ⌥ Opt</kbd> + <kbd>⇧ Shift</kbd> + <kbd>⌫ Backspace</kbd> you can reset a flashcard to the original vocabulary or delete a newly created flashcard.",
			"de": "Hier kannst du die Vokabeln bearbeiten und neue Vokabeln hinzufügen. <br> Mit <kbd>Alt / ⌥ Opt</kbd> + <kbd>W</kbd> bzw. <kbd>Alt / ⌥ Opt</kbd> + <kbd>S</kbd> kannst du eine neue Karteikarte vor/nach einer anderen Karteikarte hinzufügen. <br> Mit <kbd>Alt / ⌥ Opt</kbd> + <kbd>⇧ Shift</kbd> + <kbd>←↑↓→ Pfeiltasten</kbd> oder mit <kbd>↹ Tab</kbd> und <kbd>⇧ Shift</kbd> + <kbd>↹ Tab</kbd> kannst du zwischen den Karteikarten herum switchen. <br> Mit <kbd>Alt / ⌥ Opt</kbd> + <kbd>⇧ Shift</kbd> + <kbd>⌫ Rücktaste</kbd> kannst du eine Karteikarte zu den ursprünglichen Vokabeln zurücksetzen bzw. eine neu erstellte Karteikarte löschen. "
		}
	},
	"step-4": {
		"step-4-header": {
			"en": "Step 4: Export",
			"de": "Schritt 4: Exportieren"
		},
		"export-to-quizlet": {
			"export-to-quizlet-tabname": {
				"en": "Quizlet",
				"de": "Quizlet"
			},
			"export-to-quizlet-header-0": {
				"en": "Export to Quizlet",
				"de": "In ein Quizlet exportieren"
			},
			"export-to-quizlet-paragraph-0": {
				"en": "Export the selected and edited vocabulary to your own quizlet.",
				"de": "Exportiere die ausgewählten und bearbeiteten Vokabeln in dein eigenes Quizlet."
			},
			"export-to-quizlet-header-1": {
				"en": "Step 4.1: Create a new quizlet",
				"de": "Schritt 4.1: Neues Quizlet erstellen"
			},
			"export-to-quizlet-paragraph-1": {
				"en": "Open <a href=\"https://quizlet.com/create-set\">quizlet.com/create-set</a> in another tab to create a new Quizlet.",
				"de": "Öffne <a href=\"https://quizlet.com/create-set\">quizlet.com/create-set</a> in einem anderen Tab, um ein neues Quizlet zu erstellen."
			},
			"export-to-quizlet-header-2": {
				"en": "Step 4.2: Copy vocabulary",
				"de": "Schritt 4.2: Vokabeln kopieren"
			},
			"export-to-quizlet-paragraph-2": {
				"en": "Click on the box below to copy the vocabulary.",
				"de": "Klicke in die Box unten, um die Vokabeln zu kopieren."
			},
			"export-to-quizlet-header-3": {
				"en": "Step 4.3: insert vocabulary",
				"de": "Schritt 4.3: Vokabeln einfügen"
			},
			"export-to-quizlet-paragraph-3": {
				"en": "In the Quizlet-Tab, click \"Import from Word, Excel, Google Docs etc.\" and paste the vocabulary you just copied there.",
				"de": "Klicke im Quizlet-Tab auf \"Aus Word, Excel, Google Docs usw. importieren\" und füge die Vokabeln, die du gerade kopiert hast, dort ein."
			},
			"export-to-quizlet-header-4": {
				"en": "Step 4.4: Define separators",
				"de": "Schritt 4.4: Trennzeichen definieren"
			},
			"export-to-quizlet-paragraph-4": {
				"en": "At \"Between term and definition\" and \"Between cards\", select \"custom\" and enter <span class=\"copy-box\" onclick=\"copyCode(event)\">$$</span> for both.",
				"de": "Wähle bei \"Zwischen Begriff und Definition\" und bei \"Zwischen Karten\" jeweils \"Nutzerdefiniert\" aus und gib bei beiden <span class=\"copy-box\" onclick=\"copyCode(event)\">$$</span> ein. Klicke anschließend auf \"Importieren\"."
			}
		},
		"export-to-xlsx": {
			"export-to-xlsx-tabname": {
				"en": "Excel file",
				"de": "Excel-Datei"
			},
			"export-to-xlsx-header": {
				"en": "Export to an Excel file",
				"de": "In eine Excel-Datei exportieren"
			},
			"export-to-xlsx-paragraph": {
				"en": "Export the edited vocabulary to a Microsoft Excel file.",
				"de": "Exportiere die bearbeiteten Vokabeln in eine Microsoft Excel-Datei."
			},
			"export-to-xlsx-header-1": {
				"en": "Step 4.1: Download Excel file",
				"de": "Schritt 4.1: Excel-Datei herunterladen"
			},
			"export-to-xlsx-paragraph-1": {
				"en": "Click the button below to download the vocabulary as an .xlsx file.",
				"de": "Klicke auf den Button unten, um die Vokabeln als .xlsx-Datei herunterzuladen."
			},
			"export-to-xlsx-button": {
				"en": "Download .XLSX file",
				"de": ".XLSX-Datei herunterladen"
			}
		},
		"export-to-csv": {
			"export-to-csv-tabname": {
				"en": "CSV file",
				"de": "CSV-Datei"
			},
			"export-to-csv-header": {
				"en": "Export to a CSV file",
				"de": "In eine CSV-Datei exportieren"
			},
			"export-to-csv-paragraph": {
				"en": "Export the edited vocabulary to a CSV file.",
				"de": "Exportiere die bearbeiteten Vokabeln in eine CSV-Datei. CSV-Dateien lassen sich unter anderem in <a href=\"https://apps.ankiweb.net\">Anki</a> importieren."
			},
			"export-to-csv-header-1": {
				"en": "Step 4.1: Download CSV file",
				"de": "Schritt 4.1: CSV-Datei herunterladen"
			},
			"export-to-csv-paragraph-1": {
				"en": "Click the button below to download the vocabulary as an .CSV file.",
				"de": "Klicke auf den Button unten, um die Vokabeln als .CSV-Datei herunterzuladen."
			},
			"export-to-csv-button": {
				"en": "Download .CSV file",
				"de": ".CSV-Datei herunterladen"
			}
		}/* ,
		"export-to-anki": {
			"export-to-anki-tabname": {
				"en": "Anki",
				"de": "Anki"
			},
			"export-to-anki-header": {
				"en": "Export to Anki",
				"de": "In ein Anki-Lernset exportieren"
			},
			"export-to-anki-paragraph-1": {
				"en": "I am still working on it. In the meantime, please use another option.",
				"de": "Ich arbeite noch daran. Bitte verwende in der Zwischenzeit eine andere Option."
			}
		} */
	},
	"languageSelect": {
		"languageSelectLabel": {
			"en": "Language:",
			"de": "Sprache:"
		},
		"languageSelectEnglish": {
			"en": "English",
			"de": "English"
		},
		"languageSelectGerman": {
			"en": "Deutsch",
			"de": "Deutsch"
		}
	},
	"copyright2020": {
		"en": "© 2020 Benjamin Aster",
		"de": "© 2020 Benjamin Aster"
	},
	"contact": {
		"en": "Contact",
		"de": "Kontakt"
	},
	"home": {
		"en": "Home",
		"de": "Startseite"
	}
};



let userLang;

if (localStorage.getItem("lang")) {
	userLang = localStorage.getItem("lang");
} else {
	userLang = navigator.language.toLowerCase();
	if (userLang == "de" || userLang == "de-de" || userLang == "de-at" || userLang == "de-ch") {
		userLang = "de";
	} else {
		userLang = "en";
	}
	localStorage.setItem("lang", userLang);
}
languageSelect.value = userLang;

function changeLang(data) {
	Object.keys(data).map(key => {
		if (data[key]["en"]) {
			$(`#${key}`).html(data[key][userLang]);
		} else {
			changeLang(data[key]);
		}
	})
}

// let languageJSON;
// $.get("./langs.jsonc", (data) => {
// 	eval(`languageJSON = ${data};`);
// 	changeLang(languageJSON);
// });

changeLang(languagesObject);

languageSelect.onchange = function () {
	userLang = languageSelect.value;
	localStorage.setItem("lang", userLang);
	changeLang(languagesObject)
}