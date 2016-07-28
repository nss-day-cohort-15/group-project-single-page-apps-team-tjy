var messageInput = document.getElementById('messageInput');
var darkTheme = document.getElementById('darkTheme');
var largeText = document.getElementById('largeText');

//----"Dark Theme" check box listener to make background darker in message box
darkTheme.addEventListener('click', function darkThemeEvent () {
	messageWindow.classList.toggle('darkThemeColors');
});

//----"Large Text" check box listener to make text large in message box
largeText.addEventListener('click', function largeTextEvent () {
	messageWindow.classList.toggle('largeTextLetters');
});
