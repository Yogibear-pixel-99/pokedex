
let limit = 20
let offset = 0;
let MAIN_URL = 'https://pokeapi.co/api/v2/'
let OFFSET_URL = `pokemon?limit=${limit}&offset=${offset}.`


let titlePokemonPic = '';
let onTitle = true;

function init(){
    onTitle ? getTitleInfo() : getCardsInfo();
    setInterval(enterButton, 1000);
    // onTitle ? setInterval(getTitleInfo, 3500) : getCardsInfo();
    
}

async function getTitleInfo (){
    await getTitlePokemon();
    setTitlePokemon();
}

async function getTitlePokemon(){
    let positionNr = Math.floor(Math.random() * 200) + 1;
    // console.log(positionNr);

    let response = await fetch (MAIN_URL + `pokemon/${positionNr}`);
    // console.log(response);
    let data = await  response.json();
    // console.log(data);
    titlePokemonPic = data.sprites.front_default;
    // console.log(titlePokemonPic);
}

function setTitlePokemon(){
    let contentRef = document.getElementById('title-pokemon');
    contentRef.src = titlePokemonPic;
}

function getCardsInfo(){
    console.log(onTitle);
}

function enterButton(){
    let enter = document.getElementById('enter');
    enter.style.width = '200px';
}
// https://pokeapi.co/api/v2/pokemon  ---   all
// https://pokeapi.co/api/v2/pokemon/145  ---   one pokemon
// https://pokeapi.co/api/v2/pokemon-form/145  ---   one pokemon
// https://pokeapi.co/api/v2/pokemon-form/145  ---   one pokemon



// turn Title Pokemon Interval on


let pokemonsNameAnd_URL = [];
let pokemonDetails = [];


async function getPokemonCardsFromApi (mainURL, details, destinationArray, limitlength) {
    await getServerResponse(mainURL, details, destinationArray, limitlength);
    
}


async function getServerResponse (mainURL, details, destinationArray, limitlength){
    
    let response = await fetch(mainURL + details);
    console.log(response);
    let data = await response.json();
    console.log(data);
    
    await savePokemonsInArray(destinationArray, data, limitlength);
    // await  getPokemonDetails();



    // limit += 20;
    // offset += 20;

   console.log(limit);
   console.log(offset);
   console.log(pokemonsNameAnd_URL);
   console.log(pokemonDetails);

}

async function savePokemonsInArray(destinationArray, response, limitlength){
switch (destinationArray) {
            case pokemonsNameAnd_URL:
            for (let pokemonIndex = offset; pokemonIndex < limitlength; pokemonIndex++) {
            pokemonsNameAnd_URL.push(
                {
            name : response.results[pokemonIndex].name,
            URL : response.results[pokemonIndex].url
                }
            )
            }
            break;

            case pokemonDetails: 
            pokemonDetails.push(
                {
                id : response.id
            }
        )

        }
    }

    async function getPokemonDetails () {
        for (let detailIndex = offset; detailIndex < pokemonsNameAnd_URL.length; detailIndex++) {
            const URLPosition = detailIndex + 1;
            const URL = `https://pokeapi.co/api/v2/pokemon/${[URLPosition]}/`;    
            await getServerResponse(URL, "", pokemonDetails, limit);        
        }
    }
