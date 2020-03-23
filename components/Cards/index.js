// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function Card(headlineText, authorPhoto, authorName){
    let card = document.createElement("div");
    let headline = document.createElement("div");
    let author = document.createElement("div");
    let authorSpan = document.createElement("span");
    let imgContainer = document.createElement("div");
    let img = document.createElement("img");

    card.setAttribute("class", "card");
    headline.setAttribute("class", "headline");
    author.setAttribute("class", "author");
    imgContainer.setAttribute("class", "img-container");
    img.setAttribute("src", authorPhoto);

    headline.textContent = headlineText;
    authorSpan.textContent = authorName;

    author.append(imgContainer);
    author.append(authorSpan);
    imgContainer.append(img);
    card.append(headline);
    card.append(author);

    return card;
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        let data = response.data.articles;
        let dataArray = Object.values(data);
        dataArray.forEach(i => {
            i.forEach((j) => {
                let parent = document.querySelector(".cards-container");
                parent.append(Card(j.headline, j.authorPhoto, j.authorName));
            });
        });
    })
    .catch(err => {
        console.log(err);
    })