let jogosAlugados = 0;

function contarJogosAlugados(){
    document.getElementById('alugados-count').textContent = jogosAlugados;
}

let jogosDevolvidos = 0;

function contarJogosDevolvidos(){
    document.getElementById('devolvidos-count').textContent = jogosDevolvidos;
}

function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    
    if (imagem.classList.contains('dashboard__item__img--rented')) {

        if (confirm(`Você realmente quer devolver o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            jogosDevolvidos++;

            contarJogosDevolvidos();
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        jogosAlugados++;

        contarJogosAlugados();
    }
}

