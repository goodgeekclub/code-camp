let row = 5;
let column = 5;
for (let y = row; y > 0; y--) {
    for (let x = 0; x < column; x++) {
        process.stdout.write(x);
    }
}