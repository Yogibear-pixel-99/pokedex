


function getSmallCardsTemp(smallCardsIndex){
    
    return  `
            <div class="small-card">
                <div>
                    <div>${allPokemons[smallCardsIndex].name}</div>
                    <div></div>
                </div>

                <div>
                    <div class="poke-img-container-small">
                        <img class="poke-img-small-card" src=${allPokemons[smallCardsIndex].pic}>
                    </div>
                    <div class="border"></div>
                    <div>lowerContainer</div>
                </div>

                <div>schwäche</div>
            </div>
            `
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





