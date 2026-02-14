async function carregarBebidas() {
    try {
        console.log("Iniciando busca de destaques...");
        const response = await fetch('http://127.0.0.1:8000/api/bebidas/?e_destaque=true');
        const bebidas = await response.json();
        
        console.log("Dados que chegaram do Django:", bebidas);

        const container = document.getElementById('lista-bebidas');
        
        if (!container) {
            console.error("ERRO FATAL: Não achei o ID 'lista-bebidas' no HTML!");
            return;
        }

        container.innerHTML = "";

        if (bebidas.length === 0) {
            container.innerHTML = "<p style='color: white;'>Nenhum produto marcado como destaque no Admin.</p>";
            return;
        }

        bebidas.forEach(bebida => {
            console.log("Desenhando bebida:", bebida.nome);
            container.innerHTML += `
            <div class="card">
                <img src="${bebida.imagem}" alt="${bebida.nome}" class="img-card">
                <h3 class="nome-card">${bebida.nome}</h3>
                <p class="preco">R$ ${bebida.preco}</p>
            </div>
            `;
        });
    } catch (error) {
        console.error('Erro ao carregar os destaques:', error);
    }
}

carregarBebidas();

// FUNÇÃO PARA O MODAL (CERVEJAS)
async function carregarModalCervejas() {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/bebidas/?categoria=Cerveja');
        const bebidas = await response.json();
        const container = document.getElementById("container-produtos-cerveja");
        
        if (container) {
            container.innerHTML = "";
            
            if (bebidas.length === 0) {
                container.innerHTML = "<p style='color:white; text-align:center;'>Nenhuma cerveja encontrada.</p>";
            }

            bebidas.forEach(bebida => {
                container.innerHTML += `
                    <div class="produto-card-horizontal">
                        <img src="${bebida.imagem}" class="img-produto-modal">
                        <div class="info-produto">
                            <h3>${bebida.nome}</h3>
                            <p class="preco-modal">R$ ${bebida.preco}</p>
                            <p class="estoque-modal">Estoque: ${bebida.quantidade} un.</p>
                        </div>
                        <button class="btn-add-modal">🛒</button>
                    </div>`;
            });
        }
    } catch (error) {
        console.error("Erro no Modal:", error);
    }
}