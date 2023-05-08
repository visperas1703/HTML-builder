const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'files');
const targetDir = path.join(__dirname, 'files-copy');

function copyFolder(source, target) {
  fs.mkdir(target, { recursive: true },(err) => {
    if (err) throw err;
    fs.readdir(source, { withFileTypes: true }, (err, files) => {

      if (err) throw err;
      files.forEach((file) => {
        const sourcePath = path.join(source, file.name);
        const targetPath = path.join(target, file.name);

        if (file.isDirectory()) {
          copyDir(sourcePath, targetPath);
        } else {
            
          fs.copyFile(sourcePath, targetPath, (err) => {
            if (err) throw err;
          });
        }
      });
    });
  });
}

copyFolder(sourceDir, targetDir);