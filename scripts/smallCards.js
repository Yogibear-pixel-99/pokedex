
let pokemonImgSmallCardStatic = '';

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

async function animateSmallCardPokemon (id) {
    let contentRef = document.getElementById(`small-pokemon${id}`);
    pokemonImgSmallCardStatic = contentRef.innerHTML;
    try {
        let response = await fetch(MAIN_URL + "pokemon/" + id);
        let data = await response.json();
        console.log(data);
        contentRef.src = data.sprites.other.showdown.front_default;
    } catch (error) {
        console.error('Fetch error', error);
    }
    }
        
   
    // sprites.other.showdown.front_default