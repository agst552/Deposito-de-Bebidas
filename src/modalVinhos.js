const abrirVinhosBtn = document.getElementById("vinhos");
const modalVinhos = document.getElementById("modal-vinhos");
// const modalPrincipal = document.getElementById("modal");
const voltarVinhosBtn = document.getElementById("voltar-vinhos");
const fecharVinhosBtn = document.querySelector(".fecharVinhos");

abrirVinhosBtn.addEventListener('click', () => {
    modalVinhos.classList.remove('hidden');
    modalPrincipal.classList.add('hidden'); 
    document.body.classList.add('no-scroll');
    carregarModalVinhos();
});

voltarVinhosBtn.addEventListener('click', () => {
    modalPrincipal.classList.remove('hidden');
    modalVinhos.classList.add('hidden');
    document.body.classList.remove('no-scroll');
});

fecharVinhosBtn.addEventListener('click', () => {
    modalVinhos.classList.add('hidden');
    document.body.classList.remove('no-scroll');
});

window.addEventListener('click', (e) => {
    if (e.target === modalVinhos) {
        modalVinhos.classList.add('hidden');
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