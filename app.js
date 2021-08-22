function displayQuotes(response) {
  console.log(response.data);
}

function getQuotes() {
  let apiUrl = "https://my-qoutes-api.herokuapp.com/qoutes";
  axios.get(apiUrl).then(displayQuotes);
}

getQuotes();
