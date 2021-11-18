function modifiedString(){
 
    let input = $('#input-text').val();
    let word = input.split(" ");
    let text = input.split(" ").join("");
    
    let vowels = new Set(["a", "i", "u", "e", "o"]);

    let vokal = 0;
    let konsonan = 0;
    for(let i in text){
        if(vowels.has(text[i])){
            vokal ++;
        } else {
            konsonan ++;
        }
    }

    let number = 0;
    let num;
    let wordNum = [];
    for(let i in input){
        if(vowels.has(input[i])){
            number ++;
            num = input[i].replace(input[i], number.toString());
            wordNum.push(num);
        }
        else{
            wordNum.push(input[i]);
        }
    }

    let x1 = 0;
    let x2 = 1;
    let y;
    let fibonacci;
    let wordFibonacci = [];
    for(let i in input){
        if(vowels.has(input[i])){
            y = x1 + x2;
           
            fibonacci = input[i].replace(input[i], x1.toString());
            wordFibonacci.push(fibonacci);
            x1 = x2;
            x2 = y;
        }
        else{
            wordFibonacci.push(input[i]);
        }
    }

    let n;
    let star = [];
    for(let i in word){
        for(let j in word[i]){
            n = word[i].length;
            if(j == 0 || j == (n-1)){
                star.push(word[i][j]);
            }
            else{
                star.push("*");
            }
        }
        star.push(" ");
    }

    // change vowels to even odd number
    let odd;
    let even;
    let oddNum = -1;
    let evenNum = 0;
    let oddWord = [];
    let evenWord = [];
    for (let i in input) {
        if(vowels.has(input[i])){
            evenNum += 2;
            oddNum += 2;
            even = input[i].replace(input[i], evenNum.toString());
            odd = input[i].replace(input[i], oddNum.toString());
            evenWord.push(even);
            oddWord.push(odd);
        }
        else{
            evenWord.push(input[i]);
            oddWord.push(input[i]);
        }
    }

    // change vowels to word number combinations
    let angka = 0;
    let index = 0;
    let huruf = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let wordNumberCombination = [];
    let angkaHuruf = [];
    let angkaHuruf2;
    let angkaHurufFinals = [];
    for (let i in input) {
        angka += 1;
        wordNumberCombination.push(angka.toString());
        wordNumberCombination.push(huruf[i]);
        
        wordNumberCombination.splice(input.length, (input.length * 2));

        if (vowels.has(input[i])) {
            angkaHuruf.push(wordNumberCombination[index]);
            index++;
        } else {
            angkaHuruf.push(input[i]);
        }
    }


    const objek = {
        deretFibo : wordFibonacci.join(""),
        deretGanjil: oddWord.join(""),
        deretGenap: evenWord.join(""),
        deretAngkaHuruf: angkaHuruf.join(""),
    };
    
    if ($('#fibonacci').is(':checked')) {
        $('#hasil').html(objek.deretFibo);
    }
    if ($('#genap').is(':checked')) {
        $('#hasil').html(objek.deretGenap);
    }
    if ($('#ganjil').is(':checked')) {
        $('#hasil').html(objek.deretGanjil);
    }
    if ($('#angkaHuruf').is(':checked')) {
        $('#hasil').html(objek.deretAngkaHuruf);
    }
    
    $('#jumlahHuruf').html(text.length);
    $('#jumlahKata').html(word.length);
    $('#jumlahVocal').html(vokal);
    $('#jumlahKonsonan').html(konsonan);
    $('#vokal-deret-angka').html(wordNum.join(""));
    $('#vokal-fibonacci').html(wordFibonacci.join(""));
    $('#middle-star').html(star.join(""));
    $('#pengganti-genap').html(evenWord.join(""));
    $('#pengganti-ganjil').html(oddWord.join(""));
    $('#pengganti-angka-huruf').html(wordNumberCombination.join(""));

    console.log('Teks Input : ' + input);
    console.log('Jumlah Huruf : ' + text.length);
    console.log('Jumlah Kata : ' + word.length);
    console.log('Jumlah Vokal : ' + vokal);
    console.log('Jumlah Konsonan : ' + konsonan);
    console.log('Mengubah Huruf Vokal Menjadi Angka : ' + wordNum.join(""));
    console.log('Mengubah Huruf Vokal Menjadi Fibonacci : ' + wordFibonacci.join(""));
    console.log('Mengubah Huruf Tengah Menjadi Bintang : ' + star.join(""));
}