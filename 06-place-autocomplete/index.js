const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let cities = [];

fetch(endpoint)
  .then((res) => res.json())
  .then((data) => (cities = data));

function findMatches(wordToMatch, cities) {
  return cities.filter(({ city, state }) => {
    const regex = new RegExp(wordToMatch, 'gi');
    return city.match(regex) || state.match(regex);
  });
}

function numberWithCommas(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const regex = new RegExp(this.value, 'gi');
  const html = matchArray
    .map(({ city, state, population }) => {
      const cityName = city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `
    <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(population)}</span>
    </li>`;
    })
    .join('');
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
searchInput.addEventListener('keyup', displayMatches);
