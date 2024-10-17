//SOAL 1
const massa = 3;
const kecepatan = 6;
energiKinetik = 0.5 * massa * kecepatan * kecepatan;
console.log(`Energi kinetik nya adalah ${energiKinetik} j \n`)

//SOAL 2

const masaBola = 0.2 ;
const kecepatanBola = 4 ;
const jariLintas = 0.5 ;
const gayaSentripetal = masaBola * (kecepatanBola ** 2) / jariLintas ;
console.log(`gaya sentripetalnya adalah ${gayaSentripetal} N \n`);


// Soal 3
const masaBenda = 10 ;
const percepatanGravitasi = 9.8 ;
const ketinggian = 15 ;
const energiPotensial = masaBenda * percepatanGravitasi * ketinggian ;
console.log(`waktu energi potensialnya adalah ${energiPotensial} joule \n`);

//SOAL 4
const gaya = 20 ;
const jarak = 5 ;
const usaha = gaya * jarak ;
console.log(`besar usaha adalah ${usaha} joule \n`);


//SOAL 5

let jumlahBaris = 4;
let i = 0;
while (i < jumlahBaris) {
    let kolom = '';
    let j = 0;
    while (j <= i) {
        kolom += '*';
        j++;
    }
    console.log(kolom); 
    i++;
}
