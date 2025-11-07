
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

class CarroDeCorrida extends Carro {
  // 1. O construtor do "filho" recebe TUDO
  constructor(marca, modelo, velocidadeMaxima) {
    
    // 2. O 'super()' chama o construtor do PAI ('Carro')
    //    e passa os "ingredientes" que o PAI precisa.
    super(marca, modelo); 

    // 3. Agora, o "filho" adiciona sua propriedade ÚNICA.
    this.velocidadeMaxima = velocidadeMaxima;
  }

  // 4. (Opcional) Podemos "Sobrescrever" (Override) um método
  // O CarroDeCorrida não liga quieto. Ele faz barulho.
  ligar() {
    this.ligado = true;
    // Usamos 'this.modelo' que foi HERDADO do Pai
    console.log(`VRUUUM! O ${this.modelo} está pronto para correr!`);
  }
}

const minhaFerrari = new CarroDeCorrida("Ferrari", "F50", 325);

minhaFerrari.ligar(); // Deve mostrar o log "VRUUMM" (o método sobrescrito)
console.log(minhaFerrari.velocidadeMaxima); // Deve mostrar 325 (o novo)
console.log(minhaFerrari.ligado); // Deve mostrar 'true'
minhaFerrari.desligar(); // Deve mostrar o log "desligado" (o método HERDADO)