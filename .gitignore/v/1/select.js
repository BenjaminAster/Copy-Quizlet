

// Step 2: select --------------------------------------------------------


function createVocTable() {
	$("#step-2-to-voc-arrived")[0].hidden = true;
	$("#voc-table")[0].innerHTML = "";

	// editedVocArr = [];

	for (let i in originalVocArr) {
		let el_row = document.createElement("tr");
		let els_lang = [];
		for (let j = 0; j < 2; j++) {
			els_lang.push(document.createElement("td"));
			// originalVocArr[i][j] = originalVocArr[i][j].replace(/\n\n/g, "\n");
			els_lang[j].innerText = originalVocArr[i][j];
			el_row.append(els_lang[j]);
		}
		// let el_lang0 = document.createElement("td");
		// let el_lang1 = document.createElement("td");
		// originalVocArr[i][0] = originalVocArr[i][0].replace("\n\n", "\n");
		// originalVocArr[i][1] = originalVocArr[i][1].replace("\n\n", "\n");
		// el_lang0.innerText = originalVocArr[i][0];
		// el_lang1.innerText = originalVocArr[i][1];
		// el_row.append(el_lang0);
		// el_row.append(el_lang1);
		// el_lang0.className = el_lang1.className = "voc-cell";
		el_row.onmousedown = event => onCellDown(event);



		if (typeof originalVocArr[i][2] === "undefined") {
			originalVocArr[i].push(true);
		}

		if (originalVocArr[i][2]) {
			el_row.className = "used-row";
		} else {
			el_row.className = "not-used-row";
		}

		/*
		if (i == 6) {
			el_row.id = "selected-table-row";
			currentSelectedRow = 6;
		}

		if (10 < i && i < 29) {
			el_row.className = "not-used-row";
			vocArr[i].push(false);
		} else {
			el_row.className = "used-row";
			vocArr[i].push(true);
		}
		*/

		$("#voc-table")[0].append(el_row);

		if (i >= editedVocArr.length) {
			editedVocArr.push({
				lang0: originalVocArr[i][0],
				lang1: originalVocArr[i][1],
				used: true,
				originalIndex: parseInt(i),
				finishedVocArrIndex: parseInt(i),
			});
		}
	}

	updateEditedVocArr();
}

let crrSelRow = -1; // current selected row 


function onCellDown(evt) {
	let thisRow = evt.path[1];
	let rowIndex = thisRow.rowIndex;
	let temp;

	if (evt.altKey) {
		temp = $("#selected-table-row");
		if (temp.length) temp[0].id = "";

		// console.log(crrSelRow, rowIndex, thisRow);
		crrSelRow = rowIndex;
		thisRow.id = "selected-table-row";
		// thisRow.justClicked = true;
		// console.log("onCellDown event triggered");

		// vocArr[rowIndex][2] = !vocArr[rowIndex][2];
		// thisRow.className = vocArr[rowIndex][2] ? "used-row" : "not-used-row";
	} else if (crrSelRow >= 0) {
		let shiftIsPressed = (evt.shiftKey);
		let tableRows = $("#voc-table")[0].children;


		for (let i = Math.min(crrSelRow, rowIndex); i <= Math.max(crrSelRow, rowIndex); i++) {
			if (shiftIsPressed) {
				originalVocArr[i][2] = false;
				tableRows[i].className = "not-used-row";
			} else {
				originalVocArr[i][2] = true;
				tableRows[i].className = "used-row";
			}
		}

		// temp = $("#selected-table-row");
		// if (temp.length) temp[0].id = "";
		// currentSelectedRow = -1;
	}
	if (crrSelRow >= 0) $("#selected-table-row")[0].justClicked = true;

	updateEditedVocArr();
}



// -----------------


/* 
originalVocArr =
	[
		["por la mañana/tarde/noche", "am Morgen/Nachmittag/Abend, in der Nacht"],
		["dormir", "schlafen"],
		["despertarse", "aufwachen"],
		["el cellular (=el móvil)", "das Handy"],
		["¡Felicidades!", "Herzlichen Glückwunsch!"],
		["querer a alguien", "jdn lieben, jdn gern haben"],
		["TQM (=Te quiero mucho.)", "SMS-Abkürzung, etwa: hdgdl"],
		["levantarse", "aufstehen"],
		["ducharse", "sich duschen"],
		["ponerse algo", "etwas anziehen, aufsetzen"],
		["el uniforme", "die Uniform"],
		["el colegio (el cole)", "die Schule, in Spanien: die Grundschule"],
		["el comedor", "die Kantine, das Esszimmer"],
		["¡Feliz cumpleaños!", "Alles Gute zum Geburtstag!"],
		["la arepa", "der Maisfladen"],
		["el queso", "der Käse"],
		["la princesa", "die Prinzessin"],
		["la bruja", "die Hexe"],
		["irse", "weggehen"],
		["nos vemos", "wir sehen uns"],
		["acordarse", "sich (an etwas) erinnern"],
		["tarde", "spät"],
		["ponerse", "werden"],
		["rojo/-a", "rot"],
		["el tomate", "die Tomate"],
		["ponerse rojo/-a como un tomate", "knallrot werden"],
		["el mediodía", "der Mittag"],
		["a mediodía", "am Mittag, mittags"],
		["estar en las nubes", "geistesabwesend sein"],
		["el grafiti, los grafitis", "das Graffiti"],
		["la tarjeta", "die Karte"],
		["lindo/-a", "schön"],
		["el beso", "der Kuss"],
		["BSS (=Besos)", "Abschiedsformel in Briefen/SMS"],
		["la lista", "die Liste"],
		["faltar", "fehlen"],
		["acostarse", "sich hinlegen"],
		["soñar (con algo/alguien)", "(von etwas/jemandem) träumen"]
	];


setTimeout(createVocTable, 100);



 */