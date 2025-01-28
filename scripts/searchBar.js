

let filtertPokemonsName = [];
// let filtertPokemonsId = [];

let filtertForUser = [];

function searchPokemons () {
    filtertPokemonsName = [];
    filtertForUser = [];

    let userInput = document.getElementById('search-input').value.toLowerCase();
    let nameId = document.getElementById('radio-name');
    let typeId = document.getElementById('radio-type');
    // console.log(input);
    
    
        
        if (nameId.checked) {
            for (let filterIndex = 0; filterIndex < allPokemons.length; filterIndex++) {
                filtertPokemonsName.push(allPokemons[filterIndex].name);
            }
            filtertForUser = filtertPokemonsName.filter((element => element.toLowerCase().includes(userInput)));


         
    } else if (typeId.checked) {
        for (let filterIndex = 0; filterIndex < allPokemons.length; filterIndex++) {
                for (let typeIndex = 0; typeIndex < allPokemons[filterIndex].types.length; typeIndex++) {
                    let element = allPokemons[filterIndex].types[typeIndex].name.toLowerCase();
                        if (element == userInput) {
                            filtertForUser.push(
                                allPokemons[filterIndex].name,
                            )
                        }
        // for (let filterIndex = 0; filterIndex < allPokemons.length; filterIndex++) {
        //         for (let typeIndex = 0; typeIndex < allPokemons[filterIndex].types.length; typeIndex++) {
        //             let element = allPokemons[filterIndex].types[typeIndex];
        //                 filtertForUser += element.filter((data => data.toLowerCase().includes(userInput)));        
            }
        }
    }
    // console.log(input);
    console.log(filtertPokemonsName);
   
    
}