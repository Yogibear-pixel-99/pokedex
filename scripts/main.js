const MAIN_URL = 'https://pokeapi.co/api/v2/pokemon/'

let randomPokemon = [];
let allPokemons = [];
let searchedPokemons = [];
let sortedPokemons = [];
let responseErrors = [];
let limit = 15;
let offset = 0;
let randomPokemonAlreadyAddedToArray = false;


async function init(){
    getTitleContent();
    getTitlePokemonPicFromApi();
}


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
        if (randomPokemon.length !== 0) {
        contentRef.src = `${randomPokemon[0].artwork}`;
        } else {
            getRandomPokemon();
            setPokemonImageTitle('title-pokemon')
        }
}


async function getTitlePokemonPicFromApi(){
    let randomNr = getRndNumber(1006);
    let contentRef = document.getElementById('title-pokemon');
        if (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNr}.png` != null) {
        contentRef.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNr}.png`;
        } else {
            getTitlePokemonPicFromApi();
        }
}


async function getPokemonFromApi (positionNr, array, arrayName) {
    try {
    let response = await fetch(MAIN_URL + positionNr);
    let data = await response.json();
        array.unshift(
            {
                id : data.id,
                name : data.name,
                types : getTypes(data),
                pic : data.sprites.front_default,
                abilities : await getAbilities(data),
                animation : getAnimation(data),
                stats : getStats(data),
                artwork : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${positionNr}.png`,
                arrayname : arrayName,
            })}

        catch (error) {
            responseErrors.push(positionNr + ' not found');
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
    try {
    let response = await fetch(data.abilities[absIndex].ability.url)
    let effectData = await response.json();
        if (effectData.effect_entries[0] != null) {
        return effectData.effect_entries[1].short_effect;
        } else {
            return '';
        }
    } catch (error) {
        responseErrors.push(error);
    }
}


function getAnimation(data){
    if (data.sprites.other.showdown.front_default == null) {
        return '';
    } else {
        return data.sprites.other.showdown.front_default;
    }
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


async function enterCardsContent() {
        disableOverflow('body');
        playPiccachuSound();
        animateEnterButton('main-container');
        await delay(1500);
        getCardsContent('main-container');
        setRandomPokemonToMainContainer('random-pokemon-wrapper');
        setInterval(() => setRandomPokemonToMainContainer('random-pokemon-wrapper'), 5000);
        await delay(1500);
        enableOverflow('body');
        setOnclickCloseLargeCardFunction(); 
}


function setOnclickCloseLargeCardFunction() {
    body.setAttribute("onclick", "closelargeCardOverlay()")
}


function playPiccachuSound () {
    let sound = new Audio('./assets/sounds/weird-pikachu-101090.mp3');
        sound.volume = 0.2;
        sound.play();
}


function animateEnterButton (id) {
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
        if (randomPokemon.length == 0) {
            setRandomPokemonToMainContainer ('random-pokemon-wrapper');
        } else {
            contentRef.innerHTML = getRandomPokemonAddToCardsTemp(randomPokemon);
        }
}


function addPokemonToAllPokemonArray() {
    if (randomPokemonAlreadyAddedToArray == false && randomPokemon.length != 0) {
        allPokemons.unshift(randomPokemon[0]);
        randomPokemonAlreadyAddedToArray = true;
    renderSmallPokemonCards(allPokemons, 'all-cards');
    }
}

async function get15Pokemons () {
    startLoadingAndRenderingCards();
    hideContainer('searched-cards');
    showContainer('all-cards');
        for (let pokeIndex = offset + 1; pokeIndex < limit + 1; pokeIndex++) {
            await getPokemonFromApi(pokeIndex, allPokemons, 'allPokemons');
    }
    offset += 15;
    limit += 15;
    finishLoadingAndRenderingCards();
}

async function get10RandomPokemons () {
    hideContainer('searched-cards');
    showContainer('all-cards');
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
    enableBlurGreyEffect ('cards-wrapper');
    enableBlurGreyEffect ('header-search-bar');
    enableBlurGreyEffect ('get-pokemons-button-bar');
    disableOverflow('body');
    disablePointerEventOnSmallCards ();
    disablePointerEvents ('search-bar');
    disablePointerEvents ('get-pokemons-button-bar');
}


function enableCardContent () {
    disableBlurGreyEffect ('cards-wrapper');
    disableBlurGreyEffect ('header-search-bar');
    disableBlurGreyEffect ('get-pokemons-button-bar');
    enableOverflow('body');
    enablePointerEventOnSmallCards ();
    enablePointerEvents('search-bar');
    enablePointerEvents('get-pokemons-button-bar');
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


