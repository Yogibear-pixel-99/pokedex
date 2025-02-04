function getTitleContentTemp() {
    return `<section 
                id="title-container" 
                class="title-container ">
                    <img 
                        class="pokemon-logo" 
                        src="/assets/img/International_Pokémon_logo.svg.png" 
                        alt="pokemon header">
                    <div>
                        <img 
                            class="by" 
                            src="/assets/img/by.png">
                        <img 
                            class="name" 
                            src="/assets/img/name.png" 
                            alt="Joachim Pürcher">
                    </div>
                    <div 
                        class="title-bottom">
                            <img 
                                id="title-pokemon" 
                                class="pokemon-title-img" 
                                src="">
                            <div class="enter-wrapper" 
                                onclick="stopBubbling(event)">
                                <img 
                                    onclick="enterCardsContent()" 
                                    id="enter" class="enter" 
                                    src="/assets/img/enterlarge.png">
                            </div>
                            <img 
                                class="pokeball-title" 
                                src="/assets/img/pokebol-2898038_1280.png" 
                                alt="pokeball">
                    </div>
            </section>`
}


function getCardsContentTemp() {
    return  `${getHeaderSearchTemp()}
            <div class="cards-wrapper" id="cards-wrapper">
                ${getRandomPokemonTemp()}
                ${getFiltertSearchTemp()}
                ${getAllCardsTemp()}
                
            </div>     
                ${getFooterButtonTemp()}   
                ${getLargeCardContainerTemp()}
                ${getLoadingSpinnerTemp()}`
}


function getRandomPokemonTemp () {
    return `<div 
                id="random-pokemon-wrapper" 
                class="random-pokemon-wrapper" 
                onclick="addPokemonToAllPokemonArray()">
            </div>`
}


function getAllCardsTemp () {
    return `<div 
                id="all-cards" 
                class="all-cards">
            </div>`
}


function getLoadingSpinnerTemp () {
    return `<div 
                id="loading-spinner-container"
                class="loading-spinner-container">
            </div>`
}


function getFooterButtonTemp () {
    return `<div 
            id="get-pokemons-button-bar"
            class="bottom-sticky" 
            onclick="stopBubbling(event)">
                <div class="button-wrapper">
                    <button 
                        class="get-pokemon-button" 
                        onclick="get20Pokemons()">
                        Get 20 Pokemons
                    </button>
                    <button 
                        class="get-pokemon-button" 
                        onclick="get10RandomPokemons()">
                        Get 10 Random Pokemons
                    </button>
                </div>
            </div>`
}


function getStartTextTemp() {
    return `<div
                class="nothing-found start-text">
                    Welcome to the world off pokemon-cards. 
                    Feel free to get 20 cards in a row or 20 cards by random. 
                    You can search the cards listet below by type or name.
                    You can sort the searched pokemons by diffrent stats. Highest first. 
                    Click on a small card to expand and hover over the cardfooter, 
                    to see the pokemon art design.
                <button 
                    class="get-pokemon-button" 
                    onclick="hideContainer('searched-cards')">
                    Click to close
                </button>
            </div>`
}


function getRandomPokemonAddToCardsTemp (array) {
    return `<div class="random-pokemon-id">#${array[0].id}</div>
            <img id="random-pokemon-img" class="random-pokemon-img" src="${array[0].artwork}" alt="random-pokemon">
            <div class="random-pokemon-name">${array[0].name}</div>`
}
