
console.log("my chatty is working")
var xhr = new XMLHttpRequest();

xhr.addEventListener("load", loadedFile)
xhr.addEventListener("failed", failedFile)

xhr.open("GET", "chatty.json");

xhr.send();

function loadedFile(){
	console.log("file loaded");
	var preloaded = JSON.parse(xhr.responseText);
	// applyText(preloaded)
};

function failedFile(){
	alert("file failed to load");
};





