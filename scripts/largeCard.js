

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
    // let cardRef = document.getElementById(`large-card-content${cardId}`);
    //     cardRef.style.backgroundImage = `url(${allPokemons[cardId].artwork})`
}




function getLargeCardStats(array, id) {
    let element = '';
    for (let statsCardIndex = 0; statsCardIndex < array[id].stats.length; statsCardIndex++) {
        element += getLargeCardStatsTemp(array, id, statsCardIndex);
    }
    return element;
}


// function getLargeCardPowers (id) {
//     return `<div class="large-card-powers-container large-content-hide">
//             ${getLargeCardPowersTemp(id)}
//                 <div class="flex-ctr-spbtw abs-container large-content-hide weight">
//             <div class="abs-name">weight</div>
            
//         </div>
//              </div>
//             `
// }