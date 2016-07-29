
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

  }

// output to be displayed //
function addMessage() {
    var message = userInput.value;
    chatBox.innerHTML += `<p id="messageLine"> ${message} <button type="button" class="deleteButton"  name = "delete" >Delete</button> </p>`;
// var for the delete button  to each line of text //
  var deleteButtons = document.getElementsByClassName("deleteButton");
    for (var i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener("click", testDelete)
       // to clear the text field after each insertion
       userInput.value = "";
    }
}
// function for delete button to each line of text
function testDelete(deleteEvent) {
  var paragraph = document.querySelectorAll("p")
  deleteEvent.target.parentNode.innerHTML = "";
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
  console.log(chattyText);
    var message = userInput.value;
    chatBox.innerHTML += `<p id="messageLine"> ${message} <button type="button" class="deleteButton"  name = "delete" >Delete</button> </p>`;
// var for the delete button  to each line of text //
  var deleteButtons = document.getElementsByClassName("deleteButton");
    for (var i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener("click", testDelete)
       // to clear the text field after each insertion
       userInput.value = "";
    }
}
Chatty.getChattyText(chattyfile);


// to disable clear button
 function checkChatBox () {
  console.log(checkChatBox);
  if (chatBox.innerHTML === ""){
    clearButton.getAttribute.disabled = true;
} else{
  clearButton.getAttribute.disabled = false;
}
// userInput.value = "";
}




