



function searchPokemons (array) {
    getUserRequest(array);
    changeArrayNameInObjectForFunktionsId(searchedPokemons, 'arrayname', 'searchedPokemons');
    showContainer('searched-cards');
    emptyContainer('searched-cards');
    renderSmallPokemonCards(searchedPokemons, 'searched-cards');
}


function getUserRequest (array) {
let userInput = document.getElementById('search-input').value.toLowerCase();
let data = [];
    let nameRadioButton = document.getElementById('radio-name');
    let typeRadioButton = document.getElementById('radio-type');
        if (nameRadioButton.checked) {
            data = array.filter(element => element.name.toLowerCase().includes(userInput));
            searchedPokemons = structuredClone(data);
    } else if (typeRadioButton.checked) {
                data = array.filter((element) => filterTypes(element, userInput));
            searchedPokemons = structuredClone(data);
    }
}


function filterTypes (element, userInput) {
    for (let typesIndex = 0; typesIndex < element.types.length; typesIndex++) {
        if (element.types[typesIndex].includes(userInput)) {
            return true;
        }
    }
}


function changeArrayNameInObjectForFunktionsId (newArray, name, newArrayName) {
    for (let arrayNameIndex = 0; arrayNameIndex < newArray.length; arrayNameIndex++) {
        newArray[arrayNameIndex][name] = newArrayName;
    }
}


function selectName () {
    let nameRef = document.getElementById('check-name-color');
    let typeRef = document.getElementById('check-type-color');
    nameRef.classList.remove('greyscale');
    typeRef.classList.add('greyscale');
}


function selectType () {
    let nameRef = document.getElementById('check-name-color');
    let typeRef = document.getElementById('check-type-color');
    nameRef.classList.add('greyscale');
    typeRef.classList.remove('greyscale');
}


function sortPokemons (array) {
    let statsType = document.getElementById('sort-stats-menu').value;
    console.log(statsType);
}