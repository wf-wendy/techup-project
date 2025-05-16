const dishes = [
  {
    name: "Chicken Rice",
    cost: 5.00,
    protein: 25,
    image: "", // Replace with actual image path if needed
  },
  {
    name: "Fish & Chips",
    cost: 6.00,
    protein: 22,
    image: "",
  },
  {
    name: "Chicken Biryani",
    cost: 6.50,
    protein: 20,
    image: "",
  },
];

const targetProtein = 30;

function showResults() {
  document.getElementById("search-section").style.display = "none";
  document.getElementById("results-section").style.display = "block";

  const container = document.getElementById("cards-container");
  container.innerHTML = "";

  dishes.forEach((dish, index) => {
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
}



// for 1st page search behaviour

// Call this once DOM is fully loaded
document.addEventListener("DOMContentLoaded", initializeProteinFormHandlers);

function initializeProteinFormHandlers () {
  alert ("into initialise form handler");

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

// Function triggered by button click
function submitForm (event) {
    alert("submit button pressed");
    alert("enter listener");

    //prevent form submission if inside form
    event.preventDefault();

    const choice = document.querySelector("input[name='choice']:checked").value;
    const countSelect = document.getElementById("countSelect");
    const cuisineSelect = document.getElementById("cuisineSelect");

    if (choice === "random") {
      //alert("Suggesting a random high-protein hawker dish for you...");
      showResults();
    } else {
      const count = countSelect.value;
      const cuisine = cuisineSelect.value;
      alert(`Finding ${count} ${cuisine} dishes sorted by protein for you...`);
    }
    
    alert("exit listener");
}


function resetForm() {
    alert("clear button pressed");
    document.getElementById("proteinForm").reset();
    document.getElementById("countSelect").disabled;
    document.getElementById("countSelect").cuisineSelect.disabled;
}