
let allPokemons = [];
// let pokemonDetails = [];

let limit = 20;
let offset = 0;
let MAIN_URL = 'https://pokeapi.co/api/v2/'
let OFFSET_URL = `pokemon?limit=${limit}&offset=${offset}.`

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


// https://pokeapi.co/api/v2/pokemon  ---   all
// https://pokeapi.co/api/v2/pokemon/145  ---   one pokemon
// https://pokeapi.co/api/v2/pokemon-form/145  ---   one pokemon
// https://pokeapi.co/api/v2/pokemon-form/145  ---   one pokemon



// turn Title Pokemon Interval on




async function getPokemons(){
    await getPokemonCardsFromApi(MAIN_URL, allPokemons);
    await renderSmallCards();
    offset += 20;
    limit += 20;

}

async function getPokemonCardsFromApi (URL, array){
    for (let loadIndex = offset; loadIndex < limit; loadIndex++) {
    let pokeId = loadIndex + 1;
        
    
    let response = await fetch(URL + "pokemon/" + pokeId);
    let data = await response.json();
                array.push(
                    {
                        id : data.id,
                        name : data.name,
                        types : getTypes(data),
                        pic : data.sprites.front_default,
                        abilities : getAbilities(data),
                    }
                )
    }
    console.log(allPokemons);
    
}

function getTypes(data){
    let element = [];
    for (let typesIndex = 0; typesIndex < data.types.length; typesIndex++) {
        element.push(data.types[typesIndex].type.name);
    }
    return element;
}

function getAbilities(data){
    let element = [];
    for (let typesIndex = 0; typesIndex < data.abilities.length; typesIndex++) {
        element.push(data.abilities[typesIndex].ability.name);
    }
    return element;
}


// ALLGEMEINE FUNCKTION FÜRS HOLEN DER INFOS

// function getInfo(data, arrayName, subName){
//     arrayName = arrayName.replace('"', '');
//     for (let detailIndex = 0; detailIndex < data.arrayName.length; typesIndex++) {
//         return data.arrayName[typesIndex].subName.name;
//     }
// }

async function renderSmallCards(){
    let contentRef = document.getElementById('all-cards');
    
    for (let smallCardsIndex = offset; smallCardsIndex < allPokemons.length; smallCardsIndex++) {
        contentRef.innerHTML += getSmallCardsTemp(smallCardsIndex);
        
    }
}