


// function getCardsContentTemp() {
//     return`<section id="card-container" class="card-container">
               
//                     ${getSearchTemp()}
                    
//                     <div class="cards-wrapper">
//                         <div id="placeholder-wrapper" class="placeholder-wrapper" onclick="addPokemonToSmallCardsArray()">
//                         </div>
//                         <div id="searched-cards" class="all-cards searched-cards">${getStartTextTemp()}</div>
//                         <div id="all-cards" class="all-cards">
                            
//                         </div>
//                         <div id="loading-spinner-container${limit}" class="loading-spinner-container"></div>
//                     </div>
//                     <div class="bottom-sticky" onclick="stopBubbling(event)">
//                     <div class="button-wrapper">
//                         <button class="get-pokemon-button" onclick="getPokemons()">Get 20 Pokemons</button>
//                         <button class="get-pokemon-button" onclick="getRandomPokemons()">Get 20 Random Pokemons</button>
//                     </div>
//                     </div>
//         </section>
//         <section id="large-card-container" class="large-card-container" onclick="stopBubbling(event)" style="display: none;">
//         `
// }










// SMALL CARDS TEMPS







{/* <div id="large-card-details-container" class="large-card-detail-container">
        
        </div> */}









// CHANGE TEMPLATE TO SEARCH , ANIMATION HOVER PROBLEM
function getSearchedSmallCardsTemp(smallCardsIndex, pokeAarray){
    
    return `
            <div id="search-small-card-content${smallCardsIndex}" 
            class="${getCardColor(pokeAarray[smallCardsIndex])}-card small-card" 
            ${getSearchedSmallCardFunctions(smallCardsIndex, pokeArray)} >
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

// FUNKTIONEN DIREKT EINBINDEN!!!! Somit kann man die funktionen reduzieren!
// Bei den ids muss man sich nicht nur auf den index beschränken!