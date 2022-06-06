const catsSection = document.querySelector("#cats");
const catsDescription = document.querySelector("#catsDescription");
const dogsSection = document.querySelector("#dogs");
const dogsDescription = document.querySelector("#dogsDescription");
const othersSection = document.querySelector("#others");
const othersDescription = document.querySelector("#othersDescription");
const footer = document.querySelector(".footer");

insertCatsIntoTable();
insertDogsIntoTable();

window.onload = hideCatsDescription();
window.onload = hideDogsDescription();
window.onload = hideOthersDescription();

catsSection.addEventListener("mouseover", showCatsDescription);
catsSection.addEventListener("mouseout", hideCatsDescription);
dogsSection.addEventListener("mouseover", showDogsDescription);
dogsSection.addEventListener("mouseout", hideDogsDescription);
othersSection.addEventListener("mouseover", showOthersDescription);
othersSection.addEventListener("mouseout", hideOthersDescription);

function showCatsDescription() {
  catsDescription.style.display = "flex";
  dogsSection.style.display = "none";
}

function hideCatsDescription() {
  catsDescription.style.display = "none";
  dogsSection.style.display = "flex";
}

function showDogsDescription() {
  dogsDescription.style.display = "flex";
  catsSection.style.display = "none";
}

function hideDogsDescription() {
  dogsDescription.style.display = "none";
  catsSection.style.display = "flex";
}

function showOthersDescription() {
  othersDescription.style.display = "flex";
  footer.style.display = "none";
}

function hideOthersDescription() {
  othersDescription.style.display = "none";
  footer.style.display = "block";
}

function insertCatsIntoTable() {
  let catBreedsSet = new Set([
    "Scottish Fold",
    "American Shorthair",
    "Bengal",
    "Maine Coon",
  ]);
  let catBreeds = [...catBreedsSet];
  let catAges = [
    "2 years, 1 month old",
    "1 year, 3 months old",
    "4 months old",
    "5 years, 8 months old",
  ];
  for (let i = 0; i < catBreeds.length; i++) {
    let row = document.querySelector("#catsTable").insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = catBreeds[i];
    cell2.innerHTML = catAges[i];
  }
}

function insertDogsIntoTable() {
  let dogBreeds = [
    "Golden Retriever",
    "German Shepherd",
    "Beagle",
    "Great Dane",
  ];
  let dogAges = [
    "7 years old",
    "2 years, 10 months old",
    "1 year, 3 months old",
    "4 years, 5 months old",
  ];
  for (let i = 0; i < dogBreeds.length; i++) {
    let row = document.querySelector("#dogsTable").insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = dogBreeds[i];
    cell2.innerHTML = dogAges[i];
  }
}
