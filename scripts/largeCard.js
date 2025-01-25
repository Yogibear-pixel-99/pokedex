
function cardDetails(cardId) {
    let contentRef = document.getElementById(`small-card-wrapper${cardId}`);

    getAnimation(contentRef);
    setTimeout(() => getLargeCardContainer(contentRef), 415);

}

function getAnimation(cardId) {
    cardId.classList.add('click-animation');
    setTimeout(() => {cardId.classList.remove('click-animation');
            }, 410);
}

function getLargeCardContainer (smallCardInfo) {
    cardInfo = smallCardInfo.innerHTML;
    smallCardInfo.innerHTML = '';
    let contentRef = document.getElementById('large-card-container');
        contentRef.style.display = "block";
        contentRef.innerHTML = cardInfo;
}