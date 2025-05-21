//Seed food data
const dishes = [
  {
    name: "Hainanese Beef Noodles (Soup)",
    cost: 6.00,
    protein: 23,
    cuisine: "Chinese",
    image: "images/hainanese_beef_noodles_C.gif", // relative path
    supplements: ["Beef Balls (~5g)"]
  },
  {
    name: "Chicken Rice",
    cost: 5.00,
    protein: 25,
    cuisine: "Chinese",
    image: "images/chicken_rice_C.gif", 
    supplements: ["Egg (~7g)", "Tofu (~8g)"]
  },
  {
    name: "Wantan Mee (Dry)",
    cost: 4.50,
    protein: 19,
    cuisine: "Chinese",
    image: "images/wanton_mee_C.gif",
    supplements: []
  },
  {
    name: "Grilled Fish",
    cost: 7.50,
    protein: 22,
    cuisine: "Western",
    image: "images/grilled_fish_W.jpg",
    supplements: ["Egg (~7g)"]
  },
  {
    name: "Chicken Biryani",
    cost: 6.50,
    protein: 20,
    cuisine: "Malay",
    image: "images/chix_biryani_M.jpg",
    supplements: ["Egg (~7g)"]
  },
  {
    name: "Beef Hotplate with Rice",
    cost: 7.50,
    protein: 25,
    cuisine: "Jap",
    image: "images/hotplate_beef_J.jpg",
    supplements: ["Egg (~7g)"]
  },
  {
    name: "Sirloin Steak",
    cost: 15.00,
    protein: 28,
    cuisine: "Western",
    image: "images/sirloin_steak_W.jpg",
    supplements: ["Egg (~7g)"]
  },
  {
    name: "Fish Noodles Soup",
    cost: 4.00,
    protein: 18,
    cuisine: "Chinese",
    image: "images/fish_beehoon_C.jpg",
    supplements: ["A cup of zero sugar soymilk (~7g)"]
  },
  {
    name: "Beef Hor Fun",
    cost: 7.00,
    protein: 22,
    cuisine: "Chinese",
    image: "images/beef_horfun_C.jpg",
    supplements: ["Egg (~7g)"]
  },
  {
    name: "Kway Chap with Braised Duck",
    cost: 8.00,
    protein: 20,
    cuisine: "Chinese",
    image: "images/duck_kway_C.jpg",
    supplements: ["Egg (~7g)", "Tofu (~8g)"]
  },
  {
    name: "Pork Basil with Rice",
    cost: 7.00,
    protein: 30,
    cuisine: "Thai",
    image: "images/pork_basil_T.jpg",
    supplements: []
  },
  {
    name: "Ban Mian (Dry)",
    cost: 5.50,
    protein: 25,
    cuisine: "Chinese",
    image: "images/ban_mian_C.jpg",
    supplements: []
  },
  {
    name: "Ayam Penyet",
    cost: 8.50,
    protein: 30,
    cuisine: "Malay",
    image: "images/ayam_penyet_M.jpg",
    supplements: []
  },
  {
    name: "Double Egg Prata",
    cost: 5.00,
    protein: 15,
    cuisine: "Malay",
    image: "images/egg_prata_M.jpg",
    supplements: ["Chicken Leg (~20g)", "Batang Fish (~18g)"]
  },
  {
    name: "Ginseng Chicken with Rice",
    cost: 10.00,
    protein: 30,
    cuisine: "Jap",
    image: "images/ginseng_chix_J.jpg",
    supplements: []
  },
  {
    name: "Chicken Chop",
    cost: 8.50,
    protein: 25,
    cuisine: "Western",
    image: "images/chicken_chop_W.jpg",
    supplements: ["Egg (~7g)"]
  },
  {
    name: "Carrot Cake (White)",
    cost: 4.00,
    protein: 11,
    cuisine: "Chinese",
    image: "images/carrot_cake_C.jpg",
    supplements: ["Egg (~7g)",'A cup of zero sugar soymilk (~7g)']
  },
  {
    name: "Carrot Cake (White)",
    cost: 4.00,
    protein: 11,
    cuisine: "Chinese",
    image: "images/carrot_cake_C.jpg",
    supplements: ["Egg (~7g)","A cup of zero sugar soymilk (~7g)"]
  },
  {
    name: "Prawn Noodles",
    cost: 9.00,
    protein: 19,
    cuisine: "Chinese",
    image: "images/prawn_noodles_C.jpg",
    supplements: []
  },
  {
    name: "Chicken Hotplate with Rice",
    cost: 6.50,
    protein: 23,
    cuisine: "Jap",
    image: "images/chix_hotplate_J.jpg",
    supplements: ["Egg (~7g)"]
  },
  {
    name: "Saba Fish with Rice",
    cost: 6.50,
    protein: 20,
    cuisine: "Jap",
    image: "images/saba_fish_J.jpg",
    supplements: ["Egg (~7g)"]
  },
  {
    name: "Bibimbap (Basic)",
    cost: 7.00,
    protein: 8,
    cuisine: "Jap",
    image: "images/bibimbap_J.jpg",
    supplements: ["Beef Bulgogi (~22g)","Teriyaki Chicken (~22g)","Spicy Pork (~22g)"]
  },
  {
    name: "Salmon Mentai Don",
    cost: 9.00,
    protein: 20,
    cuisine: "Jap",
    image: "images/salmon_don_J.jpg",
    supplements: ["Steamed Edamame (~8g)"]
  }
];


