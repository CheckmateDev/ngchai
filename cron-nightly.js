const package = require('./package.json');
const exec = require('child_process').exec;
const fs = require('fs');

exec(`git show -s --format=%ct \$(git rev-parse --verify --short HEAD)`, (error, epoch) => {
  if (!error) {
    const time = new Date(epoch * 1000).toISOString().split('T')[0].replace(/\W/g, '');
    package.version = (package.version + '-nightly.' + time).replace(/\r?\n|\r/g, '');
    fs.writeFile('./dist/package.json', JSON.stringify(package), 'utf8', (error) => {
      if (error) {
        throw error;
      }
      return console.log('Package updated to ' + package.version);;
    });
  }
});