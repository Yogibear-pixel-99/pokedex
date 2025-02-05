let randomPokemon = [];
let allPokemons = [];
let searchedPokemons = [];
let sortedPokemons = [];
let responseErrors = [];
let MAIN_URL = 'https://pokeapi.co/api/v2/pokemon/'
let limit = 20;
let offset = 0;
let randomPokemonAlreadyAddedToArray = false;


async function init(){
    enterCardsContent();
    // getTitleContent();
    // await getRandomPokemon(randomPokemon);
    // setPokemonImageTitle('title-pokemon');
}


// Get title content
function getTitleContent(){
    let contentRef = document.getElementById('main-container');
        contentRef.innerHTML = getTitleContentTemp();
}


async function getRandomPokemon(array){
    let randomNr = getRndNumber(1006);
        await getPokemonFromApi (randomNr, array, 'allPokemons');
}


function setPokemonImageTitle(id) {
    let contentRef = document.getElementById(id);
        contentRef.src = `${randomPokemon[0].artwork}`;
}


// GET POKEMONS FROM API
async function getPokemonFromApi (positionNr, array, arrayName) {
    try {
    let response = await fetch(MAIN_URL + positionNr);
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
                arrayname : arrayName,
            })}

            catch (error) {
                responseErrors.push(positionNr + ' not found');
                console.log(positionNr + ' not found');
            }
            console.log(array);
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
        return effectData.effect_entries[1].short_effect;
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


// ENTER CARDS CONTENT
async function enterCardsContent() {
        disableOverflow('body');
        animateEnterButton('main-container');
        await delay(1500);
        getCardsContent('main-container');
        setRandomPokemonToMainContainer('random-pokemon-wrapper');
        setInterval(() => setRandomPokemonToMainContainer('random-pokemon-wrapper'), 5000);
        await delay(1500);
        enableOverflow('body');  
}


function animateEnterButton(id) {
    let titleRef = document.getElementById(id);
        titleRef.classList.add('animate-main-content');
}


function getCardsContent (id) {
    let contentRef = document.getElementById(id);
        contentRef.innerHTML = getCardsContentTemp();
}


async function setRandomPokemonToMainContainer (id) {
        randomPokemonAlreadyAddedToArray = false;
        randomPokemon = [];
    let contentRef = document.getElementById(id);
        await getRandomPokemon(randomPokemon);
        contentRef.innerHTML = getRandomPokemonAddToCardsTemp(randomPokemon);
}


function addPokemonToAllPokemonArray() {

    if (randomPokemonAlreadyAddedToArray == false) {
        allPokemons.unshift(randomPokemon[0]);
        randomPokemonAlreadyAddedToArray = true;
    renderSmallPokemonCards(allPokemons, 'all-cards');
    }
    
}

async function get20Pokemons () {
    startLoadingAndRenderingCards();
        for (let pokeIndex = offset + 1; pokeIndex < limit + 1; pokeIndex++) {
            await getPokemonFromApi(pokeIndex, allPokemons, 'allPokemons');
    }
    offset += 20;
    limit += 20;
    finishLoadingAndRenderingCards();
}

async function get10RandomPokemons () {
    startLoadingAndRenderingCards();
        for (let pokeIndex = 0; pokeIndex < 10; pokeIndex++) {
            const number = getRndNumber (1026);
                await getPokemonFromApi(number, allPokemons, 'allPokemons');  
    }
    finishLoadingAndRenderingCards();
}


function startLoadingAndRenderingCards() {
    showLoadingSpinner();
    disableCardContent();
}


 function finishLoadingAndRenderingCards () {
    renderSmallPokemonCards(allPokemons, 'all-cards');
    hideLoadingSpinner();
    enableCardContent();
}


async function showLoadingSpinner () {
    let spinnerRef = document.getElementById(`loading-spinner-container`);
        spinnerRef.innerHTML = `
        <img class="loading-spinner-img" src="./assets/img/logo.png" alt="loading-spinner">
        </div>`
}


async function hideLoadingSpinner () {
    let contentRef = document.getElementById(`loading-spinner-container`);
        contentRef.innerHTML = ``
}


function disableCardContent () {
    enableAllBlurGreyEffects ();
    disableAllPointerEvents ();
    disableOverflow ('body');
}


function enableCardContent () {
    disableAllBlurGreyEffects ();
    enableAllPointerEvents ();
    enableOverflow ('body');
}


function enableAllPointerEvents () {
    enablePointerEventOnSmallCards ();
    enablePointerEvents ('search-bar');
    enablePointerEvents ('get-pokemons-button-bar');
}


function disableAllPointerEvents () {
    disablePointerEventOnSmallCards ();
    disablePointerEvents ('search-bar');
    disablePointerEvents ('get-pokemons-button-bar');
}


function enableAllBlurGreyEffects () {
    enableBlurGreyEffect ('cards-wrapper');
    enableBlurGreyEffect ('header-search-bar');
    enableBlurGreyEffect ('get-pokemons-button-bar');
}


function disableAllBlurGreyEffects () {
    disableBlurGreyEffect ('cards-wrapper');
    disableBlurGreyEffect ('header-search-bar');
    disableBlurGreyEffect ('get-pokemons-button-bar');
}


function disablePointerEventOnSmallCards () {
    let smallCardsRef = document.getElementsByClassName('small-card');
        for (let cardIndex = 0; cardIndex < smallCardsRef.length; cardIndex++) {
            smallCardsRef[cardIndex].classList.add('no-pointer-events');
        }
}


function enablePointerEventOnSmallCards () {
    let smallCardsRef = document.getElementsByClassName('small-card');
        for (let cardIndex = 0; cardIndex < smallCardsRef.length; cardIndex++) {
            smallCardsRef[cardIndex].classList.remove('no-pointer-events');
        }
}


