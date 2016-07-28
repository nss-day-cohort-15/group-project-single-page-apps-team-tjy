var chatBox = document.getElementById('chatBox');
var userInput = document.getElementById('userInput');

  userInput.addEventListener("keyup", checkKey);
  function checkKey(event){
    console.log(event)
    if(event.keyCode === 13){
      addMessage();
    }
  }

function addMessage () {
  var message = userInput.value;
  chatBox.innerHTML += message;
 }

// var chatBox = document.getElementById('chatBox');
// var userInput = document.getElementById('userInput');
// var userInput = document.getElementById('clearButton');

// // check key event
// userInput.addEventListener("keyup", checkkey);
// function checkkey(event) {
//  // console.log(event);
//  if (event.keyCode === 13) {
//  addmessage();
//  }
// }

// function addmessage() {
//  var message = userInput.value;
//  chatBox.innerHTML += message;
// }
//  // addline to remove userInput
var chatBox = document.getElementById('chatBox');


// remove messages
clearButton.addEventListener("click", clearMessage);

function clearMessage(event) {
  console.log('addMessage is running')
  chatBox.innerHTML = "";
}





