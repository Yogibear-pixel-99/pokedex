
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
                <div class="small-card-powers-container">
                    <div class="powers-header">Powers</div>
                    <div>${getSmallCardDetailsTemp(allPokemons[smallCardsIndex].abilities)}</div>
                <div class="small-card-footer ${getCardColor(allPokemons[smallCardsIndex])}-footer">${getSmallCardDetailsTemp(allPokemons[smallCardsIndex].types)}</div>
            </div> 
           `
}


function getCardColor(array){
    return array.types[0].name;
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