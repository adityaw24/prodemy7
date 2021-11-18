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
    
    $('#jumlahHuruf').html(text.length);
    $('#jumlahKata').html(word.length);
    $('#jumlahVocal').html(vokal);
    $('#jumlahKonsonan').html(konsonan);
    $('#vokal-deret-angka').html(wordNum.join(""));
    $('#vokal-fibonacci').html(wordFibonacci.join(""));
    $('#middle-star').html(star.join(""));

    console.log('Teks Input : ' + input);
    console.log('Jumlah Huruf : ' + text.length);
    console.log('Jumlah Kata : ' + word.length);
    console.log('Jumlah Vokal : ' + vokal);
    console.log('Jumlah Konsonan : ' + konsonan);
    console.log('Mengubah Huruf Vokal Menjadi Angka : ' + wordNum.join(""));
    console.log('Mengubah Huruf Vokal Menjadi Fibonacci : ' + wordFibonacci.join(""));
    console.log('Mengubah Huruf Tengah Menjadi Bintang : ' + star.join(""));
}