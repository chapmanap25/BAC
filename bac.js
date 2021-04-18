$(document).ready(function () {
    $("#submitButton").on("click", calculate);
});


function calculate() {
//get number of beers consumed//
    let totalBeers = parseFloat($("#numBeers").val()) * 0.54;

//get number of wines consumed//
    let totalWines = parseFloat($("#numWine").val()) * 0.6;

//get number of shots consumed//
    let totalShots = parseFloat($("#numShots").val()) * 0.6;

//get person weight//
    let totalWeight = parseFloat($("#weight").val());

//get how many hours since first drink//
    let totalHours = parseFloat($("#hours").val());

//add all alcohol//
    let totalAlcohol = (totalBeers + totalWines + totalShots)

//multiple by 7.5//
    let finalAlcohol = (totalAlcohol * 7.5)

//divide by persons weight//
    let weightAlcohol = (finalAlcohol / totalWeight)

//subtract .015 for each hour//
    let actualAlcohol = (weightAlcohol - (.015 * totalHours).toFixed(3))

//Output
$("#output").text("Your BAC is " + actualAlcohol.toFixed(3) + "%")
//For some reason it's refreshing the page
}