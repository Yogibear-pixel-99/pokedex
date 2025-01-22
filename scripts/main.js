
let limit = 20
let offset = 0;
let MAIN_URL = 'https://pokeapi.co/api/v2/'
let OFFSET_URL = `pokemon?limit=${limit}&offset=${offset}.`

let titlePokemonPic = '';
let onTitle = true;

function init(){
    onTitle ? getTitleInfo() : getCardsInfo();
    setInterval(enterButton, 1000);
    // onTitle ? setInterval(getTitleInfo, 3500) : getCardsInfo();
    
}

async function getTitleInfo (){
    await getTitlePokemon();
    setTitlePokemon();
}

async function getTitlePokemon(){
    let positionNr = Math.floor(Math.random() * 200) + 1;
    // console.log(positionNr);

    let response = await fetch (MAIN_URL + `pokemon/${positionNr}`);
    // console.log(response);
    let data = await  response.json();
    // console.log(data);
    titlePokemonPic = data.sprites.front_default;
    // console.log(titlePokemonPic);
}

function setTitlePokemon(){
    let contentRef = document.getElementById('title-pokemon');
    contentRef.src = titlePokemonPic;
}

function getCardsInfo(){
    console.log(onTitle);
}

function enterButton(){
    let enter = document.getElementById('enter');
    enter.style.width = '200px';
}
// https://pokeapi.co/api/v2/pokemon  ---   all
// https://pokeapi.co/api/v2/pokemon/145  ---   one pokemon
// https://pokeapi.co/api/v2/pokemon-form/145  ---   one pokemon
// https://pokeapi.co/api/v2/pokemon-form/145  ---   one pokemon



// turn Title Pokemon Interval on


let allPokemons = [];

async function getPokemonCards(){
    
    let response = await fetch(MAIN_URL + OFFSET_URL);
    console.log(response);
    let data = await response.json();
    console.log(data);
    
    savePokemonsInArray(data);
    limit += 20;
    offset += 20;

   console.log(limit);
   console.log(offset);
   console.log(allPokemons);

}

function savePokemonsInArray(pokemons){
    for (let pokemonIndex = 0; pokemonIndex < pokemons.results.length; pokemonIndex++) {
        allPokemons.push( {
            name : pokemons.results[pokemonIndex].name,
            pokemonUrl : pokemons.results[pokemonIndex].url
        }

    )
    }
}  
