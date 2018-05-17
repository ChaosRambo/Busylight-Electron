const ipcRenderer = require('electron').ipcRenderer;

$('.button').on('click', function () {
    var input = this.className.split(' ');
    input.shift();
    ipcRenderer.send('input', input)
});