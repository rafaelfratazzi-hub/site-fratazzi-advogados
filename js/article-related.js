// Script para exibir artigos relacionados
// Este script deve ser incluído nas páginas de artigos individuais

// Função para obter artigos relacionados baseado na categoria e tags
function getRelatedArticles(currentArticleId, currentCategory, currentTags, allArticles) {
    // Filtrar artigos da mesma categoria, excluindo o artigo atual
    const sameCategory = allArticles.filter(article => 
        article.id !== currentArticleId && 
        article.category === currentCategory
    );
    
    // Filtrar artigos com tags similares
    const similarTags = allArticles.filter(article => {
        if (article.id === currentArticleId) return false;
        return article.tags.some(tag => currentTags.includes(tag));
    });
    
    // Combinar e remover duplicatas
    const related = [...sameCategory, ...similarTags];
    const uniqueRelated = related.filter((article, index, self) => 
        index === self.findIndex(a => a.id === article.id)
    );
    
    // Retornar até 3 artigos relacionados
    return uniqueRelated.slice(0, 3);
}

// Função para criar HTML de artigos relacionados
function createRelatedArticlesHTML(articles) {
    if (articles.length === 0) return '';
    
    let html = `
        <div class="article-related">
            <h3>Artigos Relacionados</h3>
            <div class="related-posts-grid">
    `;
    
    articles.forEach(article => {
        html += `
            <div class="related-post-card">
                <h4>${article.title}</h4>
                <p>${article.excerpt}</p>
                <a href="artigo-${article.id}.html" class="related-post-link">
                    Ler artigo
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
        `;
    });
    
    html += `
            </div>
        </div>
    `;
    
    return html;
}

// Função para inicializar artigos relacionados
function initRelatedArticles() {
    // Obter o ID do artigo atual da URL
    const currentPath = window.location.pathname;
    const match = currentPath.match(/artigo-(\d+)\.html/);
    if (!match) return;
    
    const currentArticleId = parseInt(match[1]);
    
    // Buscar o artigo atual no array de posts
    const currentArticle = blogPosts.find(post => post.id === currentArticleId);
    if (!currentArticle) return;
    
    // Obter artigos relacionados
    const related = getRelatedArticles(
        currentArticleId,
        currentArticle.category,
        currentArticle.tags,
        blogPosts
    );
    
    // Inserir HTML dos artigos relacionados antes do CTA final
    const articleContent = document.querySelector('.article-content');
    if (articleContent && related.length > 0) {
        const relatedHTML = createRelatedArticlesHTML(related);
        articleContent.insertAdjacentHTML('afterend', relatedHTML);
    }
}

// Executar quando a página carregar
if (typeof blogPosts !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initRelatedArticles);
}




