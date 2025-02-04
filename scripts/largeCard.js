

function cardDetails(array, id) {
    
    getClickEffect(array, id);
    // disabelCardContent();
    setTimeout(() =>  disableCardContent (), 500);
    setTimeout(() =>  displayLargeCardContainer(), 500);
    getLargeCard(array, id);
    fillStatsBorderWithValue(array, id);
    // let test = document.getElementById('cards-wrapper');
    //     test.classList.add('blur-grey-effect');
    //     test.display.disable = true;
        // overflow-hidden am cards container
    // disableCardContent ();
    disableCardContent ();
    // no pointer effect auf die kleinen karten anwenden, eventuell die hauptfuktion danach anpassen.
} 



function getClickEffect(array, id) {
    let contentRef = document.getElementById(`small-card-content${array[id].arrayname}${id}`);
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
            hideContent[index].classList.add('d-opacity-10');  
    }  
};


function showFooterInfosOnHover() {
    let hideContent = document.getElementsByClassName('large-content-hide');
        for (let index = 0; index < hideContent.length; index++) {
            hideContent[index].classList.remove('d-opacity-10');  
    }  
};


function closeLargeCard(){
    hideCardContainer ();
    enableCardContent ();
}


function hideCardContainer () {
    let contentRef = document.getElementById('large-card-container');
        contentRef.style.display = 'none';
}


function fillStatsBorderWithValue (array, id) {
    let borderValueRef = document.getElementsByClassName('stats-border-filled-all');
        for (let valueIndex = 0; valueIndex < array[id].stats.length; valueIndex++) {
            let data = getSingleBorderWidth(array, id, valueIndex);
            borderValueRef[valueIndex].style.width = `${data}%`;
            checkIfPokemonIsOverpowerd(data, borderValueRef, valueIndex);
    }
}


function getSingleBorderWidth(array, id, valueIndex) {
    return array[id].stats[valueIndex].value / 1.5;
}


function checkIfPokemonIsOverpowerd (data, borderValueRef, valueIndex) {
    if ((data * 1.5) >= 150) {
        borderValueRef[valueIndex].innerText = "powerfull!";
        borderValueRef[valueIndex].classList.add('highlight-overpowerd', 'blink');
    }
}


function switchDown (array, id) {
    if (id == 0) {
        id = array.length - 1;
        getLargeCard(array, id);
        fillStatsBorderWithValue(array, id);
    } else {
        id--;
        getLargeCard(array, id);
        fillStatsBorderWithValue(array, id);
        
}
}


function switchUp (array, id) {
    if (id == array.length - 1) {
        id = 0;
        getLargeCard(array, id);
        fillStatsBorderWithValue(array, id);
    } else {
        id++;
        getLargeCard(array, id);
        fillStatsBorderWithValue(array, id);
    }
}

