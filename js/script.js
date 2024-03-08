const searchButton = document.getElementById("search_button");
const overlay = document.getElementById("modal_overlay");
const movieName = document.getElementById("movie_name");
const movieYear = document.getElementById("movie_year");

function searchButtonClickHandle() {
  try {
    let url = `http://www.omdbapi.com/?apikey=[yourkey]&t=${movieNameParameterGenerator()}&y=${
      movieYear.value
    }`;
    const response = fetch(url);
    const data = response.json();
    overlay.classList.add("open");
  } catch (error) {}
}
function movieNameParameterGenerator() {
  if (movieName.value === "") {
    throw new Error("O nome do filme deve ser informado");
  }
  return movieName.value.split("").join("+");
}
function movieYearParameterGenerator() {
  if (movieYear.value === "") {
    return "";
  }
}
searchButton.addEventListener("click", searchButtonClickHandle);
