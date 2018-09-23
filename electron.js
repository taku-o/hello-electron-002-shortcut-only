'use strict';
const electron = require('electron');
const app = electron.app;
const globalShortcut = electron.globalShortcut;

app.on('ready', function() {
  globalShortcut.register('Command+S', function() {
    // アプリが立ち上がっている間、
    // Command+S による保存を封じるぞ
    console.log('Command+S is pressed')
  })
});
