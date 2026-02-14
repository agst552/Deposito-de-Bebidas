const modal = document.getElementById('modal');
const abrirModal = document.querySelector('.abrirModal');
const fecharModal = document.querySelector('.fecharModal');

fecharModal.addEventListener ('click', () => {
    modal.classList.add('hidden');
})


abrirModal.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});