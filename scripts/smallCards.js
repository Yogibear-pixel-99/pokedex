


async function renderSmallPokemonCards(array, destination){
    let contentRef = document.getElementById(`${destination}`);
    for (let smallCardsIndex = renderPosition; smallCardsIndex < array.length; smallCardsIndex++) {
        contentRef.innerHTML += getSmallCardsTemp(smallCardsIndex, array);
    }
}
async function renderAllSmallPokemonCards(array, destination){
    let contentRef = document.getElementById(`${destination}`);
    for (let smallCardsIndex = 0; smallCardsIndex < array.length; smallCardsIndex++) {
        contentRef.innerHTML += getSmallCardsTemp(smallCardsIndex, array);
    }
}

function startAnimateSmallCardPokemon (id) {
    let contentRef = document.getElementById(`small-card-pokemon-img${id}`);
    let data = allPokemons[id - 1].animation;
        if (data != null) {
        contentRef.src = allPokemons[id - 1].animation;
    }
}
     

function stopAnimateSmallCardPokemon (id) {
        let contentRef = document.getElementById(`small-card-pokemon-img${id}`);
        contentRef.src = allPokemons[id - 1].pic;
   }
   
