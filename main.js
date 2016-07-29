var chatBox = document.getElementById('chatBox');
var userInput = document.getElementById('userInput');
var clearButton = document.getElementById('clearButton');
  userInput.addEventListener("keyup", checkKey);
  function checkKey(event){
    console.log(event)
    if(event.keyCode === 13){
      console.log(clearButton)
      addMessage();
    }
  }

function addMessage () {
  var message = userInput.value;
  chatBox.innerHTML += message;
  checkChatBox();
   }

// remove messages
clearButton.addEventListener("click", clearMessage);

function clearMessage(event) {
  console.log('clearMessage is running')
  chatBox.innerHTML = "";
  checkChatBox();
}

// This will disable the first button with a class of "button-message"
 function checkChatBox () {
  console.log(chatBox.innerHTML);
  if (chatBox.innerHTML ===""){
    console.log()
    clearButton.disabled = true;
    console.log(clearButton);
}else{
  clearButton.disabled = false;
}
userInput.value = "";
}
