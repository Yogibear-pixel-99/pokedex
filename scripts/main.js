

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
    await getPokemonCardsFromApi(MAIN_URL, allPokemons);
    await renderSmallPokemonCards();
    offset += 20;
    limit += 20;
}


async function getPokemonCardsFromApi (URL, array){
    for (let loadIndex = offset; loadIndex < limit; loadIndex++) {
    let pokeId = loadIndex + 1;
    let response = await fetch(URL + "pokemon/" + pokeId);
    let data = await response.json();
    // console.log(data);
                array.push(
                    {
                        id : data.id,
                        name : data.name,
                        types : getTypes(data),
                        pic : data.sprites.front_default,
                        abilities : getAbilities(data),
                        animation : data.sprites.other.showdown.front_default,
                        stats : getStatsFromApi(data),
                        artwork : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`,
                        weight : data.weight,                 
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


function getStatsFromApi(data) {
    let element = [];
        for (let statsIndex = 0; statsIndex < data.stats.length; statsIndex++) {
            element.push(
                {
                    name : data.stats[statsIndex].stat.name,
                    value : data.stats[statsIndex].base_stat,
                }
            )
            
        }
    return element;
}




//  TEEEEESSSST




