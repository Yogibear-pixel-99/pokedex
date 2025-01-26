

async function cardDetails(cardId) {
    let smallCardContentRef = document.getElementById(`card-content${cardId}`);
    // let largeCardContentRef = document.getElementById('large-card-container');
    await getClickEffect(smallCardContentRef);
    await getLargeContainer();
    await delay(400);
    await getLargePokemonCard(cardId);
    await delay(400);
    await animateSmallCardToLarge(cardId);  
    await delay(400); 
    await toggleCardClassSmallLarge(cardId);
    await delay(400);
    await getLargeCardDetailsFromApi(cardId);
    await delay(400);
    await renderLargeCard(cardId); 
    await delay(400);
    await renderLargeCardDetails(cardId); 
} 

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getClickEffect(cardId) {
    cardId.classList.add('click-animation');
    setTimeout(() => {cardId.classList.remove('click-animation');
            }, 400);
}


async function getLargeContainer () {
    let contentRef = document.getElementById('large-card-container');
    contentRef.style.display = "block";
}


async function getLargePokemonCard(cardId) {
    let contentRef = document.getElementById('large-card-container');
    contentRef.innerHTML = getLargePokemonCardTemp (cardId);
}


async function animateSmallCardToLarge(cardId) {
    let contentRef = document.getElementById(`large-card-content${cardId}`)
        contentRef.classList.add('large-card-animation');
}


async function toggleCardClassSmallLarge(cardId) {
    document.getElementById(`large-card-content${cardId}`).classList.add('large-card');
    document.getElementById(`large-card-content${cardId}`).classList.remove('small-card');
    largeCardOpen = true;
}


async function getLargeCardDetailsFromApi (cardId) {
    cardId++;
    let response = await fetch(MAIN_URL + 'pokemon/' + cardId);
    console.log(response);
    data = await response.json();
    allPokemonsLargeCardDetails = [];
    for (let statsApiIndex = 0; statsApiIndex < data.stats.length; statsApiIndex++) {
        
        allPokemonsLargeCardDetails.push(
        {
            statname : data.stats[statsApiIndex].stat.name,
            statvalue : data.stats[statsApiIndex].base_stat,
        }
        )
    }
    console.log(allPokemonsLargeCardDetails);
}


async function renderLargeCard (cardId) {
    let contentRef = document.getElementById(`large-card-content${cardId}`);
        contentRef = getLargePokemonCardTemp(cardId);
}


async function renderLargeCardDetails () {
    let contentRef = document.getElementById('large-card-details-container');
    contentRef.innerHTML = '';
        for (let statsLokalIndex = 0; statsLokalIndex < allPokemonsLargeCardDetails.length; statsLokalIndex++) {
            contentRef.innerHTML += getLargeCardStatsTemp(statsLokalIndex);
        }
}


function switchDown (cardId) {
    let contentRef = document.getElementById('large-card-container');
    if (cardId == 0) {
        cardId = allPokemons.length;
        contentRef.innerHTML = getLargePokemonCardTemp(cardId);
        
    } else {
        contentRef.innerHTML =getLargePokemonCardTemp(cardId - 1);
        
}
}

function switchUp (cardId) {
    let contentRef = document.getElementById('large-card-container');
    if (cardId == allPokemons.length) {
        cardId = 0;
        contentRef.innerHTML = getLargePokemonCardTemp(cardId);
        
    } else {
        contentRef.innerHTML = getLargePokemonCardTemp(cardId + 1);
        
    }
}