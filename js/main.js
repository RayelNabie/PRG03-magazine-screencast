document.addEventListener('DOMContentLoaded', async () => {
  const root = document.getElementById("root");
  root.appendChild(createMainSection());

  try {
    renderArticles(await fetchArticles('/webservice/index.php'));
    initEventListeners();
  } 
  catch (error) {
    window.location.href = `error.html?status=500`;
  }
});

const createMainSection = () => {
  const mainContainer = document.createElement('div');
  mainContainer.className = 'main-container';
  mainContainer.innerHTML = `
    <section id="main-content"></section>
    <aside id="detailInfo">
      <h2 class="menu-label">Detail Info</h2>
      <p>Selecteer een kaart voor meer informatie.</p>
    </aside>
  `;
  return mainContainer;
};

async function fetchArticles(apiUrl) {
  try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        window.location.href = `error.html?status=500`;
          return;
      }

      return await response.json();
  } 
  catch (error) {
      window.location.href = `error.html?status=500`;
  }
}

const renderArticles = (articles) => {
  const mainContent = document.getElementById('main-content'),
    favorites = new Set(JSON.parse(localStorage.getItem('favorites')) || []);

  mainContent.innerHTML = articles
    .map(
      ({ id, image, name }) => `
      <article class="column is-one-third card" data-id="${id}">
        <figure class="card-image image is-4by3">
          <img src="${image}" alt="${name}">
        </figure>
        <div class="card-content has-text-centered">
          <h3 class="title is-4">${name}</h3>
          <button class="button is-danger detailButton" data-card-id="${id}">Details</button>
          <button class="button is-info favoriteButton ${favorites.has(id.toString()) ? "is-active" : ""}" data-card-id="${id}">
            <span class="icon"><i class="fas fa-star"></i></span> Favoriet
          </button>
        </div>
      </article>`
    )
    .join("");
};

const initEventListeners = () => {
  document.getElementById('main-content').addEventListener('click', async ({ target }) => {
    target.classList.contains('detailButton') && await handleDetailClick(target.dataset.cardId);
    target.classList.contains('favoriteButton') && toggleFavorite(target.dataset.cardId, target);
  });

  updateFavoriteUI();
};

const toggleFavorite = (cardId, button) => {
  const favorites = new Set(JSON.parse(localStorage.getItem('favorites')) || []);
  favorites.has(cardId) ? favorites.delete(cardId) : favorites.add(cardId);
  localStorage.setItem('favorites', JSON.stringify([...favorites]));
  button.classList.toggle('is-active', favorites.has(cardId));
};

const updateFavoriteUI = () => {
  const favorites = new Set(JSON.parse(localStorage.getItem('favorites')) || []);
  document.querySelectorAll('.favoriteButton').forEach((button) =>
    button.classList.toggle("is-active", favorites.has(button.dataset.cardId))
  );
};

const handleDetailClick = async (cardId) => {
  try {
    const response = await fetch(`/webservice/index.php?id=${cardId}`);
    if (!response.ok){
      window.location.href = `error.html?status=404`;
    }

    const details = await response.json();

    const allTechnologies = await fetchArticles("/webservice/index.php");
    const matchingTech = allTechnologies.find(tech => tech.id === parseInt(cardId));
    
    if (!matchingTech) {
      window.location.href = `error.html?status=500`;
      return;
    }
    const completeDetails = {
      ...details, 
      name: matchingTech.name ?? "Onbekend",
      image: matchingTech.image ?? "#"
    };

    updateDetailInfo(completeDetails);
  } catch (error) {
    window.location.href = `error.html?status=500`;
  }
};

const updateDetailInfo = ({ name, image, description, year, creator, current_owner, rayel_score, framework, side, tags, website }) => {
  document.getElementById('detailInfo').innerHTML = `
      <h2 class="menu-label">${name ?? "Onbekend"}</h2>
      <figure class="image is-4by3">
        <img src="${image ?? "#"}" alt="${name ?? "Onbekend"}">
      </figure>

      <div class="detail-section"><strong>Beschrijving:</strong> ${description ?? "Geen beschrijving beschikbaar."}</div>
      <div class="detail-section"><strong>Jaar:</strong> ${year ?? "Onbekend"}</div>
      <div class="detail-section"><strong>Maker:</strong> ${creator ?? "Onbekend"}</div>
      <div class="detail-section"><strong>Huidige eigenaar:</strong> ${current_owner ?? "Onbekend"}</div>
      <div class="detail-section"><strong>Rayel Score:</strong> ${rayel_score ? `${rayel_score}/5` : "Niet beoordeeld"}</div>
      <div class="detail-section"><strong>Framework:</strong> ${framework ? "Ja" : "Nee"}</div>
      <div class="detail-section"><strong>Platform:</strong> ${side ?? "Onbekend"}</div>

      <div class="detail-section">
        <h3>Tags</h3>
        <ul>${tags?.map(tag => `<li>${tag}</li>`).join("") ?? "<li>Geen tags beschikbaar.</li>"}</ul>
      </div>

      ${website ? `<a href="${website}" target="_blank" class="detail-button"> Bezoek website </a>` : ""}
  `;
};
