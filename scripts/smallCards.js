


async function renderSmallPokemonCards(){
    let contentRef = document.getElementById('all-cards');

    for (let smallCardsIndex = offset; smallCardsIndex < allPokemons.length; smallCardsIndex++) {
        contentRef.innerHTML += getSmallCardsTemp(smallCardsIndex);
    }
}


function startAnimateSmallCardPokemon (id) {
    let contentRef = document.getElementById(`small-card-pokemon-img${id}`);
    let data = allPokemons[id - 1].animation;
        if (data != '') {
        contentRef.src = allPokemons[id - 1].animation;
    }
}
     

function stopAnimateSmallCardPokemon (id) {
        let contentRef = document.getElementById(`small-card-pokemon-img${id}`);
        contentRef.src = allPokemons[id - 1].pic;
   }
   
