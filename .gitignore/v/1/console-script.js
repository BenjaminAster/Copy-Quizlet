
/*
let id=5, el=document.createElement("script");
el.src="http://localhost:5000/copy-quizlet/console-script.js";
document.body.append(el);
*/

let vocArr = [];

function getLearnset() {

	try {
		let _vocArr = [];

		let learnsetIndex = NaN;
		for (let i of window.location.pathname.split("/")) {
			if (!isNaN(parseInt(i))) {
				learnsetIndex = parseInt(i);
			}
		}

		let vocLength = parseInt($("#SetPageTermsHeader-termsListHeading-" + learnsetIndex)[0]
			.innerText.split("(")[1].split(")")[0]);

		if ($(`.TermText.notranslate`).length != vocLength * 2) return false;

		for (let i = 0; i < vocLength; i++) {
			_vocArr.push([
				$(`.TermText.notranslate`)[i * 2].innerText.replace(/\n\n/g, "\n"),
				$(`.TermText.notranslate`)[i * 2 + 1].innerText.replace(/\n\n/g, "\n"),
			]);
		};

		return _vocArr;
	} catch {
		return false;
	}
}

function sendLearnset() {
	vocArr = getLearnset();

	// let learnset = getLearnset();

	if (!vocArr) {
		// outputConsoleText(true);
		return "could not get learnset";
	}


	/* if (typeof database == "undefined") */
	var database = firebase.database();
	// if (!database) var database = firebase.database();

	// let errorDetected = false;

	if (typeof id != "undefined") {
		database.ref("copy-quizlet/keys/" + id).once("value", function (data) {
			if (typeof data.val() == "number") {
				database.ref("copy-quizlet/keys/" + id).set(true);

				database.ref("copy-quizlet/" + id).set(vocArr);

				outputConsoleText(false);
			} else {
				outputConsoleText(true);
				return false;
			}
		});

	} else {
		outputConsoleText(true);
		return false;
	}


}

function scrollAndGetLearnset() {

	setTimeout(_ => window.scrollTo(0, document.body.scrollHeight), 100);

	setTimeout(_ => window.scrollTo(0, document.body.scrollHeight / 8), 200);

	// setTimeout(x => window.scrollTo(0, document.body.scrollHeight / 8), 300);

	setTimeout(function () {
		// try {
		if (sendLearnset() === "could not get learnset") {
			console.log("trying again...");
			setTimeout(scrollAndGetLearnset, 100);
		}
		// } catch {
		// 	if (userLang == "de") {
		// 		consoleText = `ERROR - Leider ist bei der Hinzufügung vom Lernset "${title}" zur Datenbank ein Fehler aufgetreten.`;
		// 	} else {
		// 		consoleText = `ERROR - Unfortunately an error occurred while adding the learnset "${title}" to the database.`;
		// 	}
		// 	consoleTextColor = "red";
		// 	console.log(
		// 		"%c" + consoleText,
		// 		`background: black;
		// 		color: ${consoleTextColor};
		// 		font-family: sans-serif;
		// 		font-size: 2em;`);

		// }
	}, 300);
}

function outputConsoleText(error) {

	if (!error) {

		if (userLang == "de") {
			consoleText = `Die Vokabeln des Lernsets "${title}" wurden zur Datenbank hinzugefügt. ${"\n"
				}Gehe nun zurück zu benjaminaster.com/copy-quizlet.`;
		} else {
			consoleText = `The vocabulary of the learnset "${title}" has been added to the database. ${"\n"
				}Now go back to benjaminaster.com/copy-quizlet.`;
		}
		consoleTextColor = "lime";
	} else {
		if (userLang == "de") {
			consoleText = `ERROR - Leider ist bei der Hinzufügung vom Lernset "${title}" zur Datenbank ein Fehler aufgetreten.`;
		} else {
			consoleText = `ERROR - Unfortunately an error occurred while adding the learnset "${title}" to the database.`;
		}
		consoleTextColor = "red";
	}

	console.table(vocArr);


	console.log(
		"%c" + consoleText,
		`background: black;
		color: ${consoleTextColor};
		font-family: sans-serif;
		font-size: 2em;`);
}

let version = 17;



if (!database) var database;
// let database;
let xhttpApp = new XMLHttpRequest();
xhttpApp.open("GET", "https://benjaminaster.com/jquery.js", true);
xhttpApp.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		eval(xhttpApp.responseText);
		$.get("https://cdnjs.cloudflare.com/ajax/libs/firebase/8.1.1/firebase-app.js", (data_app) => {
			// $.get("https://benjaminaster.com/__/firebase/8.1.1/firebase-app.js", (data) => {
			eval(data_app);
			$.get("https://cdnjs.cloudflare.com/ajax/libs/firebase/8.1.1/firebase-database.js", (data_database) => {
				// $.get("https://benjaminaster.com/__/firebase/8.1.1/firebase-app.js", (data) => {
				eval(data_database);
				$.get("https://benjaminaster.com/utils/firebaseinit.js", (data_init) => {
					eval(data_init);

					// console.log(data_app, data_database, data_init);

					// setTimeout(scrollAndGetLearnset, 100);
					scrollAndGetLearnset();

				});
			});
		});
	}
};
xhttpApp.send();

window.scrollTo(0, document.body.scrollHeight);

let userLang = navigator.language.toLowerCase();
if (userLang == "de" || userLang == "de-de" || userLang == "de-at" || userLang == "de-ch") {
	userLang = "de";
} else {
	userLang = "en";
}

let title = document.title;
title = title.substring(0, title.length - 10);


let consoleText;
let consoleTextColor = "yellow";

if (userLang == "de") {
	consoleText = `Die Vokabeln des Lernsets "${title}" werden zur Datenbank hinzugefügt...`;
} else {
	consoleText = `The vocabulary of learnset "${title}" will be sent to the database...`;
}

console.log(
	"%c" + consoleText,
	`background: black;
	color: ${consoleTextColor};
	font-family: sans-serif;
	font-size: 2em;`);






