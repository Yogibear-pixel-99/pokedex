function renderSmallPokemonCards(array, id, userInput) {
    let contentRef = document.getElementById(id);
            contentRef.innerHTML = '';
            for (let pokemonIndex = 0; pokemonIndex < array.length; pokemonIndex++) {
                if (checkMaxSearchableCards(array, pokemonIndex)) { break };
                contentRef.innerHTML += getSmallPokemonCardTemp(array, pokemonIndex, userInput);
        }
}


function checkMaxSearchableCards (array, pokemonIndex) {
    if ((array[0].arrayname == "searchedPokemons" || array[0].arrayname == "sortedPokemons") && pokemonIndex > 9)
        return true;
}


function startAnimateSmallCardPokemon (array, id) {
    let contentRefNormal = document.getElementById(`small-card-pokemon-img${array[id].arrayname}${id}`);
    let contentRefAnimate = document.getElementById(`small-card-pokemon-img-animate${array[id].arrayname}${id}`);
    let data = array[id].animation;
        if (data != null) {
        contentRefNormal.classList.add('d-none');
        contentRefAnimate.classList.remove('d-none');
    }
}
     

function stopAnimateSmallCardPokemon (array, id) {
    let contentRefNormal = document.getElementById(`small-card-pokemon-img${array[id].arrayname}${id}`);
    let contentRefAnimate = document.getElementById(`small-card-pokemon-img-animate${array[id].arrayname}${id}`);
    let data = array[id].animation;
        if (data != null) {
        contentRefNormal.classList.remove('d-none');
        contentRefAnimate.classList.add('d-none');
    }
   }


function getCardColor(array){
    return array.types[0];
}


function getSmallCardAbilitiesTemp(array){
    let element = "";
        for (let detailIndex = 0; detailIndex < array.length; detailIndex++) {
            element += `<div>${array[detailIndex].name}</div>`;
    }
    return element;
}


function getSmallCardTypesTemp(array) {
    let element = "";
        for (let detailIndex = 0; detailIndex < array.length; detailIndex++) {
            element += `<div>${array[detailIndex]}</div>`;
    }
    return element;
}
