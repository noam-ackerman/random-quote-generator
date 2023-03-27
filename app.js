//selectors

let btn = document.querySelector(".btn");
let quote = document.querySelector(".quote");
let source = document.querySelector(".name");
let resultContainer = document.querySelector(".result");

//eventListeners

btn.addEventListener("click", getQuotes);

function displayQuotes(response) {
  console.log(response.data.record.quotes)
  let quotesArr = response.data.record.quotes;
  let randomQuote = quotesArr[Math.floor(Math.random() * quotesArr.length)];
  quote.innerHTML = `"${randomQuote.quote}"`;
  source.innerHTML = randomQuote.name;
}

function getQuotes() {
  source.innerHTML = ``;
  quote.innerHTML = `Loading...`;
  resultContainer.style.background = "#ff35c5";
  let apiUrl = "https://api.jsonbin.io/v3/b/6421a703ebd26539d09e040b/latest";
  axios.get(apiUrl).then(displayQuotes);
}
