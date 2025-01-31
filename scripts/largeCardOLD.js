











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







function fillStatsBorderWithValue (cardId) {
    // let statsValueRef = document.getElementsByClassName('stats-value');
    let borderValueRef = document.getElementsByClassName('stats-border-filled-all');
    console.log(borderValueRef);
    for (let valueIndex = 0; valueIndex < allPokemons[cardId].stats.length; valueIndex++) {
        borderValueRef[valueIndex].style.width = `${allPokemons[cardId].stats[valueIndex].value}%`;
        
    }
}