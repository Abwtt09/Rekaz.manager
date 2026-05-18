const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');
let mainWindow;

let autoUpdater;
try {
  autoUpdater = require('electron-updater').autoUpdater;
  autoUpdater.autoDownload = false;
  autoUpdater.setFeedURL({ provider: "github", owner: "Rekaz-manager", repo: "Rekaz.manager" });
} catch(e) { console.log('Auto-updater not available'); }

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280, height: 820, minWidth: 900, minHeight: 600,
    icon: path.join(__dirname, 'icon.ico'),
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false, contextIsolation: true,
    },
    show: false, backgroundColor: '#FFFFFF',
  });
  mainWindow.loadFile(path.join(__dirname, 'renderer', 'splash.html'));
  mainWindow.once('ready-to-show', () => mainWindow.show());
  mainWindow.on('closed', () => { mainWindow = null; });
  mainWindow.webContents.on('before-input-event', (event, input) => {
    if (input.alt && (input.key === 'Left' || input.key === 'Right')) event.preventDefault();
  });
  if (autoUpdater) setTimeout(() => {
    autoUpdater.on('update-available', (info) => mainWindow?.webContents.send('update-available', info.version));
    autoUpdater.on('update-downloaded', () => mainWindow?.webContents.send('update-downloaded'));
    autoUpdater.on('error', (e) => console.log('Update error:', e.message));
    autoUpdater.checkForUpdates().catch(e => console.log('Check failed:', e.message));
  }, 3000);
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });

const pages = { dashboard:'dashboard.html', welcome:'welcome.html', splash:'splash.html', pos:'pos.html', appchoice:'appchoice.html' };
ipcMain.on('navigate', (e, page) => { if(pages[page]){mainWindow.loadFile(path.join(__dirname,'renderer',pages[page]));mainWindow.webContents.clearHistory();} });
ipcMain.on('open-external', (e, url) => shell.openExternal(url));
ipcMain.on('win-minimize', () => mainWindow?.minimize());
ipcMain.on('win-maximize', () => { if(mainWindow?.isMaximized()) mainWindow.unmaximize(); else mainWindow?.maximize(); });
ipcMain.on('win-close', () => mainWindow?.close());
ipcMain.on('get-version', (e) => { e.returnValue = app.getVersion(); });
ipcMain.on('download-update', () => { if(autoUpdater) autoUpdater.downloadUpdate(); });
ipcMain.on('install-update', () => { if(autoUpdater) autoUpdater.quitAndInstall(); });
