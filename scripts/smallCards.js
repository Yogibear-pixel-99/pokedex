
async function renderSmallCards(){
    let contentRef = document.getElementById('all-cards');
    
    for (let smallCardsIndex = offset; smallCardsIndex < allPokemons.length; smallCardsIndex++) {
        contentRef.innerHTML += getSmallCardsTemp(smallCardsIndex);
        
    }
}

async function getPokemonCardsFromApi (URL, array){
    for (let loadIndex = offset; loadIndex < limit; loadIndex++) {
    let pokeId = loadIndex + 1;
        
    
    let response = await fetch(URL + "pokemon/" + pokeId);
    let data = await response.json();
                array.push(
                    {
                        id : data.id,
                        name : data.name,
                        types : getTypes(data),
                        pic : data.sprites.front_default,
                        abilities : getAbilities(data),
                        animation : data.sprites.other.showdown.front_default,
                    }
                )
    }
    console.log(allPokemons);
    
}

function getTypes(data){
    let element = [];
    for (let typesIndex = 0; typesIndex < data.types.length; typesIndex++) {
        element.push(data.types[typesIndex].type.name);
    }
    return element;
}

function getAbilities(data){
    let element = [];
    for (let typesIndex = 0; typesIndex < data.abilities.length; typesIndex++) {
        element.push(data.abilities[typesIndex].ability.name);
    }
    return element;
}

function animateSmallCardPokemon (id) {
    let contentRef = document.getElementById(`small-pokemon${id}`);
    let data = allPokemons[id - 1].animation;
        if (data != '') {
        contentRef.src = allPokemons[id - 1].animation;
}}
        
function stopAnimateSmallCardPokemon (id) {
        let contentRef = document.getElementById(`small-pokemon${id}`);
        contentRef.src = allPokemons[id - 1].pic;
   }
    // sprites.other.showdown.front_default