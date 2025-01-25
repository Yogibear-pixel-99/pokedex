
let largeCardOpen = false;

function cardDetails(cardId) {
    let smallCardContentRef = document.getElementById(`card-content${cardId}`);
    let largeCardContentRef = document.getElementById('large-card-container');


    getClickEffect(smallCardContentRef);

    setTimeout(() => getLargeContainer(largeCardContentRef), 450);
    setTimeout(() => getLargeCard(largeCardContentRef, cardId), 480);
    // setTimeout(() => getSmallCardInfos(largeCardContentRef, cardId), 480);
    setTimeout(() => animateSmallCardToLarge(cardId), 490);
    largeCardOpen = true;
    
} 

function getClickEffect(cardId) {
    cardId.classList.add('click-animation');
    setTimeout(() => {cardId.classList.remove('click-animation');
            }, 401);
}

function getLargeContainer (largeCardContentRef) {
    // let contentRef = document.getElementById('large-card-container');
    largeCardContentRef.style.display = "block";
}

function getLargeCard(largeCardContentRef, cardId) {
    largeCardContentRef.innerHTML = largeCardTemp(cardId);
    
}

function animateSmallCardToLarge(cardId) {
    let cardContentRef = document.getElementById(`large-card-content${cardId}`)
        cardContentRef.classList.add('large-card-animation');
}

function largeCardTemp (cardId) {
    return  `
    <div id="large-card-content${cardId}" class="${getCardColor(allPokemons[cardId])}-card ${checkIfMenuIsOpen()}">
        <div class="small-card-header">
            <div>#${allPokemons[cardId].id}</div>
            <div class="small-card-name">${allPokemons[cardId].name}</div>
        </div>
            <div class="small-card-img-container ${getCardColor(allPokemons[cardId])}-inner">
                <img id="large-pokemon${cardId + 1}" src=${allPokemons[cardId].pic}>
                <div class="border ${getCardColor(allPokemons[cardId])}-border"></div>
            </div>    
        <div class="powers-container">
            <div class="powers-header">Powers</div>
            <div>${getDetailsTemp(allPokemons[cardId].abilities)}</div>
            ${getLargeFooter(cardId)}    
    </div> 
    `
}

function checkIfMenuIsOpen() {
    return largeCardOpen ? 'large-card' : 'small-card';
}

function getLargeFooter (cardId) {
    return `
        <div class="large-card-footer ${getCardColor(allPokemons[cardId])}-footer">
            <button class="switch-button ${getCardColor(allPokemons[cardId])}-card" 
            onclick="switchDown"><--</button>
            ${getDetailsTemp(allPokemons[cardId].types)}
            <button class="switch-button ${getCardColor(allPokemons[cardId])}-card" 
            onclick="switchUp(${cardId})">--></button>
            </div>
        `
}


function switchDown (cardId) {
    let contentRef = document.getElementById('large-card-container');
    if (cardId == 0) {
        cardId = allPokemons.length;
        contentRef.innerHTML = largeCardTemp(cardId);
    } else {
        contentRef.innerHTML =largeCardTemp(cardId - 1);
}
}

function switchUp (cardId) {
    let contentRef = document.getElementById('large-card-container');
    if (cardId == allPokemons.length) {
        cardId = 0;
        contentRef.innerHTML = largeCardTemp(cardId);
    } else {
        contentRef.innerHTML = largeCardTemp(cardId + 1);
    }
}