function getHeaderSearchTemp () {
    return `
    <div class="top-sticky"
        id="header-search-bar" 
        onclick="stopBubbling(event)">
        <div id="search-bar" class="search-bar">
            <div class="search-wrapper">
                <a href="#top">
                    <button 
                        id="search-button" 
                        class="search-button" 
                        onclick="searchPokemons(allPokemons)">
                        Search
                    </button>
                </a>
                <input 
                    id="search-input" 
                    class="search-input" 
                    type="text" minlength="3" 
                    maxlength="20" value="" 
                    placeholder="put in a name or a type">
                    <label 
                    class="name-search-type"
                    onclick="selectType()">
                        <img id="check-type-color" class="check-img" src="./assets/img/logo.png">
                        <input 
                            type="radio" 
                            name="sort-pokemon" 
                            value="type"
                            checked="checked" 
                            id="radio-type">
                    <span>Type</span>
                </label>
                <label 
                    class="name-search-type"
                    onclick="selectName()"> 
                        <img id="check-name-color" class="check-img greyscale" src="./assets/img/logo.png">
                        <input 
                            type="radio" 
                            name="sort-pokemon" 
                            value="name" 
                             
                            id="radio-name">
                    <span>Name</span>
                </label>
                
            </div>
        <div class="search-wrapper filter-wrapper">
                <select id="sort-stats-menu">
                    <option value="hp">HP</option>
                    <option value="attack">Attack</option>
                    <option value="defense">Defense</option>
                    <option value="special-attack">Special-Attack</option>
                    <option value="special-defense">Special-Defense</option>
                    <option value="speed">Speed</option>
                </select>
                    <div class="sort-button-wrapper">
                        <a href="#top">
                            <button 
                                class="search-button" 
                                onclick="sortPokemons(searchedPokemons)">
                                sort searched
                            </button>
                        </a>
                        <a href="#top">
                            <button 
                                class="search-button" 
                                onclick="sortPokemons(allPokemons)">
                                sort all
                            </button>
                        </a>
                    </div>
            </div>
        </div>
    </div>
    `
}


function getFiltertSearchTemp () {
    return `<div 
                id="searched-cards" 
                class="all-cards searched-cards">
                ${getStartTextTemp()}
            </div>`
}


function nothingFoundTextTemp() {
    return `<div
                class="nothing-found start-text">
                    Nothing found. You can search for a Pokemon by name 
                    or by type listet below.
                <button 
                    class="get-pokemon-button" 
                    onclick="hideContainer('searched-cards')">
                    Click to close
                </button>
            </div>`
}


function minimumOfThreeCharsNeededTemp() {
    return `<div
                class="nothing-found start-text">
                    You have to type in a Minimum of 
                    three charakters to search for pokemons!
                <button 
                    class="get-pokemon-button" 
                    onclick="hideContainer('searched-cards')">
                    Click to close
                </button>
            </div>`
};