


let searchedPokemons = [];

function searchPokemons (array) {
    let userInput = document.getElementById('search-input').value.toLowerCase();
    let nameRadioButton = document.getElementById('radio-name');
    let typeRadioButton = document.getElementById('radio-type');


        if (nameRadioButton.checked) {
            searchedPokemons = array.filter(element => element.name.toLowerCase().includes(userInput));
    } else if (typeRadioButton.checked) {
        
        searchedPokemons = array.filter(element => element.types.includes(userInput));
    }
}

