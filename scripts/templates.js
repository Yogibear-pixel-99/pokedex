

function getTitleTemp() {
    return `<section id="title-container" class="title-container">
            <img class="pokemon-logo" src="/assets/img/International_Pokémon_logo.svg.png" al="pokemon header">
            <div>
                <img class="by" src="/assets/img/by.png">
                <img class="name" src="/assets/img/name.png" alt="Joachim Pürcher">
            </div>
            <div class="title-bottom">
                <img id="title-pokemon" class="pokemon-title-img" src="">
                <div class="enter-wrapper" onclick="stopBubbling(event)">
                    <img onclick="enterCardsContent()" id="enter" class="enter" src="/assets/img/enterlarge.png">
                </div>
                <img class="pokeball-title" src="/assets/img/pokebol-2898038_1280.png" alt="pokeball">
            </div>
        </section>`
}


function getCardsTemp() {
    return`<section id="card-container" class="card-container">
               
                    ${getSearchTemp()}
                    
                    <div class="cards-wrapper">
                        <div id="placeholder-wrapper" class="placeholder-wrapper" onclick="addPokemonToSmallCardsArray()">
                        </div>
                        <div id="searched-cards" class="all-cards searched-cards">${getStartTextTemp()}</div>
                        <div id="all-cards" class="all-cards">
                            
                        </div>
                        <div id="loading-spinner-container${limit}" class="loading-spinner-container"></div>
                    </div>
                    <div class="bottom-sticky" onclick="stopBubbling(event)">
                    <div class="button-wrapper">
                        <button class="get-pokemon-button" onclick="getPokemons()">Get 20 Pokemons</button>
                        <button class="get-pokemon-button" onclick="getRandomPokemons()">Get 20 Random Pokemons</button>
                    </div>
                    </div>
        </section>
        <section id="large-card-container" class="large-card-container" onclick="stopBubbling(event)" style="display: none;">
        `
}


function getStartTextTemp() {
    return `<div class="nothing-found start-text">
    Welcome to the world off pokemon-cards. 
    Feel free to get 20 cards in a row or 20 cards by random. 
    You can search the cards listet below by type or name.
    You can sort the searched pokemons by diffrent stats. Highest first. 
    Click on a small card to expand and hover over the cardfooter, 
    to see the pokemon art design.
    <button class="get-pokemon-button" onclick="hideContainer('searched-cards')">
    Click to close
    </button>
    </div>`
}



