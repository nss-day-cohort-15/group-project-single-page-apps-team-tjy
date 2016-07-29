
var Chatty = (function () {
    var chattyArray = [];

    return {
        getChattyText: function (callback) {
            var xhr = new XMLHttpRequest()
            xhr.open('GET', 'chattyText.json')
            xhr.addEventListener("load", function(evt) {
                // Parse JSON objects into a native JavaScript Object
                chattyText = JSON.parse(evt.target.responseText);
                console.log(chattyText);
                callback(chattyText)
            })
            xhr.send()
        }
    }
})()


