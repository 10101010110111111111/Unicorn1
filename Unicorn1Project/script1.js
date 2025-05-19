function showMessage() {
  alert("Welcome to the Geography Page!");
}

// Simple JS: Change background color on button click
function changeBgColor() {
  document.body.style.backgroundColor = "lavender";
}

// Function to change the text of an element by ID
function changeText(elementId, newText) {
  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = newText;
  }
}

// Special function: Show a random fun geography fact
function showRandomFact() {
  const facts = [
    "Africa is the only continent in all four hemispheres.",
    "Canada has more lakes than the rest of the world combined.",
    "Australia is wider than the moon.",
    "Russia is bigger than Pluto.",
    "Istanbul is the only city on two continents."
  ];
  const randomIndex = Math.floor(Math.random() * facts.length);
  alert(facts[randomIndex]);
}

function showRandomCountry() {
  const countries = [
    "Brazil", "Canada", "Australia", "India", "Egypt",
    "Japan", "Norway", "Argentina", "Kenya", "France"
  ];
  const randomIndex = Math.floor(Math.random() * countries.length);
  changeText('randomCountry', "Random Country: " + countries[randomIndex]);
}