const electron = require('electron');
const path = require('path');
const url = require('url');
const regParser = require('automata.js');
const { remote } = require('electron');
const fs = remote.require('fs');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let win;

const createWindow = () => {
    win = new BrowserWindow({
        height: 600,
        width: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    win.loadFile('index.html');

    win.webContents.openDevTools();
    win.on('closed', () => {
        win = null;
    })
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});
app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
});

// Automata
var parser = new regParser.RegParser('a+b');
var dfa = parser.parseToDFA().toDotScript();
console.log(dfa)