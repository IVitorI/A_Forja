class Carro {

    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.ligado = false;
    }

    ligar() {
        this.ligado = true;
        console.log('Carro ' + this.marca + ' ' + this.modelo + ' ligado')
    }


    desligar() {
        this.ligado = false;
        console.log('Carro ' + this.marca + ' ' + this.modelo + ' desligado')
    }
    
}


const meuFusca = new Carro("Volkswagen", "Fusca");
meuFusca.ligar()
meuFusca.desligar();