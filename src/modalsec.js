const modalSec = document.getElementById("cervejas");
const modalSecContent = document.getElementById("modal-sec");
const modalPrim = document.getElementById("modal");
const VoltarSec = document.getElementById("voltar-one");
const fecharCervejas = document.querySelector(".fecharCervejas");

fecharCervejas.addEventListener('click', () => {
    modalSecContent.classList.add('hidden');
    document.body.classList.remove('no-scroll');
});

VoltarSec.addEventListener('click', () => {
    modalPrim.classList.remove('hidden');
    modalSecContent.classList.add('hidden');
    document.body.classList.add('no-scroll');
});

modalSec.addEventListener('click', () => {
    const modalSec = document.getElementById("modal-sec");
    modalSec.classList.remove('hidden');
    modalPrim.classList.add('hidden');
    carregarModalCervejas();
});

window.addEventListener('click', (e) => {
    if (e.target === modalSecContent) {
        modalSecContent.classList.add('hidden');
        modalPrim.classList.remove('hidden');
}});
