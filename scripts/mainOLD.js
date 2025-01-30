

let randomPokemon = [];
let responseErrors = [];

let MAIN_URL = 'https://pokeapi.co/api/v2/pokemon/'

// -----------------------------------
// let allPokemons = [];
// 
// let renderPosition = 0;



// let filtertPokemonsName = [];
// let filtertForUser = [];
// let searchedPokemons = [];


// let titlePokemonPic = '';
// let onTitle = true;

// let placeholderAlreadyAdded = false;
// ---------------------------------------


async function init(){
    getTitleContent();
    await getRandomPokemon();
    setPokemonImage('title-pokemon');
}


// Get title content
function getTitleContent(){
    let contentRef = document.getElementById('main-container');
        contentRef.innerHTML = getTitleContentTemp();
}


async function getRandomPokemon(){
    randomPokemon = [];
    let randomNr = getRndNumber(1000);
        await getPokemonFromApi (randomNr, randomPokemon);
}


function setPokemonImage(id) {
    let contentRef = document.getElementById(id);
        contentRef.src = `${randomPokemon[0].artwork}`;
}


// GET POKEMONS WITH STATS FROM API
async function getPokemonFromApi (positionNr, array) {
    try {
    let response = await fetch(MAIN_URL + positionNr);
    console.log(response);
    let data = await response.json();
        array.push(
            {
                id : data.id,
                name : data.name,
                types : getTypes(data),
                pic : data.sprites.front_default,
                abilities : await getAbilities(data),
                animation : data.sprites.other.showdown.front_default,
                stats : getStats(data),
                artwork : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${positionNr}.png`,
                weight : data.weight,   
            })}

            catch (error) {
                responseErrors.push(positionNr + ' not found');
                console.log(positionNr + ' not found');
            }
}


function getTypes(data){
    let element = [];
    for (let typesIndex = 0; typesIndex < data.types.length; typesIndex++) {
        element.push(
            data.types[typesIndex].type.name,
        )}
    return element;
}


async function getAbilities(data){
    let element = [];
    for (let absIndex = 0; absIndex < data.abilities.length; absIndex++) {
        if (data.abilities != null) {
        element.push(
            {
                name : data.abilities[absIndex].ability.name,
                text : await getAbilitiesText(data, absIndex),

            }
    )} else {return ''}}
    return element;
}


async function getAbilitiesText(data, absIndex) {
    let response = await fetch(data.abilities[absIndex].ability.url)
    let effectData = await response.json();
        if (effectData.effect_entries[0] != null) {
        return effectData.effect_entries[0].short_effect;
        } else {return '';}

}   

function getStats(data) {
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
// GET POKEMONS WITH STATS FROM API







// function getTitlePokemon(){
//     let contentRef = document.getElementById('title-pokemon');
//     let positionNr = getRndNumber(200);
//         contentRef.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${positionNr}.png`;
    
// }

// --------------------------------------------------------------
// Enter Cards Content
async function enterCardsContent() {
   
        
        // animateEnterButton('main-container');
        
        // await delay(1500);

        
        getCardsContent('main-container');

        await getPlaceholderPokemon();
        setInterval(getPlaceholderPokemon, 5000);
        
        // await delay(1500);
        
}
// --------------------------------------------------------------

function animateEnterButton(id) {
    let titleRef = document.getElementById(id);
        titleRef.classList.add('animate-main-content');
}











async function getPokemons(){
    await showLoadingSpinner();
    await disabelCardContent();
    await delay(3000);
    await getPokemonCardsFromApi(MAIN_URL, allPokemons);
    await hideLoadingSpinner();
    await renderSmallPokemonCards(allPokemons, 'all-cards');
    await enableCardContent();
    changeGet20PokemonButtonText();
    offset += 20;
    limit += 20;
    renderPosition += 20;
    document.body.style.overflow = 'visible';
}








function addPokemonToSmallCardsArray() {
    if (placeholderAlreadyAdded == false) {
    allPokemons.unshift(placeholderPokemon[0]);
    let contentRef = document.getElementById('all-cards');
        contentRef.innerHTML = '';
    renderAllSmallPokemonCards(allPokemons, 'all-cards');
    }
    placeholderAlreadyAdded = true;
}


async function getRandomPokemons() {
    offset = getRndNumber(1006);
    limit = offset + 20;
    getPokemons();
}





async function showLoadingSpinner () {
    let spinnerRef = document.getElementById(`loading-spinner-container${limit - offset}`);
        spinnerRef.innerHTML += `
        <img class="loading-spinner-img" src="./assets/img/logo.png" alt="loading-spinner">
        </div>`
}


async function disabelCardContent () {
    let cardsRef = document.getElementById('all-cards');
    let placeholderRef = document.getElementById('placeholder-wrapper');
        cardsRef.classList.add('blur-grey-effect');
        cardsRef.classList.add('overflow-hidden');
        placeholderRef.classList.add('blur-grey-effect');
}


async function enableCardContent () {
    let cardsRef = document.getElementById('all-cards');
    let placeholderRef = document.getElementById('placeholder-wrapper');
        cardsRef.classList.remove('blur-grey-effect');
        cardsRef.classList.remove('overflow-hidden');
        placeholderRef.classList.remove('blur-grey-effect');
}


async function hideLoadingSpinner () {
    let contentRef = document.getElementById(`loading-spinner-container${limit - offset}`);
        contentRef.innerHTML = ``
}


async function getPokemonCardsFromApi (URL, array){
    for (let loadIndex = offset; loadIndex < limit; loadIndex++) {
    let pokeId = loadIndex + 1;
    
    
    try {
        let response = await fetch(URL + "pokemon/" + pokeId);
        let data = await response.json();
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

    }   catch (error) {
        responseErrors.push(pokeId + ' not found');
    }}
    console.log(allPokemons);
}






function changeGet20PokemonButtonText(){
    let contentRef = document.getElementsByClassName('get-pokemon-button');
        contentRef[0].innerText = `Get another 20 Pokemons`;
}


function selectName () {
    let nameRef = document.getElementById('check-name-color');
    let typeRef = document.getElementById('check-type-color');
    nameRef.classList.remove('greyscale');
    typeRef.classList.add('greyscale');
}


function selectType () {
    let nameRef = document.getElementById('check-name-color');
    let typeRef = document.getElementById('check-type-color');
    nameRef.classList.add('greyscale');
    typeRef.classList.remove('greyscale');
}