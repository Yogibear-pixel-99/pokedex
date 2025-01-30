
function closeLargeCard(){
    let contentRef = document.getElementById('large-card-container');
        contentRef.style.display = 'none';
}













function switchDown (cardId) {
    if (cardId == 0) {
        cardId = allPokemons.length - 1;
        getLargeCard(cardId);
        fillStatsBorderWithValue(cardId);
    } else {
        cardId--;
        getLargeCard(cardId);
        fillStatsBorderWithValue(cardId);
        
}
}


function switchUp (cardId) {
    if (cardId == allPokemons.length - 1) {
        cardId = 0;
        getLargeCard(cardId);
        fillStatsBorderWithValue(cardId);
    } else {
        cardId++;
        getLargeCard(cardId);
        fillStatsBorderWithValue(cardId);
    }
}


function showLargePokemon(cardId) {
    let footerRef = document.getElementById(`pokemon-footer-name${cardId}`);
        footerRef.innerText = '';
        footerRef.innerText = `${allPokemons[cardId].name}`;
    let contentRef = document.getElementById(`large-card-bg-img${cardId}`);
        contentRef.classList.add('large-card-bg-active');
    let hide = document.getElementsByClassName('large-content-hide')
    for (let index = 0; index < hide.length; index++) {
        hide[index].classList.add('d-opacity');  
    }
   
}

function hideLargePokemon(cardId) {
    let footerRef = document.getElementById(`pokemon-footer-name${cardId}`);
        footerRef.innerText = '';
    let contentRef = document.getElementById(`large-card-bg-img${cardId}`);
        contentRef.classList.remove('large-card-bg-active');
        let hide = document.getElementsByClassName('large-content-hide')
    for (let index = 0; index < hide.length; index++) {
        hide[index].classList.remove('d-opacity');  
    }
}


function fillStatsBorderWithValue (cardId) {
    // let statsValueRef = document.getElementsByClassName('stats-value');
    let borderValueRef = document.getElementsByClassName('stats-border-filled-all');
    console.log(borderValueRef);
    for (let valueIndex = 0; valueIndex < allPokemons[cardId].stats.length; valueIndex++) {
        borderValueRef[valueIndex].style.width = `${allPokemons[cardId].stats[valueIndex].value}%`;
        
    }
}