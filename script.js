let inputAdults = document.getElementById('adults');
let inputKids = document.getElementById('kids');
let inputDuration = document.getElementById('duration');

function calculate() {
    let result = document.getElementById('result');

    let adults = inputAdults.value;
    let kids = inputKids.value;
    let duration = inputDuration.value;

    
    let amountOfMeat = meatPP(duration) * adults + (meatPP(duration) / 2 * kids);
    let amountOfBeer = beerPP(duration) * adults;
    
    
    result.innerHTML = `<p>${Math.ceil(amountOfMeat / 1000)}Kg de carne</p>`;
    result.innerHTML += `<p> ${amountOfBeer} beer cans </p>`
}

function meatPP(f) {
    if (f >= 6) {
        return 650
    } else {
        return 400
    }
}

function beerPP(f) {
    if (f >= 6) {
        return 2000
    } else {
        return 1200
    }
}