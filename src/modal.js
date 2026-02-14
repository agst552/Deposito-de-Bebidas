const modal = document.getElementById('modal');
const abrirModal = document.querySelector('.abrirModal');
const fecharModal = document.querySelector('.fecharModal');


fecharModal.addEventListener ('click', () => {
    modal.classList.add('hidden');
    document.body.classList.remove('no-scroll');
})


abrirModal.addEventListener('click', () => {
    modal.classList.remove('hidden');
    document.body.classList.add('no-scroll');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        document.body.classList.remove('no-scroll');
        modal.classList.add('hidden');
    }
});

