function getHeaderSearchTemp () {
    return `
    <div class="top-sticky"
        id="header-search-bar" 
        >
        <div id="search-bar" class="search-bar">
            <div class="search-wrapper">
                <div class="search-button-input-wrapper">
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
                    placeholder="search 10 cards">
                </div>
                    <div class="select-type-name-wrapper">
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
            </div>
        <div class="search-wrapper filter-wrapper">
                <select id="sort-stats-menu"class="sort-stats-menu search-button">
                    <option value="hp">Health</option>
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
                        <button 
                                class="search-button" 
                                onclick="closeSearchedShowAllPokemons()">
                                close
                            </button>
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
                    class="get-pokemon-button close-button" 
                    onclick="hideContainer('searched-cards')">
                    Click to close
                </button>
            </div>`
}


function minimumOfThreeCharsNeededTemp() {
    return `<div
                class="nothing-found start-text">
                    You have to type in a minimum of 
                    three characters to search for Pokémon!
                <button 
                    class="get-pokemon-button close-button" 
                    onclick="hideContainer('searched-cards')">
                    Click to close
                </button>
            </div>`
};