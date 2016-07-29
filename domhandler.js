var userInput = document.getElementById('userInput');
var darkTheme = document.getElementById('darkThemeCheckbox');
var largeText = document.getElementById('largeTextCheckbox');
var chatBox= document.getElementById("chatBox");
var container= document.querySelector(".container");

//----"Dark Theme" check box listener to make background darker in message box
darkTheme.addEventListener('click', function darkThemeEvent () {
	container.classList.toggle("darkThemeColors");
	// console.log("Dark Theme fired!");
});

//----"Large Text" check box listener to make text large in message box
largeText.addEventListener('click', function largeTextEvent () {
	container.classList.toggle("largeTextLetters");
	// console.log("large letters fired!");
});


