// Script para buscar avaliações do Google
// Nota: Para usar a Google Places API, você precisará de uma chave de API
// Por enquanto, vamos usar um widget do Google ou dados estáticos que podem ser atualizados

// Configuração do Google Business Profile
const GOOGLE_PLACE_ID = 'ChIJ...'; // Substitua pelo Place ID do seu negócio
const GOOGLE_API_KEY = ''; // Adicione sua chave da API se quiser usar a API diretamente

// Função para atualizar avaliações do Google
async function atualizarAvaliacoesGoogle() {
    try {
        // Se você tiver uma chave de API, pode usar a Google Places API
        // Por enquanto, vamos usar um widget do Google ou dados que você pode atualizar manualmente
        
        // Opção 1: Usar Google Reviews Widget (mais simples)
        // Você pode usar um serviço como https://widgets.reviews.co.uk/ ou similar
        
        // Opção 2: Atualizar manualmente os dados abaixo com as avaliações reais
        // Estes dados podem ser atualizados manualmente ou via API do Google
        // IMPORTANTE: Atualize o número totalAvaliacoes sempre que houver novas avaliações no Google
        const avaliacoesGoogle = {
            totalAvaliacoes: 1166, // Atualize este número sempre que houver novas avaliações no Google
            mediaNota: 4.9,
            avaliacoes: [
                {
                    autor: 'Maria Silva',
                    nota: 5,
                    texto: 'Excelente atendimento! O escritório resolveu meu caso com muita agilidade e profissionalismo. Recomendo sem hesitação!',
                    data: 'Há 2 meses'
                },
                {
                    autor: 'João Santos',
                    nota: 5,
                    texto: 'Profissionais extremamente competentes e atenciosos. Me senti muito bem atendido e meu problema foi resolvido rapidamente.',
                    data: 'Há 1 mês'
                },
                {
                    autor: 'Ana Costa',
                    nota: 5,
                    texto: 'Transparência, ética e resultados. Tudo que eu esperava de um escritório de advocacia de qualidade. Muito satisfeita!',
                    data: 'Há 3 semanas'
                }
            ]
        };
        
        // Atualizar o número total de avaliações no site
        atualizarTotalAvaliacoes(avaliacoesGoogle.totalAvaliacoes, avaliacoesGoogle.mediaNota);
        
        // Atualizar os cards de avaliações
        atualizarCardsAvaliacoes(avaliacoesGoogle.avaliacoes);
        
    } catch (error) {
        console.error('Erro ao buscar avaliações do Google:', error);
    }
}

// Função para atualizar o total de avaliações
function atualizarTotalAvaliacoes(total, media) {
    // Atualizar no título da seção
    const sectionTitle = document.querySelector('.avaliacoes .section-title');
    if (sectionTitle) {
        const subtitle = document.querySelector('.avaliacoes .section-subtitle');
        if (subtitle) {
            subtitle.textContent = `O que nossos clientes dizem sobre nosso trabalho - ${total} avaliações no Google (${media} estrelas)`;
        }
    }
    
    // Atualizar no link "Ver Todas as Avaliações"
    const linkAvaliacoes = document.querySelector('.avaliacoes-cta .btn-primary');
    if (linkAvaliacoes) {
        linkAvaliacoes.textContent = `Ver Todas as ${total} Avaliações no Google`;
        linkAvaliacoes.href = `https://www.google.com/maps/place/R.+Ot%C3%A1vio+Forghieri,+72+-+Sala+63+-+Centro,+Guarulhos+-+SP,+07090-070`;
    }
}

// Função para atualizar os cards de avaliações
function atualizarCardsAvaliacoes(avaliacoes) {
    const grid = document.querySelector('.avaliacoes-grid');
    if (!grid) return;
    
    // Limpar avaliações antigas (manter apenas as 3 primeiras)
    grid.innerHTML = '';
    
    avaliacoes.slice(0, 3).forEach(avaliacao => {
        const card = criarCardAvaliacao(avaliacao);
        grid.appendChild(card);
    });
}

// Função para criar um card de avaliação
function criarCardAvaliacao(avaliacao) {
    const card = document.createElement('div');
    card.className = 'avaliacao-card';
    
    const stars = '★'.repeat(avaliacao.nota) + '☆'.repeat(5 - avaliacao.nota);
    
    card.innerHTML = `
        <div class="avaliacao-header">
            <div class="avaliacao-stars">${stars}</div>
            <div class="avaliacao-author">
                <strong>${avaliacao.autor}</strong>
                <span>${avaliacao.data}</span>
            </div>
        </div>
        <p class="avaliacao-text">"${avaliacao.texto}"</p>
    `;
    
    return card;
}

// Executar quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    atualizarAvaliacoesGoogle();
    
    // Atualizar a cada 24 horas (opcional)
    setInterval(atualizarAvaliacoesGoogle, 24 * 60 * 60 * 1000);
});

