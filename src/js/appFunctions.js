const { ipcRenderer } = require('electron');
const ipc = ipcRenderer
const minimizeBtn = document.getElementById('minimizeBtn')
const closeBtn = document.getElementById('closeBtn')

closeBtn.addEventListener('click', () => {
  ipc.send('closeApp')
})

minimizeBtn.addEventListener('click', () => {
  ipc.send('minimizeApp')
})