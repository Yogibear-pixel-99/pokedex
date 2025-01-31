











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







