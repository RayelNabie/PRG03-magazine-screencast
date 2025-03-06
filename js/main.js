let apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=10";

document.addEventListener("DOMContentLoaded", init);

function init() {
  fetchApi();
}

function fetchApi() {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new error(response.statusText);
      }
      return response.json();
    })
    .then(fetchSuccessController)
    .catch(fetchErrorHandler);
}

function fetchSuccessController(data) {
  const dataList = data.results;
  logDataRetrieval(dataList);
  generateCards(dataList);
}

const logDataRetrieval = (dataList) => {
  console.log("Data retrieved successfully:", dataList);
};

const generateCards = (dataList) => {
  const container = document.getElementById("data-container");
  container.innerHTML = "";

  dataList.forEach((item) => {
    fetch(item.url)
      .then((response) => response.json())
      .then((itemData) => {
        const block = document.createElement("div");
        block.classList.add("data-block");
        block.innerHTML = `
          <h3>${itemData.name}</h3>
          <img src="${itemData.sprites.front_default}" alt="${itemData.name}">
        `;
        container.appendChild(block);
      });
  });
};
function fetchErrorHandler(error) {
  console.error(error);
}