async function carregarBebidas() {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/bebidas/');
        const bebidas = await response.json();
        const container = document.getElementById ('lista-bebidas');
        bebidas.forEach (bebida => {
            container.innerHTML += `
            <div class="card">
                    <img src="${bebida.imagem}" alt="${bebida.nome}" id="img-card">
                    <h3 id="nome-card">${bebida.nome}</h3>
                    <p class="categoria">Categoria: ${bebida.categoria}</p>
                    <p class="preco">R$ ${bebida.preco}</p>
            </div>
            `;
        })
    } catch (error) {
        console.error ('erro ao carregar bebidas:', error);
    }}

carregarBebidas();