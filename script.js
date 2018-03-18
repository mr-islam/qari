//takes textarea content, displays it
function showMessage() {
    var message = document.getElementById("message").value;
    document.getElementById("display-message").innerHTML = message;
}
//hide unnecessary elements when reading WIP
function hideInput() {
    var button = document.getElementById('button');
    button.style.display='none';
    var message = document.getElementById('message');
    message.style.display='none';
}
//move title to top when reading

//for no scroll-bar, auto expanding height of textarea
var textareaVar = document.getElementsByTagName('textarea');
for (var i = 0; i < textareaVar.length; i++) {
    textareaVar[i].setAttribute('style', 'height:' + (textareaVar[i].scrollHeight) + 'px;overflow-y:hidden;');
    textareaVar[i].addEventListener("input", OnInput, false);
}
function OnInput(e) {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
}