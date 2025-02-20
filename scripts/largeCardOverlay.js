function cardDetails(array, id) {
    getClickEffect(array, id);
    setTimeout(() =>  disableCardContent (), 500);
    setTimeout(() =>  displaylargeCardOverlayContainer(), 500);
    getlargeCardOverlay(array, id);
    fillStatsBorderWithValue(array, id);
} 


function getClickEffect(array, id) {
    let contentRef = document.getElementById(`small-card-content${array[id].arrayname}${id}`);
    contentRef.classList.add('click-animation');
    setTimeout(() => {contentRef.classList.remove('click-animation');
            }, 400);
}


function displaylargeCardOverlayContainer(){
    let contentRef = document.getElementById('large-card-container');
        contentRef.style.display = 'block';
}


function getlargeCardOverlay(array, id){
    let ref = document.getElementById('large-card-container');
        ref.innerHTML = getLargePokemonCardTemp(array, id);
}


function getlargeCardOverlayStats(array, id) {
    let element = '';
        for (let statsCardIndex = 0; statsCardIndex < array[id].stats.length; statsCardIndex++) {
            element += getlargeCardOverlayStatsTemp(array, id, statsCardIndex);
        }
    return element;
}


function showLargePokemonImageOnHover(array, id) {
    showFooterPokemonNameOnHover(array, id);
    showFooterImageOnHover();
    hideFooterTypesOnHover();
}


function hideLargePokemonImageOnHover() {
    hideFooterPokemonNameOnHover();
    hideFooterImageOnHover();
    showFooterTypesOnHover();
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


function hideFooterTypesOnHover() {
    let hideContent = document.getElementsByClassName('large-content-hide');
        for (let index = 0; index < hideContent.length; index++) {
            hideContent[index].classList.add('d-opacity-10');  
    }  
};


function showFooterTypesOnHover() {
    let hideContent = document.getElementsByClassName('large-content-hide');
        for (let index = 0; index < hideContent.length; index++) {
            hideContent[index].classList.remove('d-opacity-10');  
    }  
};


function closelargeCardOverlay(){
    hidelargeCardOverlayContainer ();
    enableCardContent ();
}


function hidelargeCardOverlayContainer () {
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
    if ((data * 1.5) >= 120) {
        borderValueRef[valueIndex].innerText = "powerfull!";
        borderValueRef[valueIndex].classList.add('highlight-overpowerd', 'blink', 'font-700');
    }
}


function switchDown (array, id) {
    if (id == 0) {
        id = array.length - 1;
        getlargeCardOverlay(array, id);
        fillStatsBorderWithValue(array, id);
    } else {
        id--;
        getlargeCardOverlay(array, id);
        fillStatsBorderWithValue(array, id);
        
}
}


function switchUp (array, id) {
    if (id == array.length - 1) {
        id = 0;
        getlargeCardOverlay(array, id);
        fillStatsBorderWithValue(array, id);
    } else {
        id++;
        getlargeCardOverlay(array, id);
        fillStatsBorderWithValue(array, id);
    }
}


function getlargeCardOverlayTypesTemp(array){
    let element = "";
    for (let detailIndex = 0; detailIndex < array.types.length; detailIndex++) {
        element += `<div class="large-content-hide">${array.types[detailIndex]}</div>`;
    }
    return element;
}



function getlargeCardOverlayPowersDetailsTemp(array, id) {
    let element = '';
for (let absIndex = 0; absIndex < array[id].abilities.length; absIndex++) {
        element += `<div class="flex-ctr-spbtw abs-container">
        <span class="abs-name">${array[id].abilities[absIndex].name}</span>
        <span class="abs-text">${array[id].abilities[absIndex].text}</span>
        </div>`        
    }
return element
}