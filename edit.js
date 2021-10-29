

// Step 3: edit ------------------------------------

let activeCellIndex = -1;

let editedVocArr = [];

function updateEditedVocArr() {
	// for (let i in originalVocArr) {
	// 	if (originalVocArr[i][2]) {
	// 		let indexInEditedArr = -1;
	// 		for (let j in editedVocArr) {
	// 			if (editedVocArr[j].originalIndex == i) {
	// 				indexInEditedArr = j;
	// 				// break;
	// 			}
	// 			// else if (i > editedVocArr[j].originalIndex) {
	// 			// 	editedVocArr.splice(j, 0, {
	// 			// 		lang0: originalVocArr[i][0],
	// 			// 		lang1: originalVocArr[i][1],
	// 			// 		originalIndex: i
	// 			// 	});
	// 			// 	break;
	// 			// }
	// 		}
	// 		if (!alreadyInEditedArr) {
	// 			editedVocArr.splice(j, 0, {
	// 				lang0: originalVocArr[i][0],
	// 				lang1: originalVocArr[i][1],
	// 				originalIndex: i
	// 			});
	// 		}
	// 	} else {
	// 		for (let j in editedVocArr) {
	// 			if (i == editedVocArr[j].originalIndex) {
	// 				editedVocArr.splice(j, 1);
	// 				break;
	// 			}
	// 		}
	// 	}
	// }
	// editedVocArr = [];

	for (let i in editedVocArr) {
		if (editedVocArr[i].originalIndex < 0) {
			i++;
		} else {
			editedVocArr[i].used = originalVocArr[editedVocArr[i].originalIndex][2];
		}
	}

	// console.log(editedVocArr);

	updateFinishedVocArr();


	$("#editable-voc-table")[0].innerHTML = "";

	for (let i in finishedVocArr) {
		let el_row = document.createElement("tr");
		let els_lang = [];
		for (let j = 0; j < 2; j++) {
			els_lang.push(document.createElement("td"));
			els_lang[j].innerText = finishedVocArr[i][j];
			els_lang[j].contentEditable = true;
			els_lang[j].onclick = function (event) {

				// console.log("onclick 0: ", (new Date()).getTime());
				// // let element = event.target;
				// let rowIndex = event.path[1].rowIndex;
				// let clmIndex = event.path[0].cellIndex;

				// activeCellIndex = rowIndex * 2 + clmIndex;

				// let activeCellTemp = $("#active-table-cell");
				// if (activeCellTemp.length &&
				// 	!(activeCellTemp[0].cellIndex === clmIndex &&
				// 		activeCellTemp[0].parentElement.rowIndex === rowIndex)
				// ) {
				// 	activeCellTemp[0].id = "";
				// }


				// $("#editable-voc-table")[0].children[rowIndex].children[clmIndex].id = "active-table-cell";
				// $("#editable-voc-table")[0].children[rowIndex].children[clmIndex].justClicked = true;

				// console.log("onclick 1: ", (new Date()).getTime());

			}
			el_row.append(els_lang[j]);
		}
		// el_row.onmousedown = evt => onCellDown(evt);

		// el_row.className = "used-row";

		$("#editable-voc-table")[0].append(el_row);


	}
}

function updateEditedVocArrFromTable() {
	if (activeCellIndex >= 0 && $("#active-table-cell").length) {

		let rowIndex = Math.floor(activeCellIndex / 2);
		let clmIndex = activeCellIndex % 2;

		for (let i in editedVocArr) {
			if (editedVocArr[i].finishedVocArrIndex === rowIndex) {
				editedVocArr[i]["lang" + clmIndex] = $("#active-table-cell")[0].innerText;
			}
		}

		updateFinishedVocArr();
	}
}

function updateActiveCell(mouseX) {

	if ($("#active-table-cell").length) {
		$("#active-table-cell")[0].id = "";
	}

	// console.log(document.activeElement.parentElement.children);

	activeCellIndex = -1;
	let activeEl = document.activeElement;


	if (activeEl.tagName === "TD" &&
		activeEl.offsetParent.id === "editable-voc-table"
	) {
		let rowIndex = activeEl.parentElement.rowIndex;
		let clmIndex = activeEl.cellIndex;

		if (typeof mouseX !== "undefined" &&
			Math.floor((mouseX + 15) * 2 / window.innerWidth) !== clmIndex
		) {
			clmIndex = !clmIndex | 0;
			activeEl = (clmIndex === 0) ? activeEl.previousSibling : activeEl.nextSibling;
			activeEl.focus();
		}

		activeEl.id = "active-table-cell";
		activeCellIndex = rowIndex * 2 + clmIndex;

	}

	updateEditedVocArrFromTable();
}

let finishedVocArr = [];

function updateFinishedVocArr() {
	finishedVocArr = [];
	let finishedVocArrIndex = 0;

	for (let i in editedVocArr) {
		if (editedVocArr[i].used) {
			finishedVocArr.push([
				editedVocArr[i].lang0,
				editedVocArr[i].lang1,
			]);
			editedVocArr[i].finishedVocArrIndex = finishedVocArrIndex;
			finishedVocArrIndex++;
		} else {
			editedVocArr[i].finishedVocArrIndex = -1;
		}
	}

	updateQuizletExport();
}
