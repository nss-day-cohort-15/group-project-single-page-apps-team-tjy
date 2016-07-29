
var testDelete = (function (deleteEvent) {
  var paragraph = document.querySelectorAll("p")
  deleteEvent.target.parentNode.innerHTML = "";
  var deleteButtons = document.getElementsByClassName("deleteButton");
    for (var i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener("click", testDelete);
     }
   return deleteEvent;
})(testDelete);





