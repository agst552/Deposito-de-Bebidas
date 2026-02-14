const abrirModalCervejas = document.getElementById('modal-sec');
const modalCervejas = document.getElementById('modal-cervejas');

abrirModalCervejas.addEventListener('click', () => {
    modalCervejas.classList.remove('hidden');
});

window.addEventListener('click', (e) => {
    if (e.target === modalCervejas) {
        modalCervejas.classList.add('hidden');
    }})   ;