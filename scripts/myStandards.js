


function showContainer (id) {
    let content = document.getElementById(id);
        content.classList.remove('d_none');
}


function hideContainer (id) {
    let content = document.getElementById(id);
        content.classList.add('d_none');
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