let apiUrl = "https://pokeapi.co/api/v2/pokemon"

function init() {
  fetchApi();
}

function fetchApi() {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(fetchSuccesHandler)
    .catch(fetchErrorHandler);
}

function fetchSuccesHandler(data) {
  console.log(data);
}

function fetchErrorHandler(data) {
  console.log(data);
}

init()