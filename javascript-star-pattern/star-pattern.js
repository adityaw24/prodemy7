const input = prompt('Enter number of star');

console.log('star = ' + input);

// function starPattern
function starPattern(input) {
    let star = '';
    for (let i = 1; i <= input; i++) {
        for (let j = 1; j <= input; j++) {
            star += '*';
        }
        star += '\n';
    }
    console.log(star);
}
starPattern(input);
