console.log("working;")
const { app, BrowserWindow ,Menu,} = require('electron')
const path=require("path")
const url=require("url")
const {MainMenu}=require("../common/mainMenu")

let win
const createWindow = () => {
     //new MainMenu()
     win = new BrowserWindow({
      width: 800,
      height: 600,
      /*webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }*/
    }),
    win.loadFile('./src/render/home.html')
  }

app.whenReady().then(() => {
    createWindow()
    Menu.setApplicationMenu(null);
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })
  })
 
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })

