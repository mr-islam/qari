function colorize() {
    var h1 = document.getElementsByTagName('h1')[0];
    var topBar = document.getElementById('topBar');
    var randomNum = Math.floor((Math.random()*8)+1);
    switch (randomNum) {
        case 1:
            h1.style['text-decoration'] = 'underline var(--magenta)';
            topBar.style['background-color'] = 'var(--cyan)';
            break;
        case 2:
            h1.style['text-decoration'] = 'underline var(--cyan)';
            topBar.style['background-color'] = 'var(--magenta)';
            break;
        case 3:
            h1.style['text-decoration'] = 'underline var(--violet)';
            topBar.style['background-color'] = 'var(--yellow)';
            break;
        case 4:
            h1.style['text-decoration'] = 'underline var(--yellow)';
            topBar.style['background-color'] = 'var(--violet)';
            break;
        case 5:
            h1.style['text-decoration'] = 'underline var(--orange)';
            topBar.style['background-color'] = 'var(--blue)';
            break;
        case 6:
            h1.style['text-decoration'] = 'underline var(--blue)';
            topBar.style['background-color'] = 'var(--orange)';
            break;
        case 7:
            h1.style['text-decoration'] = 'underline var(--green)';
            topBar.style['background-color'] = 'var(--red)';
            break;
        case 8:
            h1.style['text-decoration'] = 'underline var(--red)';
            topBar.style['background-color'] = 'var(--green)';
    }
}
function showMessage() {
    var message = document.getElementById("message").value;
    document.getElementById("display-message").innerHTML = message;
}
function hideInput() {
    var button = document.getElementById('buttonInput');
        button.style.display = 'none';
    var message = document.getElementById('message');
        message.style.display = 'none';
    var bar = document.getElementById('topBar');
        bar.style['grid-area'] = '3 / 2 / 4 / 3';
        bar.style['align-self'] = 'start';
    var main = document.getElementsByClassName('main')[0];
        main.style['grid-area'] = '1 / 2 / 2 / 3';
    var contentMove = document.getElementById('user-output');
    var contentReceive = document.getElementsByClassName('center')[0];
        contentReceive.appendChild(contentMove);
        contentReceive.style['grid-area'] = '2 / 2 / 3 / 3';
}

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

// modal stuff
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("options");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// switch theme
var darkCSS = document.getElementById("darkCSS");
var lightCSS = document.getElementById("lightCSS");
function darkMode() {
    darkCSS.media = '';
    lightCSS.media = 'none';
}
function lightMode() {
    darkCSS.media = 'none';
    lightCSS.media = '';
}