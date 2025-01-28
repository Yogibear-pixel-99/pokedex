

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
    setInterval(getTitleInfo, 3000);
}



async function getTitleInfo (){
    if (onTitle === true) {
        getTitlePokemon()
    } ;
}


function getTitlePokemon(){
    let contentRef = document.getElementById('title-pokemon');
    let positionNr = Math.floor(Math.random() * 200) + 1;
        contentRef.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${positionNr}.png`;
    
}


async function enterCardsContent() {
    onTitle = false;
        await hideTitleContent();
        await showCardContent();  
}

async function hideTitleContent() {
    let titleRef = document.getElementById('title-container');
        titleRef.classList.add('animate-title-content');
        setTimeout(() => titleRef.innerHTML = '', 2000);
        setTimeout(() => titleRef.classList.add('d_none'), 2000);
        // setTimeout(() => titleRef.style.height = '0px', 2000);
}

async function showCardContent() {
    let cardsRef = document.getElementById('card-container');
    setTimeout(() => cardsRef.classList.add('animate-cards-content'), 1500);
    document.body.style.overflow = "visible";
}

async function showLoadingSpinner (ms) {
    let contentRef = document.getElementById('all-cards');
        contentRef.innerHTML += `<div id="loading-spinner" class="loading-spinner-container">
        <img class="loading-spinner-img" src="./assets/img/logo.png" alt="loading-spinner">
        </div>`
}


async function hideLoadingSpinner () {
    let contentRef = document.getElementById('loading-spinner');
        contentRef.innerHTML = ``
}


async function spinnerDelay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve('');}, ms);
    })
}


function getCardsInfo(){
    console.log(onTitle);
}


async function getPokemons(){
    await showLoadingSpinner();
    await spinnerDelay(2000);
    await getPokemonCardsFromApi(MAIN_URL, allPokemons);
    await hideLoadingSpinner();
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
                        abilities : await getAbilities(data),
                        
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
        element.push(
            {
                name : data.types[typesIndex].type.name,
            }
        )



    
    }
    return element;
}


async function getAbilities(data){
    let element = [];
    for (let absIndex = 0; absIndex < data.abilities.length; absIndex++) {
        element.push(
            {
                name : data.abilities[absIndex].ability.name,
                text : await getAbilitiesText(data, absIndex),

            }
    )}
    return element;
}

async function getAbilitiesText(data, absIndex) {
    let response = await fetch(data.abilities[absIndex].ability.url)
    let effectData = await response.json();
        return effectData.effect_entries[0].short_effect;

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




