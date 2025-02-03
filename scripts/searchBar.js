



function searchPokemons (array) {
    getUserSearchRequest(array);
    changeArrayNameInObjectForFunktionsId(searchedPokemons, 'arrayname', 'searchedPokemons');
    showContainer('searched-cards');
    emptyContainer('searched-cards');
    renderSmallPokemonCards(searchedPokemons, 'searched-cards');
    checkIfSearchIsEmpty(searchedPokemons);
}


function getUserSearchRequest (array) {
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


function checkIfSearchIsEmpty (array) {
    let contentRef = document.getElementById('searched-cards');
        if (array.length == 0) {
            contentRef.innerHTML = nothingFoundTextTemp ();
        }
}


function sortPokemons (array) {
    let userInput = document.getElementById('sort-stats-menu').value;
    getUserSortRequest (array, userInput);
    showContainer('searched-cards');
    emptyContainer('searched-cards');
    changeArrayNameInObjectForFunktionsId(sortedPokemons, 'arrayname', 'sortedPokemons');
    renderSmallPokemonCards(sortedPokemons, 'searched-cards', userInput);
    displayValueInSmallCard (sortedPokemons, userInput);
    checkIfSearchIsEmpty(sortedPokemons);
}


function getUserSortRequest (array, userInput) {
    let statsArrayPosition = getStatsPositionNumberInArray(userInput);
    let data = array.toSorted((a, b) => sortPokemonsThroughStats(a, b, statsArrayPosition));
        sortedPokemons = structuredClone(data);
}


function displayValueInSmallCard (array, userInput) {
    let statsArrayPosition = getStatsPositionNumberInArray(userInput);
    for (let valueIndex = 0; valueIndex < array.length; valueIndex++) {
        let contentRef = document.getElementById(`small-card-sorted-stat-wrapper${array[valueIndex].arrayname}${valueIndex}`);
            contentRef.innerHTML = getSmallCardSortedStatsTemp (array, valueIndex, statsArrayPosition);
    }
}


function sortPokemonsThroughStats (a, b, statsArrayPosition) {
        return (b.stats[statsArrayPosition].value - a.stats[statsArrayPosition].value);    
}


function getStatsPositionNumberInArray (userInput) {
     switch (userInput) {
        case 'hp' : return 0;
        case 'attack' : return 1;
        case 'defense' : return 2;
        case 'special-attack' : return 3;
        case 'special-defense' : return 4;
        case 'speed' : return 5;
        default:
            break;
    }
}