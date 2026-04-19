//BANCO DE DADOS EM MEMÓRIA

import { randomUUID } from "node:crypto";
//UUID = unique universal id

//centraliza as funções
export class databaseMemory {
  //chave privada
  #videos = new Map();

  // Set - funciona como um array que não aceita valores duplicados,
  // Map - funciona como um objeto e possui uma API

  list() {
    return Array.from(
      this.#videos.entries().map((videoArray) => {
        const id = videoArray[0];
        const data = videoArray[1];

        return {
          id,
          ...data, //aqui, utiliza-se o spread operator '...', pega itens agrupados e coloca "solto" onde precisa
        };
      }),
    ); //o método entries() diferencia de values() porque retorna pares [chave, valor] completo, enquanto values() retorna apenas os valores
    //o método map() percorre o array e pode transformá-lo
  }

  //método utilizado para receber o vídeo e salvá-lo
  create(video) {
    const videoId = randomUUID();

    this.#videos.set(videoId, video);
  }

  update(id, video) {
    this.#videos.set(id, video);
  }

  delete(id) {
    this.#videos.delete(id);
  }
}
