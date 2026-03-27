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
    
    // Atualizar no link "Ver Todas as Avaliações" — preservar estrutura .inner para visibilidade do texto
    const linkAvaliacoes = document.querySelector('.avaliacoes-cta .btn-primary');
    if (linkAvaliacoes) {
        const inner = linkAvaliacoes.querySelector('.inner');
        if (inner) {
            inner.textContent = `Ver ${total} Avaliações no Google Maps`;
        }
        linkAvaliacoes.href = `https://www.google.com/maps/place/R.+Ot%C3%A1vio+Forghieri,+72+-+Sala+63+-+Centro,+Guarulhos+-+SP,+07090-070`;
    }
}

// Função para atualizar os cards de avaliações
function atualizarCardsAvaliacoes(avaliacoes) {
    const grid = document.querySelector('.avaliacoes-grid');
    if (!grid) return;
    
    // Limpar avaliações antigas (manter apenas as 3 primeiras)
    grid.innerHTML = '';
    
    avaliacoes.slice(0, 3).forEach((avaliacao, index) => {
        const card = criarCardAvaliacao(avaliacao, index);
        grid.appendChild(card);
    });
}

// Função para criar um card de avaliação
function criarCardAvaliacao(avaliacao, index) {
    const card = document.createElement('div');
    const stars = '★'.repeat(avaliacao.nota) + '☆'.repeat(5 - avaliacao.nota);
    const delay = (index * 0.1 + 0.2).toFixed(1);

    if (index === 0) {
        // Primeiro card: fundo dourado + electric glow
        card.className = 'electric-glow-card flex flex-col min-h-[180px] rounded-xl p-8 text-black shadow-2xl animate-on-scroll';
        card.style.cssText = `background: linear-gradient(to bottom, #d4b87a, #a68b4f); animation: fadeSlideIn 1s cubic-bezier(0.2,0.8,0.2,1) ${delay}s both, electric-pulse 3.5s ease-in-out 1s infinite;`;
        card.innerHTML = `
            <p class="text-lg font-semibold leading-snug mb-4">"${avaliacao.texto}"</p>
            <div class="mt-auto pt-4 border-t border-black/10 flex items-center gap-2 text-sm font-medium">${stars} <span class="font-semibold">${avaliacao.autor}</span> · ${avaliacao.data}</div>
        `;
    } else {
        // Demais cards: fundo escuro + electric glow
        card.className = 'electric-glow-card flex flex-col min-h-[180px] bg-white/5 rounded-xl border border-white/10 backdrop-blur-md p-8 animate-on-scroll';
        card.style.animation = `fadeSlideIn 1s cubic-bezier(0.2,0.8,0.2,1) ${delay}s both`;
        card.innerHTML = `
            <p class="text-lg font-medium text-white/90 mb-4">"${avaliacao.texto}"</p>
            <div class="mt-auto pt-4 border-t border-white/10 flex items-center gap-2 text-sm text-white/60">${stars} <span class="font-semibold text-white">${avaliacao.autor}</span> · ${avaliacao.data}</div>
        `;
    }

    return card;
}

// Executar quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    atualizarAvaliacoesGoogle();
    
    // Atualizar a cada 24 horas (opcional)
    setInterval(atualizarAvaliacoesGoogle, 24 * 60 * 60 * 1000);
});

