const { app, BrowserWindow } = require("electron");
app.whenReady().then(() => {
  new BrowserWindow({
    width: 1280,
    minWidth: 1280,

    height: 720,
    minHeight: 720,

    autoHideMenuBar: true,

    icon: "images/logo.png",
  }).loadURL("https://notion.so/login");
});
