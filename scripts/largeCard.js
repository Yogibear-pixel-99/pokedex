

function cardDetails(array, id) {

    getClickEffect(id);
    setTimeout(() =>  displayLargeCardContainer(), 500);
    getLargeCard(array, id);
    // fillStatsBorderWithValue(cardId);
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


function getLargeCard(array, id){
    let ref = document.getElementById('large-card-container');
        ref.innerHTML = getLargePokemonCardTemp(array, id);
}


function getLargeCardStats(array, id) {
    let element = '';
    for (let statsCardIndex = 0; statsCardIndex < array[id].stats.length; statsCardIndex++) {
        element += getLargeCardStatsTemp(array, id, statsCardIndex);
    }
    return element;
}


function showLargePokemonImageOnHover(array, id) {
    showFooterPokemonNameOnHover(array, id);
    showFooterImageOnHover();
    hideFooterInfosOnHover();
}


function hideLargePokemonImageOnHover() {
    hideFooterPokemonNameOnHover();
    hideFooterImageOnHover();
    showFooterInfosOnHover();
}


function showFooterPokemonNameOnHover(array, id) {
    let footerRef = document.getElementById('pokemon-footer-name');
        footerRef.innerText = `${array[id].name}`;
};


function hideFooterPokemonNameOnHover() {
    let footerRef = document.getElementById(`pokemon-footer-name`);
        footerRef.innerText = '';
};


function showFooterImageOnHover() {
    let imgRef = document.getElementById('large-card-bg-img');
        imgRef.classList.add('large-card-show-image');
};


function hideFooterImageOnHover() {
    let imgRef = document.getElementById('large-card-bg-img');
        imgRef.classList.remove('large-card-show-image');
};


function hideFooterInfosOnHover() {
    let hideContent = document.getElementsByClassName('large-content-hide');
        for (let index = 0; index < hideContent.length; index++) {
            hideContent[index].classList.add('d-opacity');  
    }  
};


function showFooterInfosOnHover() {
    let hideContent = document.getElementsByClassName('large-content-hide');
        for (let index = 0; index < hideContent.length; index++) {
            hideContent[index].classList.remove('d-opacity');  
    }  
};


function closeLargeCard(){
    let contentRef = document.getElementById('large-card-container');
        // contentRef.innerHTML = '';
        contentRef.style.display = 'none';
}




