
const newList = document.querySelector(".listOfContent");

const moviesSelectorStatus = document.querySelector("#div-movies-select");
const seriesSelectorStatus = document.querySelector("#div-series-select");
const animeSelectorStatus = document.querySelector("#div-anime-select");
const docsSelectorStatus = document.querySelector("#div-docs-select");
const standupSelectorStatus = document.querySelector("#div-standup-select");

clearAll();

function clearAll() {
  newList.innerHTML = ""
  moviesSelectorStatus.hidden = true;
  seriesSelectorStatus.hidden = true;
  animeSelectorStatus.hidden = true;
  docsSelectorStatus.hidden = true;
  standupSelectorStatus.hidden = true;
}

//function to create the li,a,img elements inside the ".listOfContent", getting an array as argument
function createIt(arrGender) {
  arrGender.forEach((arrItem) => {
    //create li item + create anchor with "href" + img with "src"
    const newItem = document.createElement("li");
    const newClick = document.createElement("a");
    const newImg = document.createElement("img");
    newClick.setAttribute("href", arrItem.link)
    newImg.setAttribute("src", arrItem.image);
    newItem.appendChild(newClick); //append the "anchor tag" inside the "li"
    newClick.appendChild(newImg); //append the "image" inside the "anchor tag"
    newList.appendChild(newItem); //append the whole list of items(imgs) into the ".listOfContent"

  }); 
}

function showMovies() {

  clearAll();
  moviesSelectorStatus.hidden = false; //set the filter selector to show on the screen
  //

  createIt(moviesList); //create default list with all the movies

  if (moviesSelectorStatus.hidden === false){  //get the input from the select tag V
    document.querySelector("#movies-genre-select").addEventListener("input", (event) => { 
    let moviesFilter = document.querySelector("#movies-genre-select");

    if (moviesFilter.value === "all") {
      newList.innerHTML = "";
      createIt(moviesList);
    }
    
    else if (moviesFilter.value === "action") {
      let actionArr = moviesList.filter(function(arrItem){
        return (arrItem.genre === "action")
      })
      newList.innerHTML = "";
      createIt(actionArr);
    }

    else if (moviesFilter.value === "comedy") {
      let comedyArr = moviesList.filter(function(arrItem){
        return (arrItem.genre === "comedy")
      })
      newList.innerHTML = "";
      createIt(comedyArr);
    }

    else if (moviesFilter.value === "horror") {
      let horrorArr = moviesList.filter(function(arrItem){
        return (arrItem.genre === "horror")
      })
      newList.innerHTML = "";
      createIt(horrorArr);
    }

    else if (moviesFilter.value === "nature") {
      let natureArr = moviesList.filter(function(arrItem){
        return (arrItem.genre === "nature")
      })
      newList.innerHTML = "";
      createIt(natureArr);
    }
  
})}};


function showSeries() {
  clearAll();
  seriesSelectorStatus.hidden = false;

  createIt(seriesList); //create default list with all the series

  if (seriesSelectorStatus.hidden === false){  //get the input from the select tag V
    document.querySelector("#series-genre-select").addEventListener("input", (event) => { 
    let seriesFilter = document.querySelector("#series-genre-select");

    if (seriesFilter.value === "all") {
      newList.innerHTML = "";
      createIt(seriesList);
    }
    
    else if (seriesFilter.value === "action") {
      let actionArr = seriesList.filter(function(arrItem){
        return (arrItem.genre === "action")
      })
      newList.innerHTML = "";
      createIt(actionArr);
    }

    else if (seriesFilter.value === "comedy") {
      let comedyArr = seriesList.filter(function(arrItem){
        return (arrItem.genre === "comedy")
      })
      newList.innerHTML = "";
      createIt(comedyArr);
    }

    else if (seriesFilter.value === "horror") {
      let horrorArr = seriesList.filter(function(arrItem){
        return (arrItem.genre === "horror")
      })
      newList.innerHTML = "";
      createIt(horrorArr);
    }

    else if (seriesFilter.value === "sitcom") {
      let sitcomArr = seriesList.filter(function(arrItem){
        return (arrItem.genre === "sitcom")
      })
      newList.innerHTML = "";
      createIt(sitcomArr);
    }
  
})}};


