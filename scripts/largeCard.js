

function closeLargeCard(){
    
    let contentRef = document.getElementById('large-card-container');
        contentRef.style.display = 'none';
}

function stopBubbling(event) {
    event.stopPropagation()
}

function cardDetails(cardId) {

    getClickEffect(cardId);
    setTimeout(() =>  displayLargeCardContainer(), 500);
    getLargeCard(cardId);
} 


function getClickEffect(cardId) {
    let contentRef = document.getElementById(`small-card-content${cardId}`);
    contentRef.classList.add('click-animation');
    setTimeout(() => {contentRef.classList.remove('click-animation');
            }, 400);
}


function displayLargeCardContainer(){
    let contentRef = document.getElementById('large-card-container');
        contentRef.style.display = 'block';
}


function getLargeCard(cardId){
    let ref = document.getElementById('large-card-container');
        ref.innerHTML = '';
        ref.innerHTML = getLargePokemonCardTemp(cardId);
    // let cardRef = document.getElementById(`large-card-content${cardId}`);
    //     cardRef.style.backgroundImage = `url(${allPokemons[cardId].artwork})`
}


function switchDown (cardId) {
    if (cardId == 0) {
        cardId = allPokemons.length;
        getLargeCard(cardId);
    } else {
        getLargeCard(cardId - 1);
        
}
}


function switchUp (cardId) {
    if (cardId == allPokemons.length) {
        cardId = 0;
        getLargeCard(cardId);
    } else {
        getLargeCard(cardId + 1);
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
        hide[index].classList.add('d_none');  
    }
   
}

function hideLargePokemon(cardId) {
    let footerRef = document.getElementById(`pokemon-footer-name${cardId}`);
        footerRef.innerText = '';
    let contentRef = document.getElementById(`large-card-bg-img${cardId}`);
        contentRef.classList.remove('large-card-bg-active');
        let hide = document.getElementsByClassName('large-content-hide')
    for (let index = 0; index < hide.length; index++) {
        hide[index].classList.remove('d_none');  
}}