function criaCartao(categoria,pergunta,resposta){
    let container = document.getElementById('container')
    let article = document.createElement('article')
    article.className = 'cartao'
    article.innerHTML = `
      <div class= "cartao-conteudo">
        <h3> ${categoria}</h3>
        <div class="cartao-conteudo-pergunta">
          <p> ${pergunta}</p>
        </div>
        <div class="cartao-conteudo-resposta">
          <p> ${resposta}</p>
        </div>
      </div>
    `

    container.appendChild(article)

}

criaCartao('Biologia','Qual a função da mitocondria?', 'Produção de Energia (ATP)')
criaCartao('Matemática', 'Como é definido um grupo?', 'È um conjunto munido de uma operação onde esta é fechada no conjunto e tem algumas propriedades')