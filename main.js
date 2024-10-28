function criaCartao(categoria,pergunta,resposta){
    let container = document.getElementById('container')
    let article = document.createElement('article')
    article.className = 'cartao'
    article.innerHTML = 'isso é um teste'
    container.appendChild(article)

}

criaCartao('Biologia','Qual a função da mitocondria?', 'Produção de Energia (ATP)')