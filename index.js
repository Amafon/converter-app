const inputEl = document.getElementById("input-el");
const btnEl = document.getElementById("btn-el");
let lengthText = document.getElementById("length-conversion");
let volumeText = document.getElementById("volume-conversion");
let massText = document.getElementById("mass-conversion");

function conversion(initialValue) {
  // Récupérer la valeur à convertir dans une variable et la convertir en nombre
  let valueToConvert = Number(initialValue);

  // Faire la conversion de mètre à feet et inversement
  let metersToFeet = Number(initialValue * 3.28084).toFixed(3);
  let feetToMeters = Number(initialValue * 0.3048).toFixed(3);

  // Faire la conversion de litre à gallons et inversement
  let litersToGallons = Number(initialValue * 0.264172).toFixed(3);
  let gallonsToLiters = Number(initialValue * 3.78541).toFixed(3);

  // Faire la cinquième conversion de kilos à pounds
  let kgToPounds = Number(initialValue * 2.20462).toFixed(3);
  let poundsToKg = Number(initialValue * 0.453592).toFixed(3);

  // Remplacer le valeurs dans le texte
  lengthText.textContent = `${initialValue} meters = ${metersToFeet} feet | ${initialValue} feet = ${feetToMeters} meters`;
  volumeText.textContent = `${initialValue} liters = ${litersToGallons} gallons | ${initialValue} gallons = ${gallonsToLiters} liters`;
  massText.textContent = `${initialValue} kilos = ${kgToPounds} pounds | ${initialValue} pounds = ${poundsToKg} kilos`;
}

btnEl.addEventListener("click", function () {
  //   alert(inputEl.value);
  if (inputEl.value) {
    conversion(inputEl.value);
  }
});
