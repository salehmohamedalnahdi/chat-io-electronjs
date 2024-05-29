class MainMenu{
    constructor (){
    const {Menu}=require('electron')
      const template = [
        {
              label: "Menu",
              submenu: [
                { role: 'about' },
                { type: 'separator' },
                { role: 'services' },
                { type: 'separator' },
                { role: 'hide' },
                { role: 'hideOthers' },
                { role: 'unhide' },
                { type: 'separator' },
                { role: 'quit' }
              ]
            },
            {
                label: "Help"
            }
        ]
            const menu = Menu.buildFromTemplate(template)
            Menu.setApplicationMenu(menu)
    }
}
module.exports={MainMenu}