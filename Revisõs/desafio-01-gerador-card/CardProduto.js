class CardProduto {

    constructor(titulo, descricao, preco, urlDaImagem) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.preco = preco;
        this.urlDaImagem = urlDaImagem;

    }

    render() {
        // Usamos crases (`) para a Template String
        return `
            <article class="card">
            <img src="${this.urlDaImagem}" alt="Imagem de ${this.titulo}">
            <div class="card-info">
                <h2>${this.titulo}</h2>
                <p>${this.descricao}</p>
                <h3>R$ ${this.preco}</h3>
            </div>
            </article>
        `;
    }
}