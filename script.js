const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const btn = document.getElementById("btn");

const API_URL = "https://api.api-ninjas.com/v2/randomquotes?categories=success,wisdom";
const API_KEY = "RTs93SSBxBt+4pM4eJStuQ==H60h70I9P96B7c0i";

async function getQuote() {
  quoteText.textContent = "Loading...";
  authorText.textContent = "";

  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "X-Api-Key": API_KEY
      }
    });

    const data = await response.json();

    quoteText.textContent = `"${data[0].quote}"`;
    authorText.textContent = `— ${data[0].author}`;

  } catch (error) {
    quoteText.textContent = "Failed to load quote";
  }
}

btn.addEventListener("click", getQuote);