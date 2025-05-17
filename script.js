//Seed food data
const dishes = [
  {
    name: "Hainanese Beef Noodles (Soup)",
    cost: 6.00,
    protein: 23,
    cuisine: "Chinese",
    image: "", // Replace with actual image path if needed
  },
  {
    name: "Chicken Rice",
    cost: 5.00,
    protein: 25,
    cuisine: "Chinese",
    image: "", // Replace with actual image path if needed
  },
  {
    name: "Wantan Mee (Dry)",
    cost: 4.50,
    protein: 19,
    cuisine: "Chinese",
    image: "", // Replace with actual image path if needed
  },
  {
    name: "Fish & Chips",
    cost: 6.00,
    protein: 22,
    cuisine: "Western",
    image: "",
  },
  {
    name: "Chicken Biryani",
    cost: 6.50,
    protein: 20,
    cuisine: "Indian",
    image: "",
  },
];

//Define variables
const targetProtein = 30;

// 2nd page - Results logic
function showResults(cuisine, count, choice) {
  alert("enter showResults, cuisine: " + cuisine + " count: " + count + " choice: " + choice);

  document.getElementById("search-section").style.display = "none";
  document.getElementById("results-section").style.display = "block";

  const container = document.getElementById("cards-container");
  container.innerHTML = "";

  if (choice === "random") {
    // Get random dishes from the full list
    const shuffled = dishes.sort(() => 0.5 - Math.random());
    filteredDishes = shuffled.slice(0, count);
  } else {
    // Filter by cuisine and sort by protein
    filteredDishes = dishes
      //.filter(d => cuisine === "All" || d.cuisine === cuisine)
      .filter(d => d.cuisine === cuisine)
      .sort((a, b) => b.protein - a.protein)
      .slice(0, count);
  }

  // Filter by cuisine (if not "All") and sort by protein descending
  //const filteredDishes = dishes
  //  .filter(d => cuisine === "All" || d.cuisine === cuisine)
  //  .sort((a, b) => b.protein - a.protein)
  //  .slice(0, count);
  
  //Display the dishes
  //dishes.forEach((dish, index) => {
  filteredDishes.forEach((dish, index) => {
    alert (dish.name + "," + index);

    const card = document.createElement("div");
    card.className = "card";

    const imageHTML = dish.image ? `<img src="${dish.image}" alt="${dish.name}">` :
      `<div style="width:100%; height:250px; background:#e2e8f0; border-radius:10px; display:flex; align-items:center; justify-content:center;">
        <span style="color:#bbb;">[ Image Placeholder ]</span>
      </div>`;

    card.innerHTML = `
      ${imageHTML}
      <div class="card-header">
        <h3>${dish.name}</h3>
        <strong>$${dish.cost.toFixed(2)}</strong>
      </div>
      <div class="protein-tag"><span id="protein-${index}">${dish.protein}</span>g protein</div>

      <div class="slider-container">
        <label>Adjust Portion Size</label>
        <input type="range" min="0.5" max="2" step="0.1" value="1" class="slider" id="slider-${index}">
        <div class="slider-labels">
          <span>Half</span>
          <span>Regular</span>
          <span>Double</span>
        </div>
      </div>

      <div class="protein-coach" id="coach-${index}">
        ${getCoachMessage(dish.protein)}
      </div>
    `;

    container.appendChild(card);

    const slider = card.querySelector(`#slider-${index}`);
    const proteinSpan = card.querySelector(`#protein-${index}`);
    const coach = card.querySelector(`#coach-${index}`);

    slider.addEventListener("input", () => {
      const multiplier = parseFloat(slider.value);
      const updatedProtein = Math.round(dish.protein * multiplier);
      proteinSpan.textContent = updatedProtein;
      coach.innerHTML = getCoachMessage(updatedProtein);
    });
  });
}

function getCoachMessage(protein) {
  if (protein >= targetProtein) {
    return `✅ You're getting enough protein from this portion size. Great job!`;
  } else {
    const needed = targetProtein - protein;
    return `
      You need about <strong>${needed}g</strong> more protein to reach your target of ${targetProtein}g.<br>
      Try increasing your portion size or consider adding:
      <ul>
        <li>Hard Boiled Egg</li>
        <li>Soy Milk</li>
        <li>Tofu Side Dish</li>
      </ul>
    `;
  }
}

function goBack() {
  document.getElementById("search-section").style.display = "block";
  document.getElementById("results-section").style.display = "none";
  initializeProteinFormHandlers ();
}

// 1st page - Search logic

// Call this once DOM is fully loaded
document.addEventListener("DOMContentLoaded", initializeProteinFormHandlers);

function initializeProteinFormHandlers () {
  //alert ("into initialise form handler");
  const radioButtons = document.querySelectorAll("input[name='choice']");
  const countSelect = document.getElementById("countSelect");
  const cuisineSelect = document.getElementById("cuisineSelect");

  radioButtons.forEach((radio) => {
    radio.addEventListener("change", () => {
      const isCustom = document.querySelector("input[value='custom']").checked;
      countSelect.disabled = !isCustom;
      cuisineSelect.disabled = !isCustom;
    });
  });
}

// Function triggered by Find My Protein button
function submitForm (event) {
  //alert("submit button pressed");
  //alert("enter listener");

  //Prevent form submission if inside form
  event.preventDefault();

  const choice = document.querySelector("input[name='choice']:checked").value;
  const countSelect = document.getElementById("countSelect");
  const cuisineSelect = document.getElementById("cuisineSelect");

  if (choice === "random") {
    alert("Suggesting 3 random high-protein hawker dish for you...");
    showResults("All",3,choice);
    } else {
    const count = countSelect.value;
    const cuisine = cuisineSelect.value;
    alert(`Finding ${count} ${cuisine} dishes sorted by protein for you...`);
    showResults(cuisine,count,choice);
  }
    
  //alert("exit listener");
}

//function resetForm() {
    //alert("clear button pressed");
    //document.getElementById("proteinForm").reset();
    //document.getElementById("countSelect").disabled;
    //document.getElementById("countSelect").cuisineSelect.disabled;
//}