const button = $('button');
const word = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const word = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

button.click(function () {
    // const input = prompt('Enter number of pattern');
    const input = $('input').val();

    // function starPattern
    function starPattern(input) {

        let star = '';
        for (let i = 1; i <= input; i++) {
            for (let j = 1; j <= input; j++) {
                star += '* ';
            }
            star += '\n';
        }

        console.log('star = ' + input  + ' * ' + input);
        return star;
    }

    // function Pattern
    function pattern(input) {
        let pattern = '';
        for (let row = 1; row <= input; row++) {
            if (row % 2 == 0) {
                function fibonacci(input) {
                    let x1 = 0;
                    let x2 = 1;
                    let y;
                    let fibonacci = '';
                    for (let i = 1; i <= input; i++) {
                        y = x1 + x2;
                        fibonacci += x2 + ' ';
                        x1 = x2;
                        x2 = y;
                    }
                    return fibonacci;
                }
                pattern += fibonacci(input);

            } else {
                function even(input) {
                    let number = -1;
                    let even = '';
                    for (let i = 1; i <= input; i++) {
                        number += 2;
                        if (number % 2 !== 0) {
                            even += number + ' ';
                        }
                    }
                    return even;
                }
                pattern += even(input);
            }
            pattern += '\n';
        }

        console.log('pattern = ' + input + ' * ' + input);
        return pattern;
    }

    // function Pattern Replace to Word
    function changeWord(input) {
        let changeWord = '';
        for (let row = 1; row <= input; row++) {
            if (row % 2 == 0) {
                function fibonacci(input) {
                    let x1 = 0;
                    let x2 = 1;
                    let y;
                    let fibonacci = '';
                    for (let i = 1; i <= input; i++) {
                        y = x1 + x2;
                        fibonacci += x2 + ' ';
                        x1 = x2;
                        x2 = y;
                    }
                    return fibonacci;
                }
                changeWord += fibonacci(input);

            } else {
                function even(input) {
                    let number = 0;
                    let hasil3 = [];
                    for (let i = 0; i < input; i++) {
                        if (i % 2 == 0) {
                            number++;
                            hasil3.push(number);
                        } else {
                            hasil3.push(word[number-1]);
                        }
                    }
                    return hasil3.join(' ');
                }
                changeWord += even(input);
            }
            changeWord += '\n';
        }

        console.log('change number to word = ' + input + ' * ' + input);
        return changeWord;
    }

    console.log(starPattern(input));
    console.log(pattern(input));
    console.log(changeWord(input));
});

