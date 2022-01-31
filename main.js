const { app, BrowserWindow, ipcMain } = require('electron');
const url = require('url');
const path = require('path');


let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        maxWidth: 800,
        maxHeight: 600,
        minHeight: 600,
        minWidth: 550,
        autoHideMenuBar: true,
        webPreferences: {
            contextIsolation: true, // protect against prototype pollution
            enableRemoteModule: false, // turn off remote
            preload: __dirname + '/preload.js',
            devTools: false,
            sandbox: true,
        },
        title: 'Digit',
        icon: 'favicon.ico',
        frame: false
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
        //mainWindow.webContents.send("fromMain");
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
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow();

       
    })
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});

ipcMain.on('onTimerNotify', (event, args) => {
    timerNotify();
});
/* 
app.on('activate', function () {
    if (mainWindow === null) createWindow()
}); */