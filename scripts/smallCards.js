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
    let contentRef = document.getElementById(`small-card-pokemon-img${array[id].arrayname}${id}`);
    let data = array[id].animation;
        if (data != null) {
        contentRef.src = data;
    }
}
     

function stopAnimateSmallCardPokemon (array, id) {
        let contentRef = document.getElementById(`small-card-pokemon-img${array[id].arrayname}${id}`);
        contentRef.src = array[id].pic;
   }
   