function showAnime() {
  clearAll();
  animeSelectorStatus.hidden = false;

  createIt(animeList); //create default list with all the series

  if (animeSelectorStatus.hidden === false){  //get the input from the select tag V
    document.querySelector("#anime-genre-select").addEventListener("input", (event) => { 
    let animeFilter = document.querySelector("#anime-genre-select");

    if (animeFilter.value === "all") {
      newList.innerHTML = "";
      createIt(animeList);
    }
    
    else if (animeFilter.value === "action") {
      let actionArr = animeList.filter(function(arrItem){
        return (arrItem.genre === "action")
      })
      newList.innerHTML = "";
      createIt(actionArr);
    }

    else if (animeFilter.value === "comedy") {
      let comedyArr = animeList.filter(function(arrItem){
        return (arrItem.genre === "comedy")
      })
      newList.innerHTML = "";
      createIt(comedyArr);
    }

    else if (animeFilter.value === "drama") {
      let dramaArr = animeList.filter(function(arrItem){
        return (arrItem.genre === "drama")
      })
      newList.innerHTML = "";
      createIt(dramaArr);
    }

    else if (animeFilter.value === "fantasy") {
      let fantasyArr = animeList.filter(function(arrItem){
        return (arrItem.genre === "fantasy")
      })
      newList.innerHTML = "";
      createIt(fantasyArr);
    }
  
})}};

function showDocs() {
  clearAll();
  docsSelectorStatus.hidden = false;

  createIt(docsList); //create default list with all the series

  if (docsSelectorStatus.hidden === false){  //get the input from the select tag V
    document.querySelector("#docs-genre-select").addEventListener("input", (event) => { 
    let docsFilter = document.querySelector("#docs-genre-select");

    if (docsFilter.value === "all") {
      newList.innerHTML = "";
      createIt(docsList);
    }
    
    else if (docsFilter.value === "nature") {
      let natureArr = docsList.filter(function(arrItem){
        return (arrItem.genre === "nature")
      })
      newList.innerHTML = "";
      createIt(natureArr);
    }

    else if (docsFilter.value === "politics") {
      let politicsArr = docsList.filter(function(arrItem){
        return (arrItem.genre === "politics")
      })
      newList.innerHTML = "";
      createIt(politicsArr);
    }

    else if (docsFilter.value === "drama") {
      let dramaArr = docsList.filter(function(arrItem){
        return (arrItem.genre === "drama")
      })
      newList.innerHTML = "";
      createIt(dramaArr);
    }

    else if (docsFilter.value === "religion") {
      let religionArr = docsList.filter(function(arrItem){
        return (arrItem.genre === "religion")
      })
      newList.innerHTML = "";
      createIt(religionArr);
    }
  
})}};

function showStandup() {
  clearAll();
  standupSelectorStatus.hidden = false;

  createIt(standupList); //create default list with all the series

  if (standupSelectorStatus.hidden === false){  //get the input from the select tag V
    document.querySelector("#standup-genre-select").addEventListener("input", (event) => { 
    let standupFilter = document.querySelector("#standup-genre-select");

    if (standupFilter.value === "all") {
      newList.innerHTML = "";
      createIt(standupList);
    }
    
    else if (standupFilter.value === "english") {
      let englishArr = standupList.filter(function(arrItem){
        return (arrItem.genre === "english")
      })
      newList.innerHTML = "";
      createIt(englishArr);
    }

    else if (standupFilter.value === "german") {
      let germanArr = standupList.filter(function(arrItem){
        return (arrItem.genre === "german")
      })
      newList.innerHTML = "";
      createIt(germanArr);
    }

    else if (standupFilter.value === "portuguese") {
      let portugueseArr = standupList.filter(function(arrItem){
        return (arrItem.genre === "portuguese")
      })
      newList.innerHTML = "";
      createIt(portugueseArr);
    }

    else if (standupFilter.value === "spanish") {
      let spanishArr = standupList.filter(function(arrItem){
        return (arrItem.genre === "spanish")
      })
      newList.innerHTML = "";
      createIt(spanishArr);
    }
  
})}};

