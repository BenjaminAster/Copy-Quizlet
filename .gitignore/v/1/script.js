/*

let id = 1234;
let el = document.createElement("script");
el.src = "https://benjaminaster.com/copy-quizlet/console-script.js";
document.body.append(el);

let id = 1234;
let el = document.createElement("script");
el.src = "http://localhost:5000/copy-quizlet/console-script.js";
document.body.append(el);

let el = document.createElement("script");
el.src = "https://benjaminaster.com/copy-quizlet/console-script.js";
document.body.append(el);

let el = document.createElement("script");
el.src = "https://benjaminaster.com/jquery.js";
document.body.append(el);

*/

let version = 8;

setTimeout(_ => {
	$("#cover-div")[0].hidden = true;
}, 100);

function switchTab(evt) {
	let tablinks = $(".tablinks." + evt.srcElement.className.split(" ")[1]);
	let tabcontent = $(".tabcontent." + evt.srcElement.className.split(" ")[1]);
	let id = evt.srcElement.id;

	// console.log(evt.srcElement, evt, tablinks, tabcontent, evt.srcElement.className.split(" "));

	for (let i = 0; i < tablinks.length; i++) {
		if (id == tablinks[i].id) {
			tablinks[i].className += " active";
			tabcontent[i].hidden = false;
		} else {
			if (tablinks[i].className.includes("active")) {
				tablinks[i].className = tablinks[i].className.replace(" active", "");
			}
			tabcontent[i].hidden = true;
		}
	}
}

function detectBrowser() {
	if (window.navigator.userAgent.indexOf("Chrome") != -1) {
		return 'chromium';
	}
	else if (window.navigator.userAgent.indexOf("Safari") != -1) {
		return 'safari';
	}
	else if (window.navigator.userAgent.indexOf("Firefox") != -1) {
		return 'firefox';
	}
	else if ((window.navigator.userAgent.indexOf("MSIE") != -1) || document.documentMode) //IF IE > 10
	{
		return 'ie';
	}
}

function detectOS() {
	if (window.navigator.userAgent.indexOf("Win") != -1) {
		return "windows";
	}
	else if (window.navigator.userAgent.indexOf("Mac") != -1) {
		return "macos";
	}
	else if (window.navigator.userAgent.indexOf("X11") != -1) {
		return "unix";
	}
	else if (window.navigator.userAgent.indexOf("Linux") != -1) {
		return "linux";
	}
}


if (window.orientation != undefined) {
	$("#please-use-desktop")[0].hidden = false;
} else {
	if (detectBrowser() != "chromium") {
		$("#please-use-chromium")[0].hidden = false;
	}
}


$("#location-origin")[0].innerText = window.location.origin;

// let consoleScript = 


function copyCode(evt) {
	// console.log(event.currentTarget.children[0].innerText);
	// console.log(evt, evt.currentTarget, evt.srcElement.nextSibling.nextSibling);

	// console.log(evt);

	let copyBox = evt.srcElement;

	if (copyBox.className !== "copy-box") copyBox = copyBox.parentElement;

	let el = document.createElement('textarea');
	el.value = copyBox.innerText;
	// el.hidden = true;
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);

	copyBox.className += " copied";

	// setTimeout(() => copyBox.className = copyBox.className.replace(" copied", ""), 1000);
	setTimeout(() => copyBox.className = copyBox.className.replace(" copied", ""));
	// let tempEl = codeDiv.nextSibling.nextSibling;
	// tempEl.hidden = false;
	// setTimeout(x => tempEl.hidden = true, 1000);
}

let keysDown = {};

document.onmousedown = function (evt) {

	setTimeout(() => {
		if (evt.altKey || activeCellIndex >= 0) {
			setTimeout(() => {
				let temp = $("#selected-table-row");
				// console.log(crrSelRow, temp)
				if (temp.length) {
					if (!temp[0].justClicked) {
						temp[0].id = "";
						crrSelRow = -1;
					}
					temp[0].justClicked = false;
				}
				// temp.justClicked = false;
				// console.log(crrSelRow, temp)

				// temp = $("#active-table-cell");

				// if (temp.length) {
				// 	if (!temp[0].justClicked) {
				// 		temp[0].id = "";
				// 		activeCellIndex = -1;
				// 	}
				// 	temp[0].justClicked = false;
				// }
			}, 50);
		}
	}, 50);

	setTimeout((mouseX = evt.clientX) => updateActiveCell(mouseX));

}


document.onkeydown = function (evt) {
	keysDown[evt.key] = true;

	// let selectedRow = evt.path[1];
	// let rowIndex = thisRow.rowIndex;
	let tableEl = $("#voc-table")[0];
	let tempEl;
	let temp;

	// console.log(event);
	if (evt.altKey && evt.shiftKey) {

		if (((typeof keysDown.ArrowUp !== "undefined" && crrSelRow > 0) ||
			(typeof keysDown.ArrowDown !== "undefined" && crrSelRow < originalVocArr.length - 1)) &&
			(crrSelRow >= 0) && (activeCellIndex < 0)
		) {
			tempEl = tableEl.children[crrSelRow];
			tableEl.removeChild(tempEl);

			let crrSelRowBefore = crrSelRow;
			temp = originalVocArr[crrSelRow];
			originalVocArr.splice(crrSelRow, 1);

			crrSelRow += (typeof keysDown.ArrowUp !== "undefined") ? -1 : 1;

			tableEl.insertBefore(tempEl, tableEl.children[crrSelRow]);
			originalVocArr.splice(crrSelRow, 0, temp);
			// console.log(tableEl, tempEl, temp, crrSelRow);


			let editedVocArrIndexBefore, editedVocArrIndexAfter;
			for (let i in editedVocArr) {
				if (editedVocArr[i].originalIndex == crrSelRowBefore) {
					editedVocArrIndexBefore = i;
				}
				else if (editedVocArr[i].originalIndex == crrSelRow) {
					editedVocArrIndexAfter = i;
				}
			}

			let tempMin = Math.min(editedVocArrIndexAfter, editedVocArrIndexBefore);
			let tempMax = Math.max(editedVocArrIndexAfter, editedVocArrIndexBefore);

			let temp0 = editedVocArr.splice(tempMax, 1)[0];
			let temp1 = editedVocArr.splice(tempMin, 1)[0];

			editedVocArr.splice(tempMin, 0, temp0);
			editedVocArr.splice(tempMax, 0, temp1);

			editedVocArr[editedVocArrIndexBefore].originalIndex = crrSelRowBefore;
			editedVocArr[editedVocArrIndexAfter].originalIndex = crrSelRow;


			// console.log({
			// 	crrSelRowBefore: crrSelRowBefore,
			// 	crrSelRow: crrSelRow,
			// 	editedVocArrIndexBefore: editedVocArrIndexBefore,
			// 	editedVocArrIndexAfter: editedVocArrIndexAfter,
			// });

			updateEditedVocArr();
		} else if (
			((typeof keysDown.ArrowUp !== "undefined") ||
				(typeof keysDown.ArrowDown !== "undefined") ||
				(typeof keysDown.ArrowLeft !== "undefined") ||
				(typeof keysDown.ArrowRight !== "undefined")) &&
			activeCellIndex >= 0
		) {

			let moveBy = 0;
			if (typeof keysDown.ArrowUp !== "undefined") {
				moveBy = -2;
			} else if (typeof keysDown.ArrowDown !== "undefined") {
				moveBy = 2;
			} else if (typeof keysDown.ArrowLeft !== "undefined") {
				moveBy = -1;
			} else if (typeof keysDown.ArrowRight !== "undefined") {
				moveBy = 1;
			}

			activeCellIndex = ((activeCellIndex + moveBy + finishedVocArr.length * 2) % (finishedVocArr.length * 2));

		} else if (keysDown.Backspace && activeCellIndex >= 0) {
			let row = Math.floor(activeCellIndex / 2);
			let rowIndex = 0;
			for (let i in editedVocArr) {
				if (editedVocArr[i].finishedVocArrIndex === row) {
					rowIndex = parseInt(i);
					break;
				}
			}
			if (editedVocArr[rowIndex].originalIndex < 0) {
				editedVocArr.splice(rowIndex, 1);
				if (row >= finishedVocArr.length - 1) {
					// row--;
					activeCellIndex -= 2;
				}
			} else {
				editedVocArr[rowIndex].lang0 = originalVocArr[editedVocArr[rowIndex].originalIndex][0];
				editedVocArr[rowIndex].lang1 = originalVocArr[editedVocArr[rowIndex].originalIndex][1];
			}
			updateEditedVocArr();
		}



	} else {

		if ((typeof keysDown.w !== "undefined" ||
			typeof keysDown.s !== "undefined") &&
			evt.altKey && activeCellIndex >= 0
		) {

			let up = (typeof keysDown.w !== "undefined");
			let rowIndex = 0;

			for (let i in editedVocArr) {
				if (editedVocArr[i].finishedVocArrIndex === Math.floor(activeCellIndex / 2)) {
					rowIndex = parseInt(i);
					break;
				}
			}
			rowIndex += (up ? 0 : 1);

			editedVocArr.splice(rowIndex, 0, {
				lang0: "",
				lang1: "",
				used: true,
				originalIndex: -1,
			});

			let tempActiveCellIndex = activeCellIndex + (up ? 0 : 2);

			// console.log("activeCellIndex: ", activeCellIndex);
			// setTimeout(function (row = Math.floor(activeCellIndex / 2), clm = activeCellIndex % 2) {
			// 	console.log(row, clm, activeCellIndex);
			// 	// activeCellIndex = row * 2 + clm;
			// 	$("#editable-voc-table")[0].children[row].children[clm].focus()
			// }, 500);

			updateEditedVocArr();
			// updateActiveCell();
			activeCellIndex = tempActiveCellIndex;

			// updateEditedVocArrFromTable();
		}
	}

	if (activeCellIndex >= 0) {
		$("#editable-voc-table")[0].children[Math.floor(activeCellIndex / 2)].children[activeCellIndex % 2].focus();
	}

	setTimeout(updateActiveCell);
	setTimeout(updateEditedVocArrFromTable, 100);

}

document.onkeyup = function (evt) {
	delete keysDown[evt.key];
}
