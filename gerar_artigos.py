#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Script para gerar arquivos HTML individuais para cada artigo do blog
"""

posts_data = [
    {
        'id': 3,
        'title': 'STF Decide sobre Restituição de Impostos: Entenda o Impacto',
        'category': 'novidades',
        'categoryLabel': 'Novidades',
        'author': 'Dra. Maria Santos',
        'date': '2024-12-10',
        'dateFormatted': '10 de dezembro de 2024',
        'readTime': '6 min',
        'tags': ['STF', 'Restituição', 'Jurisprudência'],
        'excerpt': 'O Supremo Tribunal Federal publicou decisão importante sobre restituição de impostos. Saiba como essa decisão pode afetar você e sua empresa.',
        'content': '''<p class="article-lead">
                    Em decisão recente, o STF estabeleceu novos parâmetros para restituição de impostos pagos indevidamente. Esta mudança pode beneficiar milhares de contribuintes. Explicamos os detalhes e o impacto prático desta importante decisão.
                </p>

                <h2>O Que Decidiu o STF?</h2>
                <p>
                    O Supremo Tribunal Federal, em julgamento recente, estabeleceu precedente importante sobre os critérios para restituição de impostos pagos indevidamente. A decisão amplia as possibilidades de recuperação de valores e estabelece prazos mais favoráveis aos contribuintes.
                </p>

                <h2>Impacto para Contribuintes</h2>
                <p>
                    Esta decisão pode beneficiar significativamente empresas e pessoas físicas que tenham pago impostos indevidamente. Os novos critérios facilitam a comprovação do direito à restituição e estabelecem procedimentos mais claros.
                </p>

                <h2>Como Solicitar a Restituição</h2>
                <p>
                    Com base na nova jurisprudência, é possível solicitar restituição de impostos pagos indevidamente através de procedimentos administrativos ou judiciais. É fundamental contar com assessoria especializada para garantir o sucesso da solicitação.
                </p>

                <h2>Conclusão</h2>
                <p>
                    A decisão do STF representa uma importante vitória para os contribuintes, facilitando a recuperação de valores pagos indevidamente. Empresas e pessoas físicas devem avaliar se têm direito a restituições baseadas nesta nova jurisprudência.
                </p>'''
    },
    {
        'id': 4,
        'title': '10 Dicas para Empresas Evitarem Autuações Fiscais',
        'category': 'dicas-empresas',
        'categoryLabel': 'Dicas para Empresas',
        'author': 'Equipe Fratazzi',
        'date': '2024-12-08',
        'dateFormatted': '8 de dezembro de 2024',
        'readTime': '8 min',
        'tags': ['Prevenção', 'Compliance', 'Empresas'],
        'excerpt': 'Prevenir é melhor que remediar. Conheça as principais práticas que sua empresa deve adotar para evitar autuações fiscais e multas desnecessárias.',
        'content': '''<p class="article-lead">
                    Autuações fiscais podem ser evitadas com práticas preventivas adequadas. Neste artigo, listamos 10 dicas essenciais que toda empresa deve seguir para manter-se em conformidade e evitar problemas com o Fisco.
                </p>

                <h2>1. Mantenha a Documentação Organizada</h2>
                <p>
                    A organização de documentos fiscais é fundamental. Mantenha todos os comprovantes, notas fiscais e declarações organizados e facilmente acessíveis. Isso facilita fiscalizações e comprova a regularidade da empresa.
                </p>

                <h2>2. Cumpra os Prazos de Obrigações Acessórias</h2>
                <p>
                    O cumprimento rigoroso dos prazos para entrega de obrigações acessórias evita multas e autuações. Utilize sistemas de alerta e calendário fiscal para nunca perder um prazo.
                </p>

                <h2>3. Realize Auditorias Preventivas</h2>
                <p>
                    Auditorias fiscais preventivas identificam problemas antes que se tornem autuações. Realize revisões periódicas com profissionais especializados.
                </p>

                <h2>4. Mantenha-se Atualizado com a Legislação</h2>
                <p>
                    A legislação tributária muda constantemente. Mantenha-se informado sobre as alterações que afetam seu negócio e adapte seus processos conforme necessário.
                </p>

                <h2>5. Tenha Assessoria Especializada</h2>
                <p>
                    Contar com assessoria tributária especializada é essencial para evitar erros que podem gerar autuações. Profissionais qualificados conhecem as nuances da legislação e podem prevenir problemas.
                </p>

                <h2>6. Verifique Regularmente os Cadastros</h2>
                <p>
                    Mantenha seus cadastros atualizados junto aos órgãos fiscais. Dados desatualizados podem gerar problemas e dificultar a comunicação com o Fisco.
                </p>

                <h2>7. Implemente Controles Internos</h2>
                <p>
                    Controles internos eficazes ajudam a identificar e corrigir problemas antes que sejam detectados em fiscalizações. Estabeleça processos claros e treine sua equipe.
                </p>

                <h2>8. Documente Todas as Operações</h2>
                <p>
                    Documente adequadamente todas as operações da empresa. Documentação completa facilita a defesa em caso de questionamentos fiscais.
                </p>

                <h2>9. Monitore Indicadores Fiscais</h2>
                <p>
                    Monitore indicadores fiscais regularmente. Análises periódicas podem identificar inconsistências antes que se tornem problemas maiores.
                </p>

                <h2>10. Responda Prontamente a Comunicações do Fisco</h2>
                <p>
                    Responda imediatamente a qualquer comunicação do Fisco. Ignorar ou atrasar respostas pode agravar situações e gerar multas adicionais.
                </p>

                <h2>Conclusão</h2>
                <p>
                    A prevenção é sempre mais eficaz e econômica que a correção de problemas. Seguindo essas dicas, sua empresa pode evitar a maioria das autuações fiscais e manter-se em conformidade.
                </p>'''
    },
    # Continuar com os outros posts...
]

template = '''<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="{excerpt}">
    <meta name="keywords" content="{keywords}">
    <title>{title} - Fratazzi Advogados</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/blog.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <header class="header">
        <nav class="navbar">
            <div class="container">
                <div class="nav-wrapper">
                    <div class="logo">
                        <a href="../index.html">
                            <span class="logo-text">Fratazzi</span>
                            <span class="logo-accent">Advogados Associados</span>
                        </a>
                    </div>
                    <button class="menu-toggle" id="menuToggle" aria-label="Menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <ul class="nav-menu" id="navMenu">
                        <li><a href="../index.html">Início</a></li>
                        <li><a href="../servicos.html">Serviços</a></li>
                        <li><a href="../blog.html">Blog</a></li>
                        <li><a href="../index.html#sobre">Sobre</a></li>
                        <li><a href="../index.html#diferenciais">Diferenciais</a></li>
                        <li><a href="../index.html#avaliacoes">Avaliações</a></li>
                        <li><a href="../index.html#contato">Contato</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <article class="article-page">
        <div class="container">
            <div class="article-header">
                <a href="../blog.html" class="article-back-link">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Voltar ao Blog
                </a>
                <div class="article-category-badge article-category-{category}">{categoryLabel}</div>
                <h1 class="article-title">{title}</h1>
                <div class="article-meta">
                    <div class="article-meta-item"><strong>Autor:</strong> {author}</div>
                    <div class="article-meta-item"><strong>Publicado em:</strong> {dateFormatted}</div>
                    <div class="article-meta-item"><strong>Tempo de leitura:</strong> {readTime}</div>
                </div>
                <div class="article-tags">
                    {tags_html}
                </div>
            </div>

            <div class="article-content">
                {content}
            </div>

            <div class="article-cta">
                <h3>Precisa de Ajuda?</h3>
                <p>Nossa equipe especializada está pronta para ajudar sua empresa.</p>
                <div class="article-cta-buttons">
                    <a href="https://wa.me/5511945617464?text=Olá!%20Gostaria%20de%20saber%20mais." class="btn btn-whatsapp" target="_blank">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        Falar no WhatsApp
                    </a>
                    <a href="../index.html#contato" class="btn btn-primary">Solicitar Consulta</a>
                </div>
            </div>
        </div>
    </article>

    <footer class="footer" id="contato">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Contato</h3>
                    <div class="footer-info">
                        <p><strong>Endereço:</strong></p>
                        <p>Rua das Flores, 123 - Centro<br>São Paulo - SP, 01310-100</p>
                        <p><strong>Telefone:</strong> (11) 3456-7890</p>
                        <p><strong>E-mail:</strong> contato@fratazziadvogados.com.br</p>
                    </div>
                </div>
                <div class="footer-section">
                    <h3>Horário de Atendimento</h3>
                    <div class="footer-info">
                        <p>Segunda a Sexta: 9h às 18h</p>
                        <p>Sábado: 9h às 13h</p>
                        <p>Domingo: Fechado</p>
                    </div>
                </div>
                <div class="footer-section footer-map">
                    <h3>Localização</h3>
                    <div class="map-container">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197490294462!2d-46.633309!3d-23.550520!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                            width="100%" 
                            height="250" 
                            style="border:0;" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Fratazzi Advogados Associados. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>

    <a href="https://wa.me/5511945617464?text=Olá!%20Gostaria%20de%20falar%20com%20um%20advogado." class="whatsapp-float" target="_blank" aria-label="Falar no WhatsApp">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 35px; height: 35px; fill: white;">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
    </a>

    <script src="../js/menu.js"></script>
</body>
</html>'''

# Gerar apenas os artigos 3 e 4 como exemplo
# Os demais podem ser criados seguindo o mesmo padrão

if __name__ == '__main__':
    print("Script de geração de artigos criado. Execute manualmente ou expanda o script para gerar todos os artigos.")

