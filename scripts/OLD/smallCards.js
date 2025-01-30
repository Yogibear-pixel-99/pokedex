

// change to render 20 cards or smt
async function renderSmallPokemonCards(array, destination){
    let contentRef = document.getElementById(`${destination}`);
    for (let smallCardsIndex = renderPosition; smallCardsIndex < array.length; smallCardsIndex++) {
        contentRef.innerHTML += getSmallCardsTemp(smallCardsIndex, array);
    }
}

async function renderAllSmallPokemonCards(array, destination){
    let contentRef = document.getElementById(`${destination}`);
    for (let smallCardsIndex = 0; smallCardsIndex < array.length; smallCardsIndex++) {
        if (array == allPokemons) {
            contentRef.innerHTML += getSmallCardsTemp(smallCardsIndex, array);
        } else if (array == searchedPokemons) {
            contentRef.innerHTML += getSearchedSmallCardsTemp(smallCardsIndex, array);
        }
    }
}

// async function renderSearchedSmallPokemonCards(array, destination){
//     let contentRef = document.getElementById(`${destination}`);
//     for (let smallCardsIndex = 0; smallCardsIndex < array.length; smallCardsIndex++) {
        
//     }
// }

function startAnimateSmallCardPokemon (id) {
    let contentRef = document.getElementById(`small-card-pokemon-img${id}`);
    let data = allPokemons[id].animation;
        if (data != null) {
        contentRef.src = allPokemons[id].animation;
    }
}
     

function stopAnimateSmallCardPokemon (id) {
        let contentRef = document.getElementById(`small-card-pokemon-img${id}`);
        contentRef.src = allPokemons[id].pic;
   }
   



function startAnimateSearchedSmallCardPokemon (id) {
    let contentRef = document.getElementById(`searched-small-card-pokemon-img${id}`);
    let data = searchedPokemons[id].animation;
        if (data != null) {
        contentRef.src = searchedPokemons[id].animation;
    }
}
     

function stopAnimateSearchedSmallCardPokemon (id) {
        let contentRef = document.getElementById(`searched-small-card-pokemon-img${id}`);
        contentRef.src = searchedPokemons[id].pic;
   }
   
