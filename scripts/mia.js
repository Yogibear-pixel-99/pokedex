

async function mia(){
    let contentRef = document.getElementById('allPokes');
        
    for (let index = 0; index < 1300; index++) {
        let pos = index + 1;
        let response = await fetch(MAIN_URL + "pokemon/" + pos );
        let data = await response.json();
        let mia = data.sprites.front_default;
        contentRef.innerHTML += miaPokeTemp(mia);
        
    }
   
}

// MIAS TEIL

function miaPokeTemp (data){
    return `<img class="mia-poke" src=${data}>`
}


