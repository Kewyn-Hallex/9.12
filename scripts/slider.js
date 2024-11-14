let index = 0;
const imagens = document.querySelectorAll('.imagem-topo');

// Função para alterar a imagem ativa
function mudarImagem() {
    // Remove a classe 'active' de todas as imagens
    imagens.forEach(img => img.classList.remove('active'));

    // Adiciona a classe 'active' à próxima imagem
    index = (index + 1) % imagens.length; // Vai de 0 a imagens.length - 1
    imagens[index].classList.add('active');
}

// Inicia o slider
setInterval(mudarImagem, 3000); // Chama a função a cada 2 segundos
