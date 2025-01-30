

function renderSmallPokemonCards(array, id) {
    let contentRef = document.getElementById(id);
        contentRef.innerHTML = '';
        for (let allPokemonIndex = 0; allPokemonIndex < array.length; allPokemonIndex++) {
            contentRef.innerHTML += getSmallPokemonCardTemp(array, allPokemonIndex);
    }
}


function startAnimateSmallCardPokemon (id) {
    let contentRef = document.getElementById(`small-card-pokemon-img${id}`);
    let data = allPokemons[id].animation;
        if (data != null) {
        contentRef.src = data;
    }
}
     

function stopAnimateSmallCardPokemon (id) {
        let contentRef = document.getElementById(`small-card-pokemon-img${id}`);
        contentRef.src = allPokemons[id].pic;
   }
   
