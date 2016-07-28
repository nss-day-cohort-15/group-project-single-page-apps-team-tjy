var userInput= document.getElementById("userInput");
var chatBox= document.getElementById("chatBox");
var clearButton= document.getElementById("clearButton");

///////////////checkKey event listener////////////
userInput.addEventListener("keyup", checkKey)
function checkKey(event){
// console.log (event);

if(event.keyCode===13){
	// console.log("addMessage is running")
addMessage();

	}
}
////////////clearButton event listener////////////////////////
clearButton.addEventListener("click", clearMessage)

function clearMessage(event){
console.log ("clearMessage is working!", event);
var clearMessage= chatBox.value;
chatBox.innerHTML = "";
}

	// add line to remove previous user input
function addMessage(){
	console.log("addMessage running");
	var message= userInput.value;
	chatBox.innerHTML += message;




	}



