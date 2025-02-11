function getSmallPokemonCardTemp(array, index, userInput){
    return `<div 
                id="small-card-content${array[index].arrayname}${index}" 
                class="${getCardColor(array[index])}-card 
                small-card" 
                ${getSmallCardFunctions(array, index)} >
                <div class="small-card-header">
                    <div>#${array[index].id}</div>
                    <div class="small-card-name">${array[index].name}</div>
                </div>
                    <div class="small-card-img-container ${getCardColor(array[index])}-inner">
                        <img class="" id="small-card-pokemon-img${array[index].arrayname}${index}" src=${array[index].pic}>
                        <img class="d-none" id="small-card-pokemon-img-animate${array[index].arrayname}${index}" src=${array[index].animation}>
                        <div class="small-card-border ${getCardColor(array[index])}-border"></div>
                    </div>
                <div class="small-card-powers-container">
                    <div class="powers-header">Powers</div>
                    <div>${getSmallCardAbilitiesTemp(array[index].abilities)}</div>
                <div 
                    class="small-card-footer 
                    ${getCardColor(array[index])}-footer">
                    ${getSmallCardTypesTemp(array[index].types)}
                </div>
                <div id="small-card-sorted-stat-wrapper${array[index].arrayname}${index}" class="small-card-stat-wrapper stats-color-border-empty stats-border-${userInput} stats-color-border-${userInput}"></div>
            </div>`
}


function getSmallCardFunctions (array, index) {
    return `onclick="cardDetails(${array[index].arrayname}, ${index})" 
            onmouseover="startAnimateSmallCardPokemon(${array[index].arrayname}, ${index})" 
            onmouseout="stopAnimateSmallCardPokemon(${array[index].arrayname}, ${index})"`
}


function getSmallCardSortedStatsTemp (array, id, statsArrayPosition) {
    return `<div>${array[id].stats[statsArrayPosition].name}</div>
                     <div 
                        class="small-stats-border-empty 
                        small-stats-color-border-${array[id].stats[statsArrayPosition].name}">
                            <div 
                                class="small-stats-border-filled-all 
                                small-stats-color-border-filled-${array[id].stats[statsArrayPosition].name}">
                            </div>
                     </div>
                    <div 
                        class="small-stats-value">
                        ${array[id].stats[statsArrayPosition].value}
                    </div>`
}