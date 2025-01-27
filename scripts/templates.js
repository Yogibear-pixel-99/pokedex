
// SMALL CARDS TEMPS
function getSmallCardsTemp(smallCardsIndex){
    
    return `
            <div id="small-card-content${smallCardsIndex}" class="${getCardColor(allPokemons[smallCardsIndex])}-card small-card" ${getSmallCardFunctions(smallCardsIndex)} >
                <div class="small-card-header">
                    <div>#${allPokemons[smallCardsIndex].id}</div>
                    <div class="small-card-name">${allPokemons[smallCardsIndex].name}</div>
                </div>
                    <div class="small-card-img-container ${getCardColor(allPokemons[smallCardsIndex])}-inner">
                        <img id="small-card-pokemon-img${smallCardsIndex + 1}" src=${allPokemons[smallCardsIndex].pic}>
                        <div class="small-card-border ${getCardColor(allPokemons[smallCardsIndex])}-border"></div>
                    </div>
                <div class="powers-container">
                    <div class="powers-header">Powers</div>
                    <div>${getSmallCardDetailsTemp(allPokemons[smallCardsIndex].abilities)}</div>
                <div class="small-card-footer ${getCardColor(allPokemons[smallCardsIndex])}-footer">${getSmallCardDetailsTemp(allPokemons[smallCardsIndex].types)}</div>
            </div> 
           `
}

function getCardColor(array){
    return array.types[0];
}

function getSmallCardFunctions (smallCardsIndex) {
    return `
        onclick="cardDetails(${smallCardsIndex})" 
        onmouseover="startAnimateSmallCardPokemon(${smallCardsIndex + 1})" 
        onmouseout="stopAnimateSmallCardPokemon(${smallCardsIndex + 1})"`
}


function getSmallCardDetailsTemp(array){
    let element = "";
    for (let detailIndex = 0; detailIndex < array.length; detailIndex++) {
        element += `<div>${array[detailIndex]}</div>`;
    }
    return element;
}

// LARGE CARD TEMP
// let largeCardOpen = false;




// function getSmallOrLargCardClass() {
//     return largeCardOpen ? 'large-card' : 'small-card';
// }




function getLargePokemonCardTemp (cardId) {
    return  `
    <div id="large-card-content${cardId}" class="${getCardColor(allPokemons[cardId])}-card large-card">
        <div class="large-card-header large-content-hide">
            <div>#${allPokemons[cardId].id}</div>
            <div class="large-card-name">${allPokemons[cardId].name}</div>
        </div>
        
        
        <img id="large-card-bg-img${cardId}" class="large-card-bg-img" src="${allPokemons[cardId].artwork}">
        

        <div class="large-card-powers-container large-content-hide">
            <div class="large-card-powers-header">Powers</div>
            <div>${getSmallCardDetailsTemp(allPokemons[cardId].abilities)}</div>
        </div>

        <div class="stats-container large-content-hide">
            ${getStatsLargeCard(cardId)}
        </div>
        <div class="weight-container large-content-hide">
            <div>weight</div>
            <div>${allPokemons[cardId].weight}</div>
        </div>

            ${getLargeFooter(cardId)}    
    
        <div id="large-card-details-container" class="large-card-detail-container">
            
        </div>

    </div> 
    `
}



function getLargeFooter (cardId) {
    return `
        <div class="large-card-footer ${getCardColor(allPokemons[cardId])}-footer" onmouseover="showLargePokemon(${cardId})" onmouseout="hideLargePokemon(${cardId})">
            <button class="switch-button ${getCardColor(allPokemons[cardId])}-card" 
            onclick="switchDown(${cardId})"><--</button>
            ${getLargeCardDetailsTemp(allPokemons[cardId].types)}
            <div id="pokemon-footer-name${cardId}" class="pokemon-footer-name"></div>
            <button class="switch-button ${getCardColor(allPokemons[cardId])}-card" 
            onclick="switchUp(${cardId})">--></button>
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
                     <div class="stats-border-empty">
                         <div class=stats-border-filled></div>
                     </div>
                     <div>${allPokemons[cardId].stats[statsCardIndex].value}</div>
                    </div>
            `
}


function getLargeCardDetailsTemp(array){
    let element = "";
    for (let detailIndex = 0; detailIndex < array.length; detailIndex++) {
        element += `<div class="large-content-hide">${array[detailIndex]}</div>`;
    }
    return element;
}