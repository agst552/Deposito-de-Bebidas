const modal = document.getElementById('modal');
const abrirModal = document.querySelector('.abrirModal');

abrirModal.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

