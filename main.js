const { app, BrowserWindow, ipcMain } = require('electron');
const url = require('url');
const path = require('path');

if (require('electron-squirrel-startup')) return app.quit();

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 700,
        height: 600,
        maxWidth: 700,
        maxHeight: 600,
        minHeight: 500,
        minWidth: 550,
        webPreferences: {
            contextIsolation: true, // protect against prototype pollution
            enableRemoteModule: false, // turn off remote
            preload: __dirname + '/preload.js',
            devTools: true,
            sandbox: true,
        },
        title: 'Digit',
        icon: 'favicon.ico',
        titleBarStyle: 'hidden',
        titleBarOverlay: {
          color: '#f5f5f5',
        }
    });

    mainWindow.loadFile(
        './dist/index.html'
    );

    // Open the DevTools.
    //mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function () {
        mainWindow = null
    });

}



//notification function
function timerNotify() {
    const { Notification } = require('electron');
    if (!Notification.isSupported()) {
        console.log("Notifications are not supported in OS");
    }
    let newNotif = new Notification({ title: 'Break time!', body: 'Blink. Look. Walk.', timeoutType: 'never' });

    newNotif.on('click', (event, arg) => {
        mainWindow.maximize();
        console.log("clicked");
    });

    newNotif.show();
}

if (process.platform === 'win32')
{
    app.setAppUserModelId(app.name);
}
app.whenReady().then(() => {
    createWindow();

    app.on('activate', function () {
           
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
       
    })
});

app.setAppUserModelId("digit.app");

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});

ipcMain.on('onTimerNotify', (event, args) => {
    timerNotify();
});
