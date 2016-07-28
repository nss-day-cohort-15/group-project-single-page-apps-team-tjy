
var chatBox = document.getElementById('chatBox');
var userInput = document.getElementById('userInput');
var clearButton = document.getElementById("clearButton");


// even listen to enter key //
userInput.addEventListener("keyup", checkkey);
function checkkey(event) {
  // console.log(event);
  if (event.keyCode === 13) {
  addMessage();
  }
 }

// for the clear button//
clearButton.addEventListener("click", clearmessage);
 function clearmessage() {
  var message = userInput.value;
  chatBox.innerHTML = "";
  // console.log("clearButton is clicked yonatan");
}

// the output to be displayed//
function addMessage() {
    var message = userInput.value;
    chatBox.innerHTML += `<p id="messageLine"> ${message} <button type="button" class="deleteButton"  name = "delete" >Delete</button> </p>`;
  // for the delete button //
  var deleteButtons = document.getElementsByClassName("deleteButton");
    for (var i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener("click", testDelete)
    }
}

function testDelete(deleteEvent) {
  var paragraph = document.querySelectorAll("p")
  // console.log(deleteEvent.target.parentNode.id)
  deleteEvent.target.parentNode.innerHTML = "";
}


// // // copied from thomas
// var darkTheme = document.getElementById('darkThemeCheckbox');
// var largeText = document.getElementById('largeTextCheckbox');
// var container = document.querySelectorAll(".container");

// //----"Dark Theme" check box listener to make background darker in message box
// darkTheme.addEventListener('click', function darkThemeEvent () {
//     chatBox.classList.toggle("staysBlack");
// //
// // });

// //----"Large Text" check box listener to make text large in message box
// largeText.addEventListener('click', function largeTextEvent () {
//     chatBox.classList.toggle("stayLarge");
// //
// // });



