

function getTitleContentTemp() {
    return `<section 
                id="title-container" 
                class="title-container ">
                    <img 
                        class="pokemon-logo" 
                        src="/assets/img/International_Pokémon_logo.svg.png" 
                        alt="pokemon header">
                    <div>
                        <img 
                            class="by" 
                            src="/assets/img/by.png">
                        <img 
                            class="name" 
                            src="/assets/img/name.png" 
                            alt="Joachim Pürcher">
                    </div>
                    <div 
                        class="title-bottom">
                            <img 
                                id="title-pokemon" 
                                class="pokemon-title-img" 
                                src="">
                            <div class="enter-wrapper" 
                                onclick="stopBubbling(event)">
                                <img 
                                    onclick="enterCardsContent()" 
                                    id="enter" class="enter" 
                                    src="/assets/img/enterlarge.png">
                            </div>
                            <img 
                                class="pokeball-title" 
                                src="/assets/img/pokebol-2898038_1280.png" 
                                alt="pokeball">
                    </div>
            </section>`
}


// --ONCLICK: searchPokemons, selectName, selectType,
// ONCLICK - addPokemonToSmallCardsArray
// ONCLICK - getPokomons, getRandomPokemons
function getCardsContentTemp() {
    return  `${getHeaderSearchTemp()}
            <div class="cards-wrapper">
                ${getRandomPokemonTemp()}
                ${getFiltertSearchTemp()}
                ${getAllCardsTemp()}
                ${getLoadingSpinnerTemp()}
            </div>     
                ${getFooterButtonTemp()}   
                ${getLargeCardTemp()}`
}



function getHeaderSearchTemp () {
    return `
    <div class="top-sticky" onclick="stopBubbling(event)">
        <div id="search-bar" class="search-bar">
            <div class="search-wrapper">
                <a href="#searched-cards">
                    <button 
                        id="search-button" 
                        class="search-button" 
                        onclick="searchPokemons()">
                        Search
                    </button>
                </a>
                <input 
                    id="search-input" 
                    class="search-input" 
                    type="text" minlength="3" 
                    maxlength="20" value="" 
                    placeholder="put in a name or a type">
                <label 
                    class="search-type name-type" 
                    onclick="selectName()"> 
                        <img id="check-name-color" class="check-img" src="./assets/img/logo.png">
                        <input 
                            type="radio" 
                            name="sort-pokemon" 
                            value="name" 
                            checked="checked" 
                            id="radio-name">
                    <span>Name</span>
                </label>
                <label 
                    class="search-type name-type" 
                    onclick="selectType()">
                        <img id="check-type-color" class="check-img greyscale" src="./assets/img/logo.png">
                        <input 
                            type="radio" 
                            name="sort-pokemon" 
                            value="type" 
                            id="radio-type">
                    <span>Type</span>
                </label>
            </div>
        <div class="filter-wrapper">
                <select>
                    <option value="hp">HP</option>
                    <option value="attack">Attack</option>
                    <option value="defense">Defense</option>
                    <option value="special-attack">Special-Attack</option>
                    <option value="special-defense">Special-Defense</option>
                    <option value="speed">Speed</option>
                </select>
                <button class="search-button">sort</button>
            </div>
        </div>
    </div>
    `
}


function getRandomPokemonTemp () {
    return `<div 
                id="random-pokemon-wrapper" 
                class="random-pokemon-wrapper" 
                onclick="addPokemonToSmallCardsArray()">
            </div>`
}


function getFiltertSearchTemp () {
    return `<div 
                id="searched-cards" 
                class="all-cards searched-cards">
                ${getStartTextTemp()}
            </div>`
}


function getAllCardsTemp () {
    return `<div 
                id="all-cards" 
                class="all-cards">
            </div>`
}


function getLoadingSpinnerTemp () {
    return `<div 
                id="loading-spinner-container"
                class="loading-spinner-container">
            </div>`
}


function getFooterButtonTemp () {
    return `<div 
            class="bottom-sticky" 
            onclick="stopBubbling(event)">
                <div class="button-wrapper">
                    <button 
                        class="get-pokemon-button" 
                        onclick="getPokemons()">
                        Get 20 Pokemons
                    </button>
                    <button 
                        class="get-pokemon-button" 
                        onclick="getRandomPokemons()">
                        Get 20 Random Pokemons
                    </button>
                </div>
            </div>`
}


function getLargeCardTemp () {
    return `<div 
                id="large-card-container" 
                class="large-card-container" 
                onclick="stopBubbling(event)" 
                style="display: none;">
            </div>`
}


function getStartTextTemp() {
    return `<div 
                class="nothing-found start-text">
                    Welcome to the world off pokemon-cards. 
                    Feel free to get 20 cards in a row or 20 cards by random. 
                    You can search the cards listet below by type or name.
                    You can sort the searched pokemons by diffrent stats. Highest first. 
                    Click on a small card to expand and hover over the cardfooter, 
                    to see the pokemon art design.
                <button 
                    class="get-pokemon-button" 
                    onclick="hideContainer('searched-cards')">
                    Click to close
                </button>
            </div>`
}


function getRandomPokemonMainTemp () {
    return `<div class="random-pokemon-id">#${randomPokemon[0].id}</div>
            <img id="random-pokemon-img" class="random-pokemon-img" src="${randomPokemon[0].artwork}" alt="random-pokemon">
            <div class="random-pokemon-name">${randomPokemon[0].name}</div>`
}









