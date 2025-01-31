

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
// ONCLICK - getPokomons, getRandomPokemons

function getCardsContentTemp() {
    return  `${getHeaderSearchTemp()}
            <div class="cards-wrapper" id="cards-wrapper">
                ${getRandomPokemonTemp()}
                ${getFiltertSearchTemp()}
                ${getAllCardsTemp()}
                
            </div>     
                ${getFooterButtonTemp()}   
                ${getLargeCardTemp()}
                ${getLoadingSpinnerTemp()}`
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
                onclick="addPokemonToAllPokemonArray()">
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
                        onclick="get20Pokemons()">
                        Get 20 Pokemons
                    </button>
                    <button 
                        class="get-pokemon-button" 
                        onclick="get20RandomPokemons()">
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


function getRandomPokemonAddToCardsTemp (array) {
    return `<div class="random-pokemon-id">#${array[0].id}</div>
            <img id="random-pokemon-img" class="random-pokemon-img" src="${array[0].artwork}" alt="random-pokemon">
            <div class="random-pokemon-name">${array[0].name}</div>`
}

// HEEEEEEEEEEEEEEEEEEEEERRREE!!!!!!!!!!!!!!!!!!!!!!!
function getSmallPokemonCardTemp(array, index){
    
    return `
            <div 
                id="small-card-content${index}" 
                class="${getCardColor(array[index])}-card 
                small-card" 
                ${getSmallCardFunctions(array, index)} >
                <div class="small-card-header">
                    <div>#${array[index].id}</div>
                    <div class="small-card-name">${array[index].name}</div>
                </div>
                    <div class="small-card-img-container ${getCardColor(array[index])}-inner">
                        <img id="small-card-pokemon-img${index}" src=${array[index].pic}>
                        <div class="small-card-border ${getCardColor(array[index])}-border"></div>
                    </div>
                <div class="small-card-powers-container">
                    <div class="powers-header">Powers</div>
                    <div>${getSmallCardAbilities(array[index].abilities)}</div>
                <div 
                    class="small-card-footer 
                    ${getCardColor(array[index])}-footer">
                    ${getSmallCardTypes(array[index].types)}
                </div>
            </div> 
           `
}


function getCardColor(array){
    return array.types[0];
}


function getSmallCardFunctions (array, index) {

    return `
        onclick="cardDetails(${array[index].arrayname}, ${index})" 
        onmouseover="startAnimateSmallCardPokemon(${array[index].arrayname}, ${index})" 
        onmouseout="stopAnimateSmallCardPokemon(${array[index].arrayname}, ${index})"`
}


function getSmallCardAbilities(array){
    let element = "";
        for (let detailIndex = 0; detailIndex < array.length; detailIndex++) {
            element += `<div>${array[detailIndex].name}</div>`;
    }
    return element;
}


function getSmallCardTypes(array) {
    let element = "";
        for (let detailIndex = 0; detailIndex < array.length; detailIndex++) {
            element += `<div>${array[detailIndex]}</div>`;
    }
    return element;
}



function getLargePokemonCardTemp (array, id) {
   return  `<div 
                id="large-card-content${id}" 
                class="${getCardColor(array[id])}-card large-card">
                    <div class="large-card-header large-content-hide">
                        <div>#${array[id].id}</div>
                        <div class="large-card-name">${array[id].name}</div>
                    </div>
                    <img id="large-card-bg-img${id}" class="large-card-bg-img" src="${array[id].artwork}">
                        <div class="stats-container large-content-hide">
                            ${getLargeCardStats(array, id)}
                        </div>
                    <div class="empty"></div>
                        ${getLargeCardPowersContainerTemp(array, id)}
                        ${getLargeCardFooter(array, id)}    
            </div>`
}


function getLargeCardStatsTemp(array, id,statsId) {
    return `<div class="large-details-wrapper">
                     <div>${array[id].stats[statsId].name}</div>
                     <div 
                        class="stats-border-empty 
                        stats-color-border-${array[id].stats[statsId].name}">
                            <div 
                                class="stats-border-filled-all 
                                stats-color-border-filled-${array[id].stats[statsId].name}">
                            </div>
                     </div>
                        <div 
                            class="stats-value">${array[id].stats[statsId].value}</div>
                    </div>`
}


function getLargeCardPowersContainerTemp (array, id) {
    return `<div class="large-card-powers-container large-content-hide">
                ${getLargeCardPowersDetailsTemp(array, id)}
                    <div class="flex-ctr-spbtw abs-container large-content-hide weight">
                         <div class="abs-name">weight</div>
                    </div>
            </div>`
}

function getLargeCardPowersDetailsTemp(array, id) {
        let element = '';
    for (let absIndex = 0; absIndex < array[id].abilities.length; absIndex++) {
            element += `<div class="flex-ctr-spbtw abs-container">
            <div class="abs-name">${array[id].abilities[absIndex].name}</div>
            <div class="abs-text">${array[id].abilities[absIndex].text}</div>
            </div>`        
        }
    return element
}

// OVER HERE STOPPED AT GET STATS LARGE CARD

function getLargeCardFooter (array, id) {
    return `<div 
                class="large-card-footer 
                ${getCardColor(array[id])}-footer" 
                onmouseover="showLargePokemon(${id})" 
                onmouseout="hideLargePokemon(${id})">
                    <button 
                        class="switch-button 
                        ${getCardColor(array[id])}-card" 
                        onclick="switchDown(${id})" 
                        onmouseover="stopBubbling(event)">
                        <--
                    </button>
                    ${getLargeCardDetailsTemp(array[id])}
                    <div 
                        id="pokemon-footer-name${id}" 
                        class="pokemon-footer-name">
                    </div>
                    <button 
                        class="switch-button 
                        ${getCardColor(array[id])}-card" 
                        onclick="switchUp(${id})" 
                        onmouseover="stopBubbling(event)">
                        -->
                    </button>
                    <div 
                        class="left-footer-bubble" 
                        onmouseover="stopBubbling(event)">
                    </div>
                    <div 
                        class="right-footer-bubble" 
                        onmouseover="stopBubbling(event)">
                    </div>
            </div>`
}







function getLargeCardDetailsTemp(array){
    let element = "";
    for (let detailIndex = 0; detailIndex < array.types.length; detailIndex++) {
        element += `<div class="large-content-hide">${array.types[detailIndex].name}</div>`;
    }
    return element;
}