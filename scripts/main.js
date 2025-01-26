

let allPokemons = [];
let allPokemonsLargeCardDetails = [];
// let pokemonDetails = [];

let limit = 20;
let offset = 0;
let MAIN_URL = 'https://pokeapi.co/api/v2/'
// let OFFSET_URL = `pokemon?limit=${limit}&offset=${offset}.`

let titlePokemonPic = '';
let onTitle = true;


function init(){
    onTitle ? getTitleInfo() : getCardsInfo();
    // setInterval(enterButton, 1000);
    // onTitle ? setInterval(getTitleInfo, 3500) : getCardsInfo();
    
}


async function getTitleInfo (){
    await getTitlePokemon();
    setTitlePokemon();
}


async function getTitlePokemon(){
    let positionNr = Math.floor(Math.random() * 200) + 1;
    let response = await fetch (MAIN_URL + `pokemon/${positionNr}`);
    let data = await  response.json();
    titlePokemonPic = data.sprites.front_default;
}


function setTitlePokemon(){
    let contentRef = document.getElementById('title-pokemon');
    contentRef.src = titlePokemonPic;
}


function getCardsInfo(){
    console.log(onTitle);
}


async function getPokemons(){
    await getSmallPokemonCardsFromApi(MAIN_URL, allPokemons);
    await renderSmallPokemonCards();
    offset += 20;
    limit += 20;
}
