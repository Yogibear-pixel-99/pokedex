function getlargeCardOverlayContainerTemp () {
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
                                 ${getlargeCardOverlayStats(array, id)}
                         </div>
                     <div class="empty"></div>
                         ${getlargeCardOverlayPowersContainerTemp(array, id)}
                         ${getlargeCardOverlayFooter(array, id)}    
             </div>`
 }
 
 
 function getlargeCardOverlayStatsTemp(array, id, statsId) {
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


function getlargeCardOverlayPowersContainerTemp (array, id) {
    return `<div class="large-card-powers-container large-content-hide">
                ${getlargeCardOverlayPowersDetailsTemp(array, id)}
            </div>`
}


function getlargeCardOverlayFooter (array, id) {
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
                    ${getlargeCardOverlayTypesTemp(array[id])}
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