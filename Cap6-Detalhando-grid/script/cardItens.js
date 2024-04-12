const inserir = document.querySelector('#inserir');
const resetar = document.querySelector('#reset');
const d1 = document.querySelector('section');

let nCard = 1;

function moreCard(i) {
    return `<article class="card">
                <header>
                    <h1>Nome do produto lorem ipsum dolor sit Modelo 2345</h1>
                </header>

                <figure>
                    <img src="imagens/card${i}.jpg">
                </figure>

                <ul>
                    <li><strong>Descrição</strong><br> Curabitur interdum augue a pede.</li>
                    <li><strong>Preço:</strong><span>R$1.019,99</span><br>(ou 10 x R$101,99)</li>
                </ul>

                <footer>
                    <a href="#">Comprar</a>
                </footer>
            </article>`;
};

inserir.addEventListener('click', () => {
    nCard++;

    if (nCard <= 12) {
        d1.insertAdjacentHTML('beforeend', moreCard(nCard));
    }
    return;
});

resetar.addEventListener('click', () => location.reload());