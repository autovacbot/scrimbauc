let length = document.getElementById("length-result")
let volume = document.getElementById("volume-result")
let mass = document.getElementById("mass-result")
let input = document.getElementById("input-num")

//1 meter = 3.28 ft
//1 litre = 0.2199 gallon
//1 kg = 2.2046 lbs
// 20 metres = 65.616 feet | 20 feet = 6.096 metres

function convertMetrics () {
    let meter = input.value + " metres = " + (input.value*3.28).toFixed(3) + " feet"
    let feet = input.value + " feet = " + (input.value/3.28).toFixed(3) + " metres"
    length.textContent = meter + " | " + feet

    let litre = input.value + " litres = " + (input.value*0.2199).toFixed(3) + " gallon"
    let gallon = input.value + " gallon = " + (input.value/0.2199).toFixed(3) + " litres"
    volume.textContent = litre + " | " + gallon

    let kg = input.value + " kg = " + (input.value*2.2046).toFixed(3) + " lbs"
    let lbs = input.value + " lbs = " + (input.value/2.2046).toFixed(3) + " kg"
    mass.textContent = kg + " | " + lbs
}

console.log(convertMetrics)