



// FUNCTION TO ACCESS THE API
async function fetchAPi(){
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`

  try{
    const result = await fetch(`${url}`)
    const data = await result.json()
    const maxArticles = 10;
    displayNews(data.articles.slice(0,maxArticles))
  } catch (error){
    console.error(error)
  }
  
}

function displayNews(articles) {
  const newsContainer = document.querySelector(".container");

  articles.forEach((article) => {
    const articleContainer = document.createElement("div");
    articleContainer.classList.add("article-container");

    const titleElement = document.createElement("h2");
    titleElement.textContent = article.title;

    const authorElement = document.createElement("p");
    authorElement.textContent = `Author: ${article.author || "Unknown"}`;

    const sourceElement = document.createElement("p");
    sourceElement.textContent = `Source: ${article.source.name || "Unknown"}`;

    const publishedAtElement = document.createElement("p");
    publishedAtElement.textContent = `Published At: ${article.publishedAt}`;

    const urlElement = document.createElement("a");
    urlElement.href = article.url;
    urlElement.textContent = "Read more";
    urlElement.target = "_blank";

    articleContainer.appendChild(titleElement);
    articleContainer.appendChild(authorElement);
    articleContainer.appendChild(sourceElement);
    articleContainer.appendChild(publishedAtElement);
    articleContainer.appendChild(urlElement);

    newsContainer.appendChild(articleContainer);
  });
}


// FUNCTION TO SCROLL TO THE TOP OF WEBSITE
function scrollToTop(){
  window.scrollTo({ top: 0, behavior: "smooth" });;
}


fetchAPi();