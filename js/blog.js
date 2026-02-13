// Base de dados de posts do blog
const blogPosts = [
    {
        id: 1,
        title: "Novas Regras do Simples Nacional em 2024: O Que Sua Empresa Precisa Saber",
        category: "tributario",
        categoryLabel: "Tributário",
        excerpt: "Entenda as principais mudanças no Simples Nacional que entraram em vigor este ano e como elas impactam o seu negócio. Saiba como se adequar e aproveitar os benefícios.",
        content: "O Simples Nacional passou por importantes alterações em 2024 que podem impactar significativamente as empresas optantes. Neste artigo, explicamos as principais mudanças e como sua empresa pode se adequar...",
        author: "Equipe Fratazzi",
        date: "2024-12-15",
        readTime: "5 min",
        image: "📊",
        tags: ["Simples Nacional", "Tributário", "Empresas"]
    },
    {
        id: 2,
        title: "Como Reduzir Impostos Legalmente: 5 Estratégias Eficazes",
        category: "tributario",
        categoryLabel: "Tributário",
        excerpt: "Descubra estratégias legais e eficazes para reduzir a carga tributária da sua empresa sem infringir a legislação. Planejamento tributário inteligente.",
        content: "A redução legal de impostos é possível através de um planejamento tributário bem estruturado. Neste artigo, apresentamos 5 estratégias comprovadas que podem ajudar sua empresa a economizar...",
        author: "Dr. João Silva",
        date: "2024-12-12",
        readTime: "7 min",
        image: "💰",
        tags: ["Planejamento Tributário", "Redução de Impostos", "Estratégias"]
    },
    {
        id: 3,
        title: "STF Decide sobre Restituição de Impostos: Entenda o Impacto",
        category: "novidades",
        categoryLabel: "Novidades",
        excerpt: "O Supremo Tribunal Federal publicou decisão importante sobre restituição de impostos. Saiba como essa decisão pode afetar você e sua empresa.",
        content: "Em decisão recente, o STF estabeleceu novos parâmetros para restituição de impostos pagos indevidamente. Esta mudança pode beneficiar milhares de contribuintes. Explicamos os detalhes...",
        author: "Dra. Maria Santos",
        date: "2024-12-10",
        readTime: "6 min",
        image: "⚖️",
        tags: ["STF", "Restituição", "Jurisprudência"]
    },
    {
        id: 4,
        title: "10 Dicas para Empresas Evitarem Autuações Fiscais",
        category: "dicas-empresas",
        categoryLabel: "Dicas para Empresas",
        excerpt: "Prevenir é melhor que remediar. Conheça as principais práticas que sua empresa deve adotar para evitar autuações fiscais e multas desnecessárias.",
        content: "Autuações fiscais podem ser evitadas com práticas preventivas adequadas. Neste artigo, listamos 10 dicas essenciais que toda empresa deve seguir para manter-se em conformidade...",
        author: "Equipe Fratazzi",
        date: "2024-12-08",
        readTime: "8 min",
        image: "🛡️",
        tags: ["Prevenção", "Compliance", "Empresas"]
    },
    {
        id: 5,
        title: "Reforma Tributária: O Que Muda para Pequenas e Médias Empresas",
        category: "novidades",
        categoryLabel: "Novidades",
        excerpt: "A reforma tributária aprovada traz mudanças significativas. Entenda como pequenas e médias empresas serão impactadas e o que fazer para se preparar.",
        content: "A reforma tributária brasileira foi aprovada e trará transformações importantes no sistema fiscal. Pequenas e médias empresas precisam se preparar. Analisamos os principais pontos...",
        author: "Dr. Carlos Oliveira",
        date: "2024-12-05",
        readTime: "10 min",
        image: "📋",
        tags: ["Reforma Tributária", "PMEs", "Legislação"]
    },
    {
        id: 6,
        title: "Como Negociar Dívidas Fiscais com a Receita Federal",
        category: "tributario",
        categoryLabel: "Tributário",
        excerpt: "Guia completo sobre como negociar dívidas fiscais com a Receita Federal. Conheça os programas disponíveis e como obter as melhores condições.",
        content: "Negociar dívidas fiscais pode ser um processo complexo, mas existem programas oficiais que facilitam essa negociação. Explicamos passo a passo como proceder...",
        author: "Dra. Ana Costa",
        date: "2024-12-03",
        readTime: "6 min",
        image: "💼",
        tags: ["Negociação", "Receita Federal", "Dívidas Fiscais"]
    },
    {
        id: 7,
        title: "E-commerce e Impostos: Guia Completo para Vendas Online",
        category: "dicas-empresas",
        categoryLabel: "Dicas para Empresas",
        excerpt: "Vender online exige atenção especial aos aspectos tributários. Aprenda como estruturar seu e-commerce de forma legal e otimizada fiscalmente.",
        content: "O e-commerce cresceu exponencialmente e com ele a necessidade de entender as obrigações tributárias. Este guia completo explica tudo que você precisa saber...",
        author: "Equipe Fratazzi",
        date: "2024-12-01",
        readTime: "9 min",
        image: "🛒",
        tags: ["E-commerce", "Vendas Online", "Tributário"]
    },
    {
        id: 8,
        title: "PIS/COFINS: Entenda as Mudanças e Como Calcular Corretamente",
        category: "tributario",
        categoryLabel: "Tributário",
        excerpt: "PIS e COFINS são tributos complexos que sofreram alterações recentes. Entenda como calcular corretamente e evitar erros que podem gerar multas.",
        content: "O cálculo de PIS e COFINS pode ser desafiador para muitas empresas. Com as mudanças recentes na legislação, é essencial estar atualizado. Explicamos tudo...",
        author: "Dr. Roberto Lima",
        date: "2024-11-28",
        readTime: "7 min",
        image: "📊",
        tags: ["PIS/COFINS", "Cálculo", "Tributário"]
    },
    {
        id: 9,
        title: "LGPD e Aspectos Tributários: O Que Sua Empresa Precisa Saber",
        category: "novidades",
        categoryLabel: "Novidades",
        excerpt: "A LGPD não trata apenas de proteção de dados. Entenda como ela se relaciona com aspectos tributários e o que sua empresa precisa fazer.",
        content: "A Lei Geral de Proteção de Dados (LGPD) tem implicações que vão além da privacidade. Empresas precisam entender como ela afeta aspectos tributários...",
        author: "Dra. Fernanda Alves",
        date: "2024-11-25",
        readTime: "8 min",
        image: "🔒",
        tags: ["LGPD", "Proteção de Dados", "Compliance"]
    },
    {
        id: 10,
        title: "MEI: Guia Completo de Obrigações e Benefícios",
        category: "dicas-empresas",
        categoryLabel: "Dicas para Empresas",
        excerpt: "Microempreendedor Individual: conheça todas as obrigações, benefícios e como manter-se regularizado. Guia completo para MEIs.",
        content: "Ser MEI traz vantagens, mas também exige o cumprimento de obrigações. Este guia completo explica tudo que você precisa saber sobre o regime...",
        author: "Equipe Fratazzi",
        date: "2024-11-22",
        readTime: "6 min",
        image: "👤",
        tags: ["MEI", "Microempreendedor", "Obrigações"]
    },
    {
        id: 11,
        title: "Recuperação de Créditos Tributários: Como Funciona e Quando Solicitar",
        category: "tributario",
        categoryLabel: "Tributário",
        excerpt: "Muitas empresas têm direito a créditos tributários não aproveitados. Aprenda como identificar e recuperar esses valores.",
        content: "A recuperação de créditos tributários pode representar uma economia significativa para empresas. Explicamos como identificar e solicitar esses créditos...",
        author: "Dr. Paulo Mendes",
        date: "2024-11-20",
        readTime: "7 min",
        image: "💵",
        tags: ["Créditos Tributários", "Recuperação", "Tributário"]
    },
    {
        id: 12,
        title: "Startups e Incentivos Fiscais: Oportunidades para Empreendedores",
        category: "dicas-empresas",
        categoryLabel: "Dicas para Empresas",
        excerpt: "Startups podem se beneficiar de diversos incentivos fiscais. Conheça os principais programas e como acessá-los.",
        content: "O ecossistema de startups brasileiro oferece diversos incentivos fiscais. Este artigo apresenta as principais oportunidades disponíveis...",
        author: "Dra. Juliana Rocha",
        date: "2024-11-18",
        readTime: "9 min",
        image: "🚀",
        tags: ["Startups", "Incentivos Fiscais", "Empreendedorismo"]
    },
    {
        id: 13,
        title: "Revisão de Contratos Bancários: Direitos do Consumidor e Proteção Legal",
        category: "bancario",
        categoryLabel: "Direito Bancário",
        excerpt: "Entenda como o Código de Defesa do Consumidor protege você em contratos bancários e quais são os principais pontos que podem ser revisados judicialmente.",
        content: "Os contratos bancários são regidos pelo Código de Defesa do Consumidor, que estabelece proteções importantes para os consumidores. Este artigo analisa os principais aspectos...",
        author: "Dr. Rafael Fratazzi",
        date: "2024-12-20",
        readTime: "8 min",
        image: "📄",
        tags: ["Contratos Bancários", "CDC", "Direito Bancário"]
    },
    {
        id: 14,
        title: "Juros Abusivos em Operações Bancárias: Limites Legais e Possibilidades de Revisão",
        category: "bancario",
        categoryLabel: "Direito Bancário",
        excerpt: "Análise sobre juros abusivos em contratos bancários, fundamentação legal no CDC e jurisprudência do STJ sobre o tema.",
        content: "A questão dos juros abusivos em operações bancárias é objeto de constante discussão no Judiciário. Este artigo examina os limites legais e a jurisprudência consolidada...",
        author: "Dr. Rafael Fratazzi",
        date: "2024-12-18",
        readTime: "9 min",
        image: "💰",
        tags: ["Juros Abusivos", "STJ", "CDC"]
    },
    {
        id: 15,
        title: "Capitalização Indevida de Juros: Entendimentos do BACEN e Jurisprudência",
        category: "bancario",
        categoryLabel: "Direito Bancário",
        excerpt: "A capitalização indevida de juros é prática vedada pela legislação. Conheça os entendimentos do Banco Central e a posição dos tribunais.",
        content: "A capitalização de juros sobre juros, conhecida como anatocismo, é vedada pela legislação brasileira. Este artigo analisa os entendimentos do BACEN e a jurisprudência...",
        author: "Dr. Rafael Fratazzi",
        date: "2024-12-16",
        readTime: "7 min",
        image: "📊",
        tags: ["Capitalização", "BACEN", "Anatocismo"]
    },
    {
        id: 16,
        title: "Negociação de Dívidas Bancárias: Estratégias Extrajudiciais e Programas Disponíveis",
        category: "bancario",
        categoryLabel: "Direito Bancário",
        excerpt: "Conheça as principais estratégias para negociar dívidas bancárias de forma extrajudicial e os programas oficiais disponíveis para renegociação.",
        content: "A negociação extrajudicial de dívidas bancárias pode ser uma alternativa eficiente. Este artigo apresenta as principais estratégias e programas disponíveis...",
        author: "Dr. Rafael Fratazzi",
        date: "2024-12-14",
        readTime: "8 min",
        image: "🤝",
        tags: ["Negociação", "Dívidas", "Extrajudicial"]
    },
    {
        id: 17,
        title: "Atuação Judicial e Extrajudicial em Direito Bancário: Quando Buscar o Judiciário",
        category: "bancario",
        categoryLabel: "Direito Bancário",
        excerpt: "Entenda quando é recomendável buscar a via judicial e quando a negociação extrajudicial pode ser mais adequada em questões bancárias.",
        content: "A escolha entre atuação judicial e extrajudicial em questões bancárias depende de diversos fatores. Este artigo analisa os critérios para essa decisão...",
        author: "Dr. Rafael Fratazzi",
        date: "2024-12-12",
        readTime: "10 min",
        image: "⚖️",
        tags: ["Judicial", "Extrajudicial", "Estratégias"]
    }
];