// -------------------------

// Define variables
const targetProtein = 30;

// Initialisation, Call this once DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    initializeProteinFormHandlers();
    resetForm(); // ensure form is clean on initial load
});

// Form Handling
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

function resetForm() {
    //alert("into reset form");
    const form = document.getElementById("proteinForm");
    form.reset();

    document.querySelector("input[value='random']").checked = true;
    document.getElementById("countSelect").disabled = true;
    document.getElementById("cuisineSelect").disabled = true;
}

// Submission + Result Display
function submitForm (event) {
    //alert("submit button pressed");
    //alert("enter listener");

    // Prevent default form submission
    event.preventDefault();

    const choice = document.querySelector("input[name='choice']:checked").value;
    const countSelect = document.getElementById("countSelect");
    const cuisineSelect = document.getElementById("cuisineSelect");

    if (choice === "random") {
        //alert("Suggesting 3 random high-protein hawker dish for you...");
        showResults("All",3,choice);
    } else {
        const count = countSelect.value;
        const cuisine = cuisineSelect.value;
        //alert(`Finding ${count} ${cuisine} dishes sorted by protein for you...`);
        showResults(cuisine,count,choice);
    }    
    //alert("exit listener");
}

// Results page
function showResults(cuisine, count, choice) {
    //alert("enter showResults, cuisine: " + cuisine + " count: " + count + " choice: " + choice);
    console.log("showResults: ", cuisine, count, choice);

    document.getElementById("search-section").style.display = "none";
    document.getElementById("results-section").style.display = "block";

    const heading = document.getElementById("results-heading");
    const container = document.getElementById("cards-container");
    container.innerHTML = "";

    let filteredDishes;

    if (choice === "random") {
        heading.textContent = `Here are ${count} random high-protein hawker dishes`;    
        // Get random dishes from the full list, sort first by protein, then shuffle, then slice
        const sortedByProtein = [...dishes].sort((a, b) => b.protein - a.protein);
        const shuffled = sortedByProtein.sort(() => 0.5 - Math.random());
        filteredDishes = shuffled.slice(0, count);
    } else {
        heading.textContent = `Here are the ${count} ${cuisine} food by protein amount`;
        // Filter by cuisine and sort by protein
        filteredDishes = dishes
        .filter(d => d.cuisine === cuisine)
        .sort((a, b) => b.protein - a.protein)
        .slice(0, count);
    }
    
    console.log("filteredDishes: ", filteredDishes);  
    renderDishCards(filteredDishes);
}

// Card Rendering
function renderDishCards (dishes){
    const container = document.getElementById("cards-container");

    //Display the dishes
    dishes.forEach((dish, index) => {
    //alert (dish.name + "," + index);

    const card = document.createElement("div");
    card.className = "card";

    const imageHTML = dish.image 
        ? `<img src="${dish.image}" alt="${dish.name}">` 
        : `<div style="width:100%; height:250px; background:#e2e8f0; border-radius:10px; display:flex; align-items:center; justify-content:center;">
            <span style="color:#bbb;">[ Image Placeholder ]</span>
           </div>`;

    card.innerHTML = `
      ${imageHTML}
      <div class="card-header">
        <div class="card-title">
          <h3>${dish.name}</h3>
          <strong>$${dish.cost.toFixed(2)}</strong>
        </div>
      </div>
      <div class="protein-tag">Estimated: <span id="protein-${index}">${dish.protein}</span>g protein</div>

      <div class="slider-container">
        <label>Adjust Protein Portion Size</label>
        <input type="range" min="0" max="4" step="1" value="2" class="slider" id="slider-${index}">
        <div class="slider-labels">
          <span>0</span>
          <span>-½ portion</span>
          <span>Regular</span>
          <span>+½ portion</span>
          <span>Double</span>
        </div>
      </div>

      <div class="protein-coach" id="coach-${index}">
        ${getCoachMessage(dish.protein, dish)}
      </div>
    `;

    container.appendChild(card);

    const slider = card.querySelector(`#slider-${index}`);
    const proteinSpan = card.querySelector(`#protein-${index}`);
    const coach = card.querySelector(`#coach-${index}`);

    slider.addEventListener("input", () => {
      const position = parseInt(slider.value);
      
      // Map slider position to multiplier
      const multipliers = [0, 0.5, 1, 1.5, 2];
      const multiplier = multipliers[position];

      const updatedProtein = Math.round(dish.protein * multiplier);
      proteinSpan.textContent = updatedProtein;
      coach.innerHTML = getCoachMessage(updatedProtein, dish);
    });
  });
}

// Coach Message Generator
function getCoachMessage(protein, dish) {
    if (protein >= targetProtein) {
        return `✅ You're getting enough protein from this portion size. Great job!`;
    } else {
        const needed = targetProtein - protein;
        const supplementList = dish.supplements?.map(item => `<li>${item}</li>`).join("") || "";

        return `
            You need about <strong>${needed}g</strong> more protein to reach your target of ${targetProtein}g.<br><br>
            Consider adding:
            <ul>${supplementList}</ul>
        `;
    }
}

// Back/Reset Navigation
function goBack() {
  document.getElementById("search-section").style.display = "block";
  document.getElementById("results-section").style.display = "none";
  resetForm();
}

