function showRule(id) {
    const cards = document.querySelectorAll('.content-card');
    cards.forEach(card => card.style.display = 'none');

    const buttons = document.querySelectorAll('.sidebar button');
    buttons.forEach(btn => btn.classList.remove('active'));

    document.getElementById('rule' + id).style.display = 'block';
    document.getElementById('btn' + id).classList.add('active');
}

showRule(1);
