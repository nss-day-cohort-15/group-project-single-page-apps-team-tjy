var userInput = document.getElementById('userInput');
var darkTheme = document.getElementById('darkThemeCheckbox');
var largeText = document.getElementById('largeTextCheckbox');
var chatBox= document.getElementById("chatBox");
var container= document.querySelector(".container");

//----"Dark Theme" check box listener to make background darker in message box
darkTheme.addEventListener('click', function darkThemeEvent () {
	container.classList.toggle("darkThemeColors");
	console.log("Dark Theme fired!");
});

//----"Large Text" check box listener to make text large in message box
largeText.addEventListener('click', function largeTextEvent () {
	container.classList.toggle("largeTextLetters");
	console.log("large letters fired!");
});


//---Enter key event listener for message input box
// userInput.addEventListener("keypress", myFunction);


// //------XHR------//

// var xhr = new XMLHttpRequest();
// var preloaded = null;
// xhr.addEventListener("load", loadedFile)
// xhr.addEventListener("failed", failedFile)

// xhr.open("GET", "messages.json");

// xhr.send();

// var preloaded = "";


// function loadedFile(){
// 	console.log("file loaded");
// 	preloaded = JSON.parse(xhr.responseText);
// 	console.log('HELLO', preloaded);
// 	applyText(preloaded);
// 	return preloaded;
// };

// function failedFile(){
// 	alert("file failed to load");
// };

// function applyText(object){
// 	var counter = 0;
// 	for (var i = 0; i < object.messages.length; i++) {
// 		var messageCard = `<div class="lightbox"><h3>${object.messages[i].message}</h3><button id="card-${counter}">Delete</button></div>`;
// 		messageWindow.innerHTML += messageCard;
// 		counter++;
// 	};
// };
// console.log("check", preloaded);
