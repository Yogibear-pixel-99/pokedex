


function getSmallCardsTemp(smallCardsIndex){
    
    return  `
            <div class="${getCardColor(allPokemons[smallCardsIndex])}-card small-card">
                <div class="small-card-header">
                    <div>#${allPokemons[smallCardsIndex].id}</div>
                    <div>${allPokemons[smallCardsIndex].name}</div>
                </div>

                
                    <div class="small-card-img-container ${getCardColor(allPokemons[smallCardsIndex])}-inner">
                        <img class="poke-img-small-card" src=${allPokemons[smallCardsIndex].pic}>
                        <div class="border ${getCardColor(allPokemons[smallCardsIndex])}-border"></div>
                    </div>
                    
                <div class="powers-container">
                    <div class="powers-header">Powers</div>
                    <div>${getDetailsTemp(allPokemons[smallCardsIndex].abilities)}</div>
                
                <div class="small-card-footer ${getCardColor(allPokemons[smallCardsIndex])}-footer">${getDetailsTemp(allPokemons[smallCardsIndex].types)}</div>
            </div> 
                    

                
            
            `
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





