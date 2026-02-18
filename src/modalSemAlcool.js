const abrirSemAlcoolBtn = document.getElementById("sem-alcool");
const modalSemAlcool = document.getElementById("modal-sem-alcool");
// const modalPrincipal = document.getElementById("modal");
const voltarSemAlcoolBtn = document.getElementById("voltar-sem-alcool");
const fecharSemAlcoolBtn = document.querySelector(".fecharSemAlcool");

abrirSemAlcoolBtn.addEventListener('click', () => {
    modalSemAlcool.classList.remove('hidden');
    modalPrincipal.classList.add('hidden'); 
    document.body.classList.add('no-scroll');
    carregarModalSemAlcool();
});

voltarSemAlcoolBtn.addEventListener('click', () => {
    modalPrincipal.classList.remove('hidden');
    modalSemAlcool.classList.add('hidden');
    document.body.classList.remove('no-scroll');
});

fecharSemAlcoolBtn.addEventListener('click', () => {
    modalSemAlcool.classList.add('hidden');
    document.body.classList.remove('no-scroll');
});

window.addEventListener('click', (e) => {
    if (e.target === modalSemAlcool) {
        modalSemAlcool.classList.add('hidden');
        modalPrincipal.classList.remove('hidden');
        document.body.classList.remove('no-scroll');
}});


// if (estoque) {
//     if (parseInt(estoque.textContent.replace('Estoque: ', '').replace(' un.', '')) === 0) {
//         buttonAdd = document.querySelector(".btn-add-modal");
//         if (buttonAdd) {
//             buttonAdd.disabled = true;
//             buttonAdd.textContent = "Produto Indisponível";
//         }}}