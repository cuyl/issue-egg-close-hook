'use strict';

const fs = require('fs');

module.exports = app => {
  console.log('Starting with start hook and close hook');
  fs.appendFileSync('close.log', '\n');
  // kill(2) Ctrl-C
  process.once('SIGINT', () => {
    console.log('[' + process.pid + ']---SIGINT---');
    fs.appendFileSync('close.log', '[' + process.pid + '] close SIGINT\n');
  });
  // kill(3) Ctrl-\
  process.once('SIGQUIT', () => {
    console.log('[' + process.pid + ']---SIGQUIT---');
    fs.appendFileSync('close.log', '[' + process.pid + '] close SIGQUIT\n');
  });
  // kill(15) default
  process.once('SIGTERM', () => {
    console.log('[' + process.pid + ']---SIGTERM---');
    fs.appendFileSync('close.log', '[' + process.pid + '] close SIGTERM \n');
  });
  app.beforeStart(() => {
    console.log('...beforeStart...');
  });
  app.beforeClose(() => {
    console.log('...beforeClose...');
    console.log('[' + process.pid + ']---SIGINT---');
    fs.appendFileSync('close.log', '[' + process.pid + '] close \n');
  });
};
