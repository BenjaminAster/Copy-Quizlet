


let databaseKeys = [];
let id;
let originalVocArr = [];


// QUIZLET ****************************

database.ref("/copy-quizlet/keys").once("value", function (data) {
	if (data.val()) {
		databaseKeys = Object.keys(data.val());
		let dates = Object.values(data.val());
		for (let i in databaseKeys) {
			if (Math.floor((new Date()).getTime() / 1000) > dates[i] + 36000) {
				deleteId(databaseKeys[i]);
			}
		}
	}
	// else databaseKeys = [];

	createId();
});


function createId() {
	id = Math.floor(Math.random() * 9000 + 1000);
	if (databaseKeys.includes(id)) {
		setTimeout(createId, 0);
	} else {
		let date = Math.floor((new Date()).getTime() / 1000);
		database.ref("/copy-quizlet/keys/" + id).set(date);
		database.ref("/copy-quizlet/" + id).set(date);
		$("#console-script-id")[0].innerText = id;

		database.ref("/copy-quizlet/" + id).on("value", function (data) {
			// console.log(data.val());
			if ((typeof data.val()) == "object" && data.val()) {
				setTimeout(x => {
					// originalVocArr = data.val();

					for (let i of data.val()) {
						originalVocArr.push([
							(typeof i[0] === "undefined") ? "" : i[0],
							(typeof i[1] === "undefined") ? "" : i[1],
						]);
					}
					// console.log("vocArr:", originalVocArr);
					// deleteId(id);

					let date = Math.floor((new Date()).getTime() / 1000);
					database.ref("/copy-quizlet/keys/" + id).set(date);
					database.ref("/copy-quizlet/" + id).set(date);

					createVocTable();
				}, 1000);
			};
		});
	}
}

function deleteId(_id) {
	database.ref("copy-quizlet/" + _id).set(null);
	database.ref("copy-quizlet/keys/" + _id).set(null);
}

window.addEventListener("beforeunload", function (e) {
	// console.log("testtest");
	deleteId(id);
});

// EXCEL & CSV **************************************

$("#xlsx-upload")[0].oninput = $("#csv-upload")[0].oninput = function (evt) {

	// console.log(evt);

	var data, workbook, first_sheet_name, worksheet, vocArr;

	fetch(URL.createObjectURL(evt.srcElement.files[0]))
		.then(function (res) {

			if (!res.ok) throw new Error("fetch failed");
			return res.arrayBuffer();
		})
		.then(function (ab) {

			data = new Uint8Array(ab);
			workbook = XLSX.read(data, {
				type: "array"
			});

			first_sheet_name = workbook.SheetNames[0];

			worksheet = workbook.Sheets[first_sheet_name];

			vocArr = XLSX.utils.sheet_to_json(worksheet, { raw: true, header: 1 });

			// originalVocArr = [];
			// editedVocArr = [];
			// finishedVocArr = [];

			for (let i of vocArr) {
				originalVocArr.push([
					(typeof i[0] === "undefined") ? "" : i[0],
					(typeof i[1] === "undefined") ? "" : i[1],
				]);
			}

			createVocTable();

			evt.srcElement.value = "";

		});
}

// ANKI *******************************

$("#anki-upload")[0].oninput = function (evt) {
	fetch(URL.createObjectURL(evt.srcElement.files[0]))
		.then(function (res) {

			if (!res.ok) throw new Error("fetch failed");
			return res.arrayBuffer();
		})
		.then(function (ab) {

			let vocArr = ankiStringtoArray((new TextDecoder("utf-8")).decode(ab));

			for (let i of vocArr) {
				originalVocArr.push([
					(typeof i[0] === "undefined") ? "" : i[0],
					(typeof i[1] === "undefined") ? "" : i[1],
				]);
			}

			createVocTable();

			evt.srcElement.value = "";

		});
}

function ankiStringtoArray(string) {

	let el = document.createElement("div");
	// el.hidden = true;
	el.style.color = "transparent";
	document.body.append(el);

	// el.innerHTML = string.trim().replace(/\t/g, "§§§§§").replace(/\n/g, "€€€€€");
	// el.innerText = el.innerText.replace(/\"\"/g, "#####").replace(/\"/g, " ").replace(/#####/g, "\"");
	// let array = el.innerText.split("€€€€€");
	// array.forEach((item, index) => {
	// 	array[index] = item.split("§§§§§"); array[index].forEach((_item, _index) => {
	// 		array[index][_index] = array[index][_index].trim()
	// 	});
	// });


	el.innerHTML = string.trim().replace(/\t/g, "§§§§§").replace(/\n/g, "€€€€€").replace(/<p>/g, "<br>");
	// console.log(1, "abc", " " + el.innerHTML);
	// console.log(1, "abc", " " + el.innerText);
	el.innerText = el.innerText.replace(/\"\"/g, "#####").replace(/\"/g, " ").replace(/#####/g, "\"");
	let array = el.innerText.split("€€€€€");
	for (let i in array) {
		array[i] = array[i].split("§§§§§");
		array[i].forEach((item, index) => { array[i][index] = item.trim(); });
	}

	// console.log(array, el.innerHTML, el.innerText, el);

	document.body.removeChild(el);

	return array;
};

// console.log(ankiStringtoArray(`Vorderseite	Rückseite
// <b>bold</b>	<i>italic</i>
// "<u>unterstrichen</u>, ""Anführungszeichen"""	hoch<sup>gestellt</sup>
// "<span style=""font-size: 16.6667px;"">tief<sub>gestellt</sub></span>"	"<font color=""#7bff00"">#7bff00</font>,&nbsp;<font color=""#ff007b"">#ff007b</font>"
// "ein<img src=""Anki-icon.svg.png"">Bild"	html: <b>bold</b> <br> <kbd>keyboard</kbd> &nbsp; &amp;
// `));