/* function selectFilter (){

  if (moviesSelectorStatus.hidden === false)
    document.querySelector("#movies-genre-select").addEventListener("input", (event) => {
    const moviesFilter = document.querySelector("#movies-genre-select") 

     if(moviesFilter.value === "action"){
    // let actionArr = [];
      moviesList.forEach((arrItem, arrIndex) => {
        if(arrItem.genre != "action"){
        moviesList.splice(arrIndex, 1);
        }
      });
      showMovies();
    } 

    if(moviesFilter.value === "comedy"){
      moviesList.forEach((arrItem, arrIndex) => {
        if(arrItem.genre != "comedy"){
          moviesList.splice(arrIndex, 1);
        }
      });
      showMovies();
    } 
    
  });

  else if (seriesSelectorStatus.hidden === false)
    document.querySelector("#series-genre-select").addEventListener("input", (event) => {
    const seriesFilter = document.querySelector("#series-genre-select")
    console.log(seriesFilter.value);
  });
  else if (animeSelectorStatus.hidden === false)
    document.querySelector("#anime-genre-select").addEventListener("input", (event) => {
    const animeFilter = document.querySelector("#anime-genre-select")
    console.log(animeFilter.value);
  });
  else if (docsSelectorStatus.hidden === false)
    document.querySelector("#docs-genre-select").addEventListener("input", (event) => {
    const docsFilter = document.querySelector("#docs-genre-select")
    console.log(docsFilter.value);
  });
  else if (standupSelectorStatus.hidden === false)
    document.querySelector("#standup-genre-select").addEventListener("input", (event) => {
    const standupFilter = document.querySelector("#standup-genre-select")
    console.log(standupFilter.value);
  });   
} */



const moviesList = [{
  "title" : "james bond",
  "release" : "1920",
  "genre" : "action",
  "description" : "a spy who does it all",
  "image" : "./content/movies/jamesbond.jpg",
  "link" : "https://it.wikipedia.org/wiki/Agente_007_-_Missione_Goldfinger"
},
{
  "title" : "click",
  "release" : "2003",
  "genre" : "comedy",
  "description" : "controle remoto magico",
  "image" : "./content/movies/click.jpg",
  "link" : "https://en.wikipedia.org/wiki/Click_(2006_film)"
},
{
  "title" : "scream",
  "release" : "1920",
  "genre" : "horror",
  "description" : "scream",
  "image" : "./content/movies/scream.jpg",
  "link" : "https://en.wikipedia.org/wiki/Scream_(2022_film)"
},
{
  "title" : "seasons",
  "release" : "2003",
  "genre" : "nature",
  "description" : "controle remoto magico",
  "image" : "./content/movies/seasons.jpg",
  "link" : "https://www.imdb.com/title/tt4283358/"
}];

const seriesList = [{
  "title" : "friends",
  "release" : "1997",
  "genre" : "sitcom",
  "description" : "friends",
  "image" : "./content/series/friends.jpg",
  "link" : "https://en.wikipedia.org/wiki/Friends"
},
{
  "title" : "tbbt",
  "release" : "2010",
  "genre" : "comedy",
  "description" : "tbbt uhul",
  "image" : "./content/series/tbbt.jpg",
  "link" : "https://it.wikipedia.org/wiki/The_Big_Bang_Theory"
}];


const animeList = [{
"title" : "naruto",
"release" : "1990",
"genre" : "action",
"description" : "ninjas",
"image" : "./content/anime/naruto.jpg",
"link" : "https://it.wikipedia.org/wiki/Naruto"
},
{
"title" : "dragon ball z",
"release" : "1992",
"genre" : "action",
"description" : "fighting anime",
"image" : "./content/anime/dbz.jpg",
"link" : "https://en.wikipedia.org/wiki/Dragon_Ball_Z"
},
{
  "title" : "Sword Art Online",
  "release" : "1992",
  "genre" : "fantasy",
  "description" : "fantasy anime",
  "image" : "./content/anime/sword_art_online.jpg",
  "link" : "https://myanimelist.net/anime/11757/Sword_Art_Online"
  }
];

const docsList = [{
"title" : "Penguins",
"release" : "2000",
"genre" : "nature",
"description" : "penguins in the wild",
"image" : "./content/docs/penguins.jpg",
"link" : "https://en.wikipedia.org/wiki/March_of_the_Penguins"
},
{
"title" : "The Secret",
"release" : "2006",
"genre" : "religion",
"description" : "the secret",
"image" : "./content/docs/the_secret.jpg",
"link" : "https://it.wikipedia.org/wiki/The_Secret_(film_2006)"
}
];

const standupList = [{
"title" : "kevin hart",
"release" : "2020",
"genre" : "english",
"description" : "kevin hart",
"image" : "./content/standup/kevin_hart.jpg",
"link" : "https://en.wikipedia.org/wiki/Kevin_Hart"
},
{
"title" : "fluffy",
"release" : "1999",
"genre" : "spanish",
"description" : "fluffy",
"image" : "./content/standup/fluffy.jpg",
"link" : "https://en.wikipedia.org/wiki/Gabriel_Iglesias"
}
];