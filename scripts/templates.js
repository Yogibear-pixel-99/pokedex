


function getSmallCardsTemp(smallCardsIndex){
    
    return  `
            <div id="small-card-wrapper${smallCardsIndex}">
            <div id="card-content${smallCardsIndex}" class="${getCardColor(allPokemons[smallCardsIndex])}-card small-card" ${getSmallCardOnclickFunctions(smallCardsIndex)} >
                <div class="small-card-header">
                    <div>#${allPokemons[smallCardsIndex].id}</div>
                    <div class="small-card-name">${allPokemons[smallCardsIndex].name}</div>
                </div>

                
                    <div class="small-card-img-container ${getCardColor(allPokemons[smallCardsIndex])}-inner">
                        <img id="small-pokemon${smallCardsIndex + 1}" src=${allPokemons[smallCardsIndex].pic}>
                        <div class="border ${getCardColor(allPokemons[smallCardsIndex])}-border"></div>
                    </div>
                    
                <div class="powers-container">
                    <div class="powers-header">Powers</div>
                    <div>${getDetailsTemp(allPokemons[smallCardsIndex].abilities)}</div>
                
                <div class="small-card-footer ${getCardColor(allPokemons[smallCardsIndex])}-footer">${getDetailsTemp(allPokemons[smallCardsIndex].types)}</div>
            </div> 
           </div>

                
            
            `
}

function getSmallCardOnclickFunctions (smallCardsIndex) {
    return `
        onclick="cardDetails(${smallCardsIndex})" 
        onmouseover="animateSmallCardPokemon(${smallCardsIndex + 1})" 
        onmouseout="stopAnimateSmallCardPokemon(${smallCardsIndex + 1})"`
}

function getDetailsTemp(array){
    let element = "";
    for (let detailIndex = 0; detailIndex < array.length; detailIndex++) {
        element += `<div>${array[detailIndex]}</div>`;
    }
    return element;
}

function getCardColor(array){
    return array.types[0];
}
// function getSmallCardsTemp(smallCardsIndex){
    
//     return  `
//             <div>
//                 <div>
//                     <div>${allPokemons[smallCardsIndex].name}</div>
//                     <div></div>
//                 </div>

//                 <div>
//                     <img src=${allPokemons[smallCardsIndex].name}>
//                     <div class="border">border</div>
//                     <div>lowerContainer</div>
//                 </div>

//                 <div>schwäche</div>
//             </div>
//             `
// }





