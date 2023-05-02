//selectors

let btn = document.querySelector(".btn");
let quote = document.querySelector(".quote");
let source = document.querySelector(".name");
let resultContainer = document.querySelector(".result");

//eventListeners

btn.addEventListener("click", getQuotes);

function displayQuotes(response) {
  const quotes = response.record.quotes
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerHTML = `"${randomQuote.quote}"`;
  source.innerHTML = randomQuote.name;
}

function getQuotes() {
  source.innerHTML = ``;
  quote.innerHTML = `Loading...`;
  resultContainer.style.background = "#ff35c5";
  let apiUrl = "https://api.jsonbin.io/v3/b/6421a703ebd26539d09e040b/latest";
  window.fetch(apiUrl).then(resp => resp.json()).then(response => displayQuotes(response))
}
