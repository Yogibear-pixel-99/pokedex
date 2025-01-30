
let allPokemons = [];
let responseErrors = [];
let renderPosition = 0;
let placeholderPokemon = [];
let limit = 20;
let offset = 0;
let MAIN_URL = 'https://pokeapi.co/api/v2/'
let titlePokemonPic = '';
let onTitle = true;
let placeholderAlreadyAdded = false;


function init(){
    getTitleContent();
    getTitleInfo();
    setInterval(getTitleInfo, 3000);
}


// Get title content
function getTitleContent(){
    let contentRef = document.getElementById('main-container');
        contentRef.innerHTML = getTitleTemp();
}


async function getTitleInfo (){
    if (onTitle === true) {
        getTitlePokemon()
    } ;
}


function getTitlePokemon(){
    let contentRef = document.getElementById('title-pokemon');
    let positionNr = getRndNumber(200);
        contentRef.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${positionNr}.png`;
    
}


// Enter Cards Content
async function enterCardsContent() {
    onTitle = false;
        clearInterval(getTitleInfo);
        await hideTitleContent();
        await delay(0);
        // await delay(1500);
        await getCardsContent();
        await getPlaceholderPokemon();
        setInterval(getPlaceholderPokemon, 5000);
        await delay(0);
        // await delay(1500);
        
}


async function hideTitleContent() {
    let titleRef = document.getElementById('main-container');
        titleRef.classList.add('animate-main-content');
}


async function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), ms)
    })
    
}


async function getCardsContent () {
    let contentRef = document.getElementById('main-container');
        contentRef.innerHTML = getCardsTemp();
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


async function getPlaceholderPokemon(){
    placeholderPokemon = [];
    let contentRef = document.getElementById('placeholder-wrapper');
    let positionNr = getRndNumber(800);

        await getFiltertInfos (MAIN_URL, positionNr, placeholderPokemon);
        // imgRef.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${positionNr}.png`;
        contentRef.innerHTML = getPlaceholderInfosTemp();
        placeholderAlreadyAdded = false;
}


async function getFiltertInfos (MAIN_URL, positionNr, array) {
    try {
    let response = await fetch(MAIN_URL + 'pokemon/' + positionNr);
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
                stats : getStatsFromApi(data),
                artwork : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${positionNr}.png`,
                weight : data.weight,   
            })}

            catch (error) {
                responseErrors.push(positionNr + ' not found');
                console.log(positionNr + ' not found');
            }
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


function getRndNumber (maxNr) {
    return Math.floor(Math.random() * maxNr) + 1;
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