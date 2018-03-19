//takes textarea content, displays it
function showMessage() {
    var message = document.getElementById("message").value;
    document.getElementById("display-message").innerHTML = message;
}
//hide unnecessary elements when reading WIP
function hideInput() {
    var button = document.getElementById('buttonInput');
    button.style.display='none';
    var message = document.getElementById('message');
    message.style.display='none';
    var main = document.getElementsByClassName('main')[0];
    main.style['grid-area']='1 / 2 / 2 / 3'
}
//both for no scroll-bar, auto expanding height of textarea
var textareaVar = document.getElementsByTagName('textarea');
for (var i = 0; i < textareaVar.length; i++) {
    textareaVar[i].setAttribute('style', 'height:' + (textareaVar[i].scrollHeight) + 'px;overflow-y:hidden;');
    textareaVar[i].addEventListener("input", OnInput, false);
}
function OnInput(e) {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
}