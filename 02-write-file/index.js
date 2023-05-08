const fs = require('fs');
const path  = require('path');
const { stdin, stdout, exit} = require('process');
const writePath = path.join(__dirname, 'text.txt');

const output = fs.createWriteStream(writePath);
stdout.write('Введите текст здесь...\n');

function closeText() {
    output.end(() => {
        stdout.write('До свидания!');
        exit();
    });
}

stdin.on('data', data => {
    if (data.toString().trim() === 'exit' ) {
        closeText();
    }
    output.write(data);
}
);

process.on('SIGINT', function closeText() {
    console.log('До свидания!');
    process.exit();
  });





