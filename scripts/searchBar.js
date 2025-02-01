


let searchedPokemons = [];

function searchPokemons (array) {
    getUserRequest(array);
    changeArrayNameInObjectForFunktionsId(searchedPokemons, 'arrayname', 'searchedPokemons');
    showContainer('searched-cards');
    // emptyContainer('searched-container');
    renderSmallPokemonCards(searchedPokemons, 'searched-cards');
    // renderSmallSearchedPokemonCards(array);
}


function getUserRequest (array) {
let userInput = document.getElementById('search-input').value.toLowerCase();
    let nameRadioButton = document.getElementById('radio-name');
    let typeRadioButton = document.getElementById('radio-type');


        if (nameRadioButton.checked) {
            searchedPokemons = array.filter(element => element.name.toLowerCase().includes(userInput));
    } else if (typeRadioButton.checked) {
        
        searchedPokemons = array.filter(element => element.types.includes(userInput));
        
    }
}

// ÄNDERN DES ARRAYNAMEN VON allPokemons to searchedPokemons


function changeArrayNameInObjectForFunktionsId (newArray, name, newArrayName) {
    for (let arrayNameIndex = 0; arrayNameIndex < newArray.length; arrayNameIndex++) {
        newArray[arrayNameIndex][name] = newArrayName;
    }
}