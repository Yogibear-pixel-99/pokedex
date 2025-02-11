// MY OWN FUNCTIONS THAT CAN BY USED WITH THE PARAMETER IN EVERY PROGRAMM
function showContainer (containerId) {
    let content = document.getElementById(containerId);
        content.classList.remove('d-none');
}


function hideContainer (containerId) {
    let content = document.getElementById(containerId);
        content.classList.add('d-none');
} 


function getRndNumber (maxNr) {
    return Math.floor(Math.random() * maxNr) + 1;
}


async function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), ms)
    })
    
}


function stopBubbling(event) {
    event.stopPropagation()
}


function emptyContainer(containerId) {
    let content = document.getElementById(containerId);
        content.innerHTML = '';
}


function togglePointerEvents (containerId) {
    let contentRef = document.getElementById(`${containerId}`);
        contentRef.classList.toggle('no-pointer-events');
}

function disablePointerEvents (containerId) {
    let contentRef = document.getElementById(`${containerId}`);
        contentRef.classList.add('no-pointer-events');
}


function enablePointerEvents (containerId) {
    let contentRef = document.getElementById(`${containerId}`);
        contentRef.classList.remove('no-pointer-events');
}


function toggleBlurGreyEffect (containerId) {
    let cardsContentRef = document.getElementById(`${containerId}`);
        cardsContentRef.classList.toggle('blur-grey-effect');
}

function enableBlurGreyEffect (containerId) {
    let cardsContentRef = document.getElementById(`${containerId}`);
        cardsContentRef.classList.add('blur-grey-effect');
}


function disableBlurGreyEffect (containerId) {
    let cardsContentRef = document.getElementById(`${containerId}`);
        cardsContentRef.classList.remove('blur-grey-effect');
}


function toggleOverflow (containerId) {
    let bodyRef = document.getElementById(`${containerId}`);
        bodyRef.classList.toggle('overflow-hidden');
}

function disableOverflow (containerId) {
    let bodyRef = document.getElementById(`${containerId}`);
        bodyRef.classList.add('overflow-hidden');
}


function enableOverflow (containerId) {
    let bodyRef = document.getElementById(`${containerId}`);
        bodyRef.classList.remove('overflow-hidden');
}