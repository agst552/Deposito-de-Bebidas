const abrirDestiladosBtn = document.getElementById("destilados");
const modalDestilados = document.getElementById("modal-destilados");
const modalPrincipal = document.getElementById("modal");
const voltarDestiladosBtn = document.getElementById("voltar-destilados");
const fecharDestiladosBtn = document.querySelector(".fecharDestilados");

abrirDestiladosBtn.addEventListener('click', () => {
    modalDestilados.classList.remove('hidden');
    modalPrincipal.classList.add('hidden'); 
    document.body.classList.add('no-scroll');
    carregarModalDestilados();
});

voltarDestiladosBtn.addEventListener('click', () => {
    modalPrincipal.classList.remove('hidden');
    modalDestilados.classList.add('hidden');
    document.body.classList.add('no-scroll');
});

fecharDestiladosBtn.addEventListener('click', () => {
    modalDestilados.classList.add('hidden');
    document.body.classList.remove('no-scroll');
});

window.addEventListener('click', (e) => {
    if (e.target === modalDestilados) {
        modalDestilados.classList.add('hidden');
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