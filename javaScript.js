let vysledky = [];

vysledky = JSON.parse(localStorage.getItem("vysledky"));
console.log(vysledky);
if(vysledky === null){
    vysledky =[];
}
let historyOfNumbers = document.getElementById("historyOfNumbers");
historyOfNumbers.innerText = vysledky;


function vypocitaj(){
    let vysledok = document.getElementById("vysledok");
    let a = parseFloat(document.getElementById("a").value); 
    let b = parseFloat(document.getElementById("b").value);

    switch(document.getElementById("operacia").value){
        case "plus": 
            vysledok.value = a + b;
            vysledky.unshift(a + b);
            break;
        case "minus": 
            vysledok.value = a - b;
            vysledky.unshift(a - b);
            break;
        case "krat": 
            vysledok.value = a * b;
            vysledky.unshift(a * b);
            break;
        case "deleno": 
            vysledok.value = a / b;
            vysledky.unshift(a / b);
            break;
    }

    let historyOfNumbers = document.getElementById("historyOfNumbers");
    if(vysledky.length > 5){
        vysledky.pop();
    } 
    historyOfNumbers.innerText = vysledky;

    localStorage.setItem("vysledky", JSON.stringify(vysledky));
}
function vymazhistoriu(){
    localStorage.removeItem("vysledky");
    vysledky = [];
    historyOfNumbers.innerText = vysledky;

}