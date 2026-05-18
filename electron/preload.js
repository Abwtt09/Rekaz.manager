const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('electronAPI', {
  navigate: (page) => ipcRenderer.send('navigate', page),
  openExternal: (url) => ipcRenderer.send('open-external', url),
  winMinimize: () => ipcRenderer.send('win-minimize'),
  winMaximize: () => ipcRenderer.send('win-maximize'),
  winClose: () => ipcRenderer.send('win-close'),
  getVersion: () => ipcRenderer.sendSync('get-version'),
  downloadUpdate: () => ipcRenderer.send('download-update'),
  installUpdate: () => ipcRenderer.send('install-update'),
  onUpdateAvailable: (cb) => ipcRenderer.on('update-available', (e, v) => cb(v)),
  onUpdateDownloaded: (cb) => ipcRenderer.on('update-downloaded', () => cb()),
  platform: process.platform,
});
