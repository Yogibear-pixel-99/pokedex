

function renderSmallPokemonCards(array, id) {
    let contentRef = document.getElementById(id);
        contentRef.innerHTML = '';
        for (let allPokemonIndex = 0; allPokemonIndex < array.length; allPokemonIndex++) {
            contentRef.innerHTML += getSmallPokemonCardTemp(array, allPokemonIndex);
    }
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
   
