class Pilha {
  constructor() {
    this.itens = [];
  }

  // Método 1: Adicionar ao topo (O(1))
  push(elemento) {
    this.itens.push(elemento);
  }

  // Método 2: Remover do topo (O(1))
  pop() {
    if (this.itens.length === 0) {
      return null;
    }
    return this.itens.pop();
  }

  // Método 3: Olhar o topo (O(1))
  peek() {
    // Retorna 'undefined' (padrão) se a pilha estiver vazia
    return this.itens[this.itens.length - 1];
  }

  // Método 4: Verificar se está vazia (O(1))
  isEmpty() {
    return this.itens.length === 0; // CORRIGIDO
  }

  // Método 5: Ver o tamanho (O(1))
  size() {
    return this.itens.length; // CORRIGIDO
  }
}

const minhaPilha = new Pilha();
minhaPilha.push("Prato 1");
minhaPilha.push("Prato 2");
console.log(minhaPilha.peek()); // Deve mostrar "Prato 2"
console.log(minhaPilha.pop());  // Deve retornar "Prato 2"
console.log(minhaPilha.size()); // Deve mostrar 1