// Função para formatar data
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
}

// Função para criar card de post
function createPostCard(post) {
    return `
        <article class="post-card" data-category="${post.category}">
            <div class="post-card-header">
                <div class="post-category-badge post-category-${post.category}">
                    ${post.categoryLabel}
                </div>
                <div class="post-image">${post.image}</div>
            </div>
            <div class="post-card-body">
                <h3 class="post-title">${post.title}</h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-meta">
                    <span class="post-date">${formatDate(post.date)}</span>
                    <span class="post-read-time">${post.readTime} de leitura</span>
                </div>
                <div class="post-tags">
                    ${post.tags.map(tag => `<span class="post-tag">${tag}</span>`).join('')}
                </div>
            </div>
            <div class="post-card-footer">
                <a href="artigos/artigo-${post.id}.html" class="post-read-more" data-post-id="${post.id}">
                    Ler mais
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
        </article>
    `;
}

// Função para renderizar posts
function renderPosts(posts) {
    const container = document.getElementById('postsContainer');
    const noResults = document.getElementById('noResults');
    
    if (posts.length === 0) {
        container.innerHTML = '';
        noResults.style.display = 'block';
    } else {
        container.innerHTML = posts.map(post => createPostCard(post)).join('');
        noResults.style.display = 'none';
    }
}

// Função para filtrar posts
function filterPosts() {
    const searchTerm = document.getElementById('blogSearch').value.toLowerCase().trim();
    const activeCategory = document.querySelector('.category-btn.active')?.dataset.category || 'todos';
    
    let filtered = blogPosts.filter(post => {
        const matchesCategory = activeCategory === 'todos' || post.category === activeCategory;
        
        // Se não há termo de busca, retorna apenas o filtro de categoria
        if (searchTerm === '') {
            return matchesCategory;
        }
        
        // Busca em múltiplos campos (normalizado para minúsculas)
        // Remove acentos para busca mais flexível
        const normalizeText = (text) => text.toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
        
        const normalizedSearchTerm = normalizeText(searchTerm);
        const searchInTitle = normalizeText(post.title).includes(normalizedSearchTerm);
        const searchInExcerpt = normalizeText(post.excerpt).includes(normalizedSearchTerm);
        const searchInCategory = normalizeText(post.categoryLabel).includes(normalizedSearchTerm);
        const searchInTags = post.tags.some(tag => normalizeText(tag).includes(normalizedSearchTerm));
        const searchInContent = normalizeText(post.content).includes(normalizedSearchTerm);
        
        const matchesSearch = searchInTitle || searchInExcerpt || searchInCategory || searchInTags || searchInContent;
        
        return matchesCategory && matchesSearch;
    });
    
    renderPosts(filtered);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se há posts bancários
    const bancarioPosts = blogPosts.filter(post => post.category === 'bancario');
    if (bancarioPosts.length === 0) {
        console.warn('ATENÇÃO: Nenhum artigo bancário encontrado no array blogPosts!');
    } else {
        console.log('Artigos bancários encontrados:', bancarioPosts.length);
    }
    
    // Renderizar todos os posts inicialmente
    renderPosts(blogPosts);
    
    // Filtro por categoria
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterPosts();
        });
    });
    
    // Busca
    const searchInput = document.getElementById('blogSearch');
    const searchBtn = document.querySelector('.blog-search-btn');
    
    if (searchInput) {
        searchInput.addEventListener('input', filterPosts);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                filterPosts();
            }
        });
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', filterPosts);
    }
    
    // Links "Ler mais" já estão configurados com href nos cards
});

