
function expandCard(id) {
    let contentRef = document.getElementById(`card-content${id}`);
    contentRef.classList.contains('large-card') ? contentRef.classList.remove('large-card') : contentRef.classList.add('large-card');
}