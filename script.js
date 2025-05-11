const cardGrid = document.getElementById("cardGrid");
const backButton = document.getElementById("backButton");
const searchInput = document.getElementById("searchInput");

let historyStack = [];
let currentView = { level: 0, parent: null };

function renderItems(level, parent) {
  currentView = { level, parent };
  searchInput.value = "";
  cardGrid.innerHTML = "";
  cardGrid.style.display = "grid";

  const filtered = vocabulary.filter(item => item.level === level && item.parent === parent);
  displayCards(filtered);

  backButton.style.display = historyStack.length > 0 ? "inline-block" : "none";
}

function displayCards(items) { 
  console.log("Rendering items:", items);
  cardGrid.innerHTML = "";
  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    let goDeeper = item.hasChildren ? `<button onclick="navigateTo('${item.id}')">&#x27A1;&#xFE0F; Go deeper</button>` : "";
    let playAudio = item.audio ? `<button onclick="(new Audio('${item.audio}')).play()">&#x1F50A; Play</button>` : "";

    card.innerHTML = `
      <img src="${item.image}" alt="${item.english}">
      <div class="word">${item.english}</div>
      <div class="translation">${item.bulgarian}</div>
      ${playAudio}
      ${goDeeper}
    `;

    cardGrid.appendChild(card);
  });
}

function navigateTo(id) {
  const current = vocabulary.find(item => item.id === id);
  historyStack.push({ ...currentView });
  renderItems(current.level + 1, id);
}

backButton.onclick = () => {
  const last = historyStack.pop();
  if (last) {
    renderItems(last.level, last.parent);
  } else {
    renderItems(0, null);
  }
};

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const matches = vocabulary.filter(item =>
    (item.english + item.bulgarian).toLowerCase().includes(query)
  );
  displayCards(matches);
});

renderItems(0, null);
