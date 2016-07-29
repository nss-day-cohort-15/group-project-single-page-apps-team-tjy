
var chatBox = document.getElementById('chatBox');
var userInput = document.getElementById('userInput');
var clearButton = document.getElementById("clearButton");
var container = document.querySelector(".container");
var darkTheme = document.getElementById('darkThemeCheckbox');
var largeText = document.getElementById('largeTextCheckbox');

// event listener for enter key //
userInput.addEventListener("keyup", checkkey);
function checkkey(event) {
  // console.log(event);
  if (event.keyCode === 13) {
  addMessage();
  }
 }

// for the clear  message button//
clearButton.addEventListener("click", clearmessage);
 function clearmessage() {
  // var message = chatBox.innerHTML;
  chatBox.innerHTML = "";
  checkChatBox();

  }

// output to be displayed //
function addMessage() {
    var message = userInput.value;
    chatBox.innerHTML += `<p id="messageLine"> ${message} <button type="button" class="deleteButton"  name = "delete" >Delete</button> </p>`;
// var for the delete button  to each line of text //
  var deleteButtons = document.getElementsByClassName("deleteButton");
    for (var i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener("click", testDelete)
      checkChatBox();
       // to clear the text field after each insertion
       userInput.value = "";
    }
    checkChatBox();
}
// function for delete button to each line of text
function testDelete(deleteEvent) {
  console.log("test delete running");
  // var paragraph = document.querySelectorAll("p")

  // console.log(deleteEvent.target.parentElement)
  //using "" doesn't clear evthg so we use .remove
  deleteEvent.target.parentElement.remove();
  checkChatBox();
}

// // // check boxes

// "Dark Theme" check box listener to make background darker in message box
darkTheme.addEventListener('click', function darkThemeEvent () {
    container.classList.toggle("darkThemeColors");
});

//----"Large Text" check box listener to make text large in message box
largeText.addEventListener('click', function largeTextEvent () {
    container.classList.toggle("LargeTextLetters");
// //
});

 //to run json file
function chattyfile(chattyText) {
  // console.log(chattyText);
  for (var i = 0; i < chattyText.length; i++) {
    var message = chattyText[i].message;
    chatBox.innerHTML += `<p id="messageLine"> ${message} <button type="button" class="deleteButton"  name = "delete" >Delete</button> </p>`;

  }
    // var message = userInput.value;

// var for the delete button  to each line of text //
  var deleteButtons = document.getElementsByClassName("deleteButton");
    for (var i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener("click", testDelete)
       // to clear the text field after each insertion
       // userInput.value = "";
    }
}



// to disable clear button and make sure to call this fun in all preceding fun
 function checkChatBox () {
  if (chatBox.innerHTML === ""){
  // console.log('if checkChatBox running')
    clearButton.disabled = true;
} else{
  // console.log('else checkChatBox running', chatBox.innerHTML)
  clearButton.disabled = false;
}
// userInput.value = "";
}

Chatty.getChattyText(chattyfile);


