


function getSmallCardsTemp(smallCardsIndex){
    
    return  `
            <div class="small-card">
                <div class="small-card-header-container">
                    <div>#${allPokemons[smallCardsIndex].id}</div>
                    <div>${allPokemons[smallCardsIndex].name}</div>
                </div>

                <div>
                    <div class="small-card-img-container">
                        <img class="poke-img-small-card" src=${allPokemons[smallCardsIndex].pic}>
                        <div class="border"></div>
                    </div>
                    
                    <div class="small-card-lower-container">${getAbilitiesTemp(0, allPokemons[smallCardsIndex].abilities)}</div>
                </div>

                
            </div>
            `
}

function getAbilitiesTemp(number, array){
    let element = "";
    for (let infoIndex = 0; infoIndex < array[number].length; infoIndex++) {
        element += `<div>${array[number][infoIndex]}</div>`;
        
    }
    return element;
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





