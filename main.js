const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadURL('http://localhost:3000'); // Assuming React app is running on port 3000

  win.webContents.openDevTools(); // Uncomment this line to open DevTools
}

app.whenReady().then(createWindow);