function getSearchTemp(){
    return `
    <div class="top-sticky" onclick="stopBubbling">
    <div id="search-bar" class="search-bar">
        <div class="search-wrapper">
            <a href="#card-container"><button id="search-button" class="search-button" onclick="searchPokemons()">Search</button></a>
            <input id="search-input" class="search-input" type="text" minlength="3" maxlength="20" value="" placeholder="put in a name or a type">
            <label class="search-type name-type" onclick="selectName()">
                
                <img id="check-name-color" class="check-img" src="./assets/img/logo.png">
                <input type="radio" name="sort-pokemon" value="name" checked="checked" id="radio-name">
                <span>Name</span>
            </label>
            <label class="search-type name-type" onclick="selectType()">
                
                <img id="check-type-color" class="check-img greyscale" src="./assets/img/logo.png">
                <input type="radio" name="sort-pokemon" value="type" id="radio-type">
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


 function getPlaceholderInfosTemp () {
    return `<div id="id-placeholder" class="placeholder-id">#${placeholderPokemon[0].id}</div>
            <img id="img-placeholder" class="img-placeholder" src="${placeholderPokemon[0].artwork}" alt="pokemon-placeholder">
            <div id="id-placeholder" class="placeholder-name">${placeholderPokemon[0].name}</div>`
}


// SMALL CARDS TEMPS
function getSmallCardsTemp(smallCardsIndex, pokeArray){
    
    return `
            <div id="small-card-content${smallCardsIndex}" 
            class="${getCardColor(pokeArray[smallCardsIndex])}-card small-card" 
            ${getSmallCardFunctions(smallCardsIndex, pokeArray)} >
                <div class="small-card-header">
                    <div>#${pokeArray[smallCardsIndex].id}</div>
                    <div class="small-card-name">${pokeArray[smallCardsIndex].name}</div>
                </div>
                    <div class="small-card-img-container ${getCardColor(pokeArray[smallCardsIndex])}-inner">
                        <img id="small-card-pokemon-img${smallCardsIndex}" src=${pokeArray[smallCardsIndex].pic}>
                        <div class="small-card-border ${getCardColor(pokeArray[smallCardsIndex])}-border"></div>
                    </div>
                <div class="small-card-powers-container">
                    <div class="powers-header">Powers</div>
                    <div>${getSmallCardDetailsTemp(pokeArray[smallCardsIndex].abilities)}</div>
                <div class="small-card-footer ${getCardColor(pokeArray[smallCardsIndex])}-footer">${getSmallCardDetailsTemp(pokeArray[smallCardsIndex].types)}</div>
            </div> 
           `
}


function getCardColor(array){
    return array.types[0].name;
}


function getSmallCardFunctions (smallCardsIndex) {

    return `
        onclick="cardDetails(${smallCardsIndex})" 
        onmouseover="startAnimateSmallCardPokemon(${smallCardsIndex})" 
        onmouseout="stopAnimateSmallCardPokemon(${smallCardsIndex})"`
}


function getSmallCardDetailsTemp(array){
    let element = "";
    for (let detailIndex = 0; detailIndex < array.length; detailIndex++) {
        element += `<div>${array[detailIndex].name}</div>`;
    }
    return element;
}


function getLargePokemonCardTemp (cardId) {
    return  `
    <div id="large-card-content${cardId}" class="${getCardColor(allPokemons[cardId])}-card large-card">
        <div class="large-card-header large-content-hide">
            <div>#${allPokemons[cardId].id}</div>
            <div class="large-card-name">${allPokemons[cardId].name}</div>
        </div>
        <img id="large-card-bg-img${cardId}" class="large-card-bg-img" src="${allPokemons[cardId].artwork}">
        <div class="stats-container large-content-hide">
            ${getStatsLargeCard(cardId)}
        </div>

        <div class="empty"></div>
        ${getLargeCardPowers(cardId)}

        

        

            ${getLargeFooter(cardId)}    
    
        

    </div> 
    `
}

{/* <div id="large-card-details-container" class="large-card-detail-container">
        
        </div> */}


function getLargeCardPowers (cardId) {
    return `<div class="large-card-powers-container large-content-hide">
                
                    
                

                
            
                    ${getLargeCardAbsTemp(cardId)}
                <div class="flex-ctr-spbtw abs-container large-content-hide weight">
            <div class="abs-name">weight</div>
            <div>${allPokemons[cardId].weight}</div>
        </div>
             </div>
            `
}

function getLargeCardAbsTemp(cardId) {
        let element = '';
    for (let absIndex = 0; absIndex < allPokemons[cardId].abilities.length; absIndex++) {
            element += `<div class="flex-ctr-spbtw abs-container">
            <div class="abs-name">${allPokemons[cardId].abilities[absIndex].name}</div>
            <div class="abs-text">${allPokemons[cardId].abilities[absIndex].text}</div>
            </div>
            `
        
    }
    return element

}

function getLargeFooter (cardId) {
    return `
        <div class="large-card-footer ${getCardColor(allPokemons[cardId])}-footer" onmouseover="showLargePokemon(${cardId})" onmouseout="hideLargePokemon(${cardId})">
            <button class="switch-button ${getCardColor(allPokemons[cardId])}-card" 
            onclick="switchDown(${cardId})" onmouseover="stopBubbling(event)"><--</button>
            ${getLargeCardDetailsTemp(allPokemons[cardId])}
            <div id="pokemon-footer-name${cardId}" class="pokemon-footer-name"></div>
            <button class="switch-button ${getCardColor(allPokemons[cardId])}-card" 
            onclick="switchUp(${cardId})" onmouseover="stopBubbling(event)">--></button>
            
            <div class="left-footer-bubble" onmouseover="stopBubbling(event)"></div>
            <div class="right-footer-bubble" onmouseover="stopBubbling(event)"></div>

            </div>
        `
}


function getStatsLargeCard(cardId) {
    let element = '';
    for (let statsCardIndex = 0; statsCardIndex < allPokemons[cardId].stats.length; statsCardIndex++) {
        element += getStatsTemp(cardId, statsCardIndex);
    }
    return element;
}


function getStatsTemp(cardId,statsCardIndex) {
    return `<div class="large-details-wrapper">
                     <div>${allPokemons[cardId].stats[statsCardIndex].name}</div>
                     <div class="stats-border-empty stats-color-border-${allPokemons[cardId].stats[statsCardIndex].name}">
                         <div class="stats-border-filled-all stats-color-border-filled-${allPokemons[cardId].stats[statsCardIndex].name}"></div>
                     </div>
                     <div class="stats-value">${allPokemons[cardId].stats[statsCardIndex].value}</div>
                    </div>
            `
}


function getLargeCardDetailsTemp(array){
    let element = "";
    for (let detailIndex = 0; detailIndex < array.types.length; detailIndex++) {
        element += `<div class="large-content-hide">${array.types[detailIndex].name}</div>`;
    }
    return element;
}

// CHANGE TEMPLATE TO SEARCH , ANIMATION HOVER PROBLEM
function getSearchedSmallCardsTemp(smallCardsIndex, pokeAarray){
    
    return `
            <div id="search-small-card-content${smallCardsIndex}" 
            class="${getCardColor(pokeAarray[smallCardsIndex])}-card small-card" 
            ${getSearchedSmallCardFunctions(smallCardsIndex)} >
                <div class="small-card-header">
                    <div>#${pokeAarray[smallCardsIndex].id}</div>
                    <div class="small-card-name">${pokeAarray[smallCardsIndex].name}</div>
                </div>
                    <div class="small-card-img-container ${getCardColor(pokeAarray[smallCardsIndex])}-inner">
                        <img id="searched-small-card-pokemon-img${smallCardsIndex}" src=${pokeAarray[smallCardsIndex].pic}>
                        <div class="small-card-border ${getCardColor(pokeAarray[smallCardsIndex])}-border"></div>
                    </div>
                <div class="small-card-powers-container">
                    <div class="powers-header">Powers</div>
                    <div>${getSmallCardDetailsTemp(pokeAarray[smallCardsIndex].abilities)}</div>
                <div class="small-card-footer ${getCardColor(pokeAarray[smallCardsIndex])}-footer">${getSmallCardDetailsTemp(pokeAarray[smallCardsIndex].types)}</div>
            </div> 
           `
}

function getSearchedSmallCardFunctions (smallCardsIndex) {
// CHANGE ABOVE TO! -1 +1
    return `
        onclick="cardDetails(${smallCardsIndex})" 
        onmouseover="startAnimateSearchedSmallCardPokemon(${smallCardsIndex})" 
        onmouseout="stopAnimateSearchedSmallCardPokemon(${smallCardsIndex})"`
}