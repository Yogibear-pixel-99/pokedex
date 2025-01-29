
let filtertPokemonsName = [];
let filtertForUser = [];
let searchedPokemons = [];



async function searchPokemons () {
    filtertPokemonsName = [];
    filtertForUser = [];
    searchedPokemons = [];
    let userInput = document.getElementById('search-input').value.toLowerCase();
    let nameId = document.getElementById('radio-name');
    let typeId = document.getElementById('radio-type');

        await getSearchUserInput (nameId, typeId, userInput);
        await getSearchedPokemons ();
        await renderSearchedPokemons();
        showContainer('searched-cards');
        // emptyAllCardsContainer();
}

// function emptyAllCardsContainer() {
//     let contentRef = document.getElementById('all-cards');
//         contentRef.innerHTML = '';
// }

async function getSearchUserInput (nameId, typeId, userInput) {
    if (nameId.checked) {
        for (let filterIndex = 0; filterIndex < allPokemons.length; filterIndex++) {
            filtertPokemonsName.push(allPokemons[filterIndex].name);
        }
        filtertForUser = filtertPokemonsName.filter((element => element.toLowerCase().includes(userInput)));
        } else if (typeId.checked) {
    for (let filterIndex = 0; filterIndex < allPokemons.length; filterIndex++) {
        let typeOne = '';
        let typeTwo = '';
            typeOne = allPokemons[filterIndex].types[0].name;
            if (allPokemons[filterIndex].types[1] != undefined) {
                typeTwo = allPokemons[filterIndex].types[1].name;
            }
            
            

            if (typeOne == userInput || (typeTwo != undefined) && (typeTwo == userInput)) {
                        filtertForUser.push(
                            allPokemons[filterIndex].name,
                        )
            // for (let typeIndex = 0; typeIndex < allPokemons[filterIndex].types.length; typeIndex++) {
            //         if 
            //     let element = allPokemons[filterIndex].types[typeIndex].name.toLowerCase();
            //         if (element == userInput) {
            //             filtertForUser.push(
            //                 allPokemons[filterIndex].name,
            //             )
               }     
        }
    }
}



async function getSearchedPokemons () {
        searchedPokemons = [];
    for (let searchedIndex = 0; searchedIndex < filtertForUser.length; searchedIndex++) {
        await getFiltertInfos(MAIN_URL, filtertForUser[searchedIndex], searchedPokemons); 
    }
}


async function renderSearchedPokemons () {
    let contentRef = document.getElementById('searched-cards');
        contentRef.innerHTML = '';
        searchedPokemons.length > 0
         ? await renderAllSmallPokemonCards(searchedPokemons, "searched-cards")
         : contentRef.innerHTML = nothingFoundTemp();
        
}

function nothingFoundTemp () {
    return `<div class="nothing-found">No pokemon found, try a different name or type in the exact type!</div>`
}

