/*
 * (Queue)
 * Comportamento: FIFO (First-In, First-Out)
 */
class Fila {
  constructor() {
    this.itens = []; // A Ferramenta (Módulo 1)
  }

  // Método 1: Adicionar ao FIM da fila (FIFO)
  // (Usa a  / .push)
  enqueue(elemento) {
    this.itens.push(elemento); 
  }

  // Método 2: Remover do COMEÇO da fila (FIFO)
  // (Usa a / .shift)
  dequeue() {
    if (this.isEmpty()) { // Bônus de Engenharia
      return null;
    }
    return this.itens.shift(); 
  }

  // Método 3 (Auxiliar): Olhar o COMEÇO (sem remover)
  // (Usa a  / [0])
  peek() {
    if (this.isEmpty()) { // Bônus de Engenharia
      return null;
    }
    return this.itens[0];
  }

  // Método 4 (Auxiliar): Verificar se está vazia
  // (Usa a / .length)
  isEmpty() {
    return this.itens.length === 0; // CORRIGIDO (a lógica)
  }

  // Método 5 (Auxiliar): Ver o tamanho
  // (Usa a / .length)
  size() {
    return this.itens.length; // CORRIGIDO
  }
}