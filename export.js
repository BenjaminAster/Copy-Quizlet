
// Step 4: Export ----------------------------


// Quizlet:

function updateQuizletExport() {
	let exportString = "";
	let sepChars = ["$$", "$$"];

	for (let i in finishedVocArr) {
		exportString += finishedVocArr[i][0];
		exportString += sepChars[0];
		exportString += finishedVocArr[i][1];
		if (i < finishedVocArr.length - 1) exportString += sepChars[1];
	}
	if (exportString === "") {
		$("#copy-quizlet-vocabulary")[0].innerHTML = "&nbsp;";
	} else {
		$("#copy-quizlet-vocabulary")[0].innerText = exportString;
	}

}

updateQuizletExport();


// XLSX:

function createXLSXExport(file_format) {
	// console.log("export to xlsx");
	let wb = XLSX.utils.book_new();

	let exportName = (userLang === "de") ? "Vokabel-Export" : "Vocabulary export";

	wb.Props = {
		Title: exportName,
		Subject: exportName,
		Author: "benjaminaster.com",
		CreatedDate: (new Date()),
	};

	wb.SheetNames.push(exportName);

	let ws_data = finishedVocArr;  //a row with 2 columns

	let ws = XLSX.utils.aoa_to_sheet(ws_data);

	wb.Sheets["Vokabel-Export"] = ws;

	let wbout = XLSX.write(wb, { bookType: file_format, type: "binary" });

	function s2ab(s) {
		let buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
		let view = new Uint8Array(buf);  //create uint8array as viewer
		for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
		return buf;
	}
	saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), exportName + "." + file_format);
};

$("#export-to-xlsx-button").click(() => createXLSXExport("xlsx"));

$("#export-to-csv-button").click(() => createXLSXExport("csv"));

// // console.log("export to xlsx");
// let wb = XLSX.utils.book_new();

// wb.Props = {
// 	Title: "SheetJS Tutorial",
// 	Subject: "Test",
// 	Author: "Red Stapler",
// 	CreatedDate: new Date()
// };

// wb.SheetNames.push("Test Sheet");

// let ws_data = finishedVocArr;  //a row with 2 columns

// let ws = XLSX.utils.aoa_to_sheet(ws_data);

// wb.Sheets["Test Sheet"] = ws;

// let wbout = XLSX.write(wb, { bookType: "xlsx", type: "binary" });

// function s2ab(s) {
// 	let buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
// 	let view = new Uint8Array(buf);  //create uint8array as viewer
// 	for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
// 	return buf;
// }
// saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), "test.xlsx");
