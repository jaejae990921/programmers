const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    cal(Number(input[0]));
});

function cal(n) {
    for (let i = 1; i < n + 1; i++) {
        console.log('*'.repeat(i));
    }
}