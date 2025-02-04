function getLargeCardContainerTemp () {
    return `<div 
                id="large-card-container" 
                class="large-card-container" 
                onclick="stopBubbling(event)" 
                style="display: none;">
            </div>`
}


function getLargePokemonCardTemp (array, id) {
    return  `<div 
                 id="large-card-content${id}" 
                 class="${getCardColor(array[id])}-card large-card">
                     <div class="large-card-header large-content-hide">
                         <div>#${array[id].id}</div>
                         <div id="large-card-name" class="large-card-name">${array[id].name}</div>
                     </div>
                     <img id="large-card-bg-img" class="large-card-bg-img" src="${array[id].artwork}">
                         <div 
                             id="stats-container" 
                             class="stats-container large-content-hide">
                                 ${getLargeCardStats(array, id)}
                         </div>
                     <div class="empty"></div>
                         ${getLargeCardPowersContainerTemp(array, id)}
                         ${getLargeCardFooter(array, id)}    
             </div>`
 }
 
 
 function getLargeCardStatsTemp(array, id, statsId) {
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
                    
            </div>`
}


function getLargeCardPowersDetailsTemp(array, id) {
        let element = '';
    for (let absIndex = 0; absIndex < array[id].abilities.length; absIndex++) {
            element += `<div class="flex-ctr-spbtw abs-container">
            <span class="abs-name">${array[id].abilities[absIndex].name}</span>
            <span class="abs-text">${array[id].abilities[absIndex].text}</span>
            </div>`        
        }
    return element
}


function getLargeCardFooter (array, id,) {
    return `<div 
                class="large-card-footer 
                ${getCardColor(array[id])}-footer" 
                onmouseover="showLargePokemonImageOnHover(${array[id].arrayname}, ${id})" 
                onmouseout="hideLargePokemonImageOnHover()">
                    <button 
                        class="switch-button 
                        ${getCardColor(array[id])}-card" 
                        onclick="switchDown(${array[id].arrayname}, ${id})" 
                        onmouseover="stopBubbling(event)">
                            <img class="arrow-button" src="./assets/icons/left-arrow-svgrepo-com.svg" alt="switch down">
                    </button>
                    ${getLargeCardTypesTemp(array[id])}
                    <div 
                        id="pokemon-footer-name" 
                        class="pokemon-footer-name">
                    </div>
                    <button 
                        class="switch-button 
                        ${getCardColor(array[id])}-card" 
                        onclick="switchUp(${array[id].arrayname}, ${id})" 
                        onmouseover="stopBubbling(event)">
                            <img class="arrow-button" src="./assets/icons/right-arrow-svgrepo-com.svg" alt="switch down">
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


function getLargeCardTypesTemp(array){
    let element = "";
    for (let detailIndex = 0; detailIndex < array.types.length; detailIndex++) {
        element += `<div class="large-content-hide">${array.types[detailIndex]}</div>`;
    }
    return element;
}