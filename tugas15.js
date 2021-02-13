function segitiga(){
var ab = 8;
console.log("nilai AB:", ab);
ab = Math.pow(ab,2)

var bc = 6;
console.log("Nilai BC:", bc);
bc = Math.pow(bc,2)

var ac = ab+bc;


console.log("Panjang sisi AC pada segitiga siku-siku tersebut adalah:", Math.sqrt(ac), "cm")

}
segitiga()