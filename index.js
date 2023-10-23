const electron = require('electron');
const path = require('path');
const url = require('url');
const regParser = require('automata.js');
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
    // win.loadFile('index.html');
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

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
// var dfaParser = new regParser.RegParser('a+b');
// var nfaParser = new regParser.RegParser('a+b');
// var dfa = dfaParser.parseToDFA();
// var nfa = nfaParser.parseToNFA();