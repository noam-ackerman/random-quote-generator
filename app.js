//selectors

let btn = document.querySelector(".btn");
let quote = document.querySelector(".quote");
let source = document.querySelector(".name");
let resultContainer = document.querySelector(".result");

//eventListeners

btn.addEventListener("click", getQuotes);

function displayQuotes(response) {
  let quotesArr = response.data;
  let randomQuote = quotesArr[Math.floor(Math.random() * quotesArr.length)];
  quote.innerHTML = `"${randomQuote.quote}"`;
  source.innerHTML = randomQuote.name;
  resultContainer.style.background = "#ff35c5";
}

function getQuotes() {
  let apiUrl = "https://my-qoutes-api.herokuapp.com/qoutes";
  axios.get(apiUrl).then(displayQuotes);
}
