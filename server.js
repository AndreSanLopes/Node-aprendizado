/*import { createServer } from "node:http";
//request = obtém dados da requisição que o usuário faz ao servidor
//response = objeto para devolver a resposta para o usuário 
const server = createServer( (request, response)=> {
    response.write('Testando o recurso watch')
    return response.end()
})

/*chamar utilizando uma porta*/
//a porta irá servir para não ter conflitos com outros projetos
//server.listen(3333)

import { fastify } from "fastify";
//importou as funções do arquivo databaseMemory
//IMPORTANTE: é necessário inserir a extensão do arquivo no final: .js
import { databaseMemory } from "./database-memory.js";

//cria o servidor
const server = fastify();

const database = new databaseMemory();
//banco de dados criado

//CRUD
/*
Protocolo HTTP, 4 principais:
GET = busca uma informação
POST = usado para criação
PUT = operação, alteração em geral
DELETE = apaga

outros protocolos:
PATCH = alterar informação específica
*/

//cria uma rota, especificando qual local e atribuindo uma ação
//'/' é a rota do localhost:3333/videos
//ao utilizar 'post', estamos atribuindo a criação de um vídeo nesse caso

//Request Body

server.post("/videos", (request, reply) => {
  const { title, description, duration } = request.body;

  database.create({
    title: title,
    description: description,
    duration: duration,
  });

  console.log(database.list());

  return reply.status(201).send({ mensagem: "Vídeo criado com sucesso!" });
  //201 significa que algo foi criado
});

//OUTRAS ROTAS:
server.get("/videos", () => {
  const videos = database.list()

  return videos
});

//rota para alterar um vídeo e apenas UM vídeo por vez
//cada vídeo possui um ID = route parameter
//localhost:3333/videos:put + id do vídeo
server.put("/videos/:id", () => {
  return "Você está na rota de jogos, divirta-se.";
});

//do mesmo modo que put, deleta um vídeo por vez usando o id dele
server.delete("/videos/:id", () => {
  return "Você está na rota de jogos, divirta-se.";
}); //aqui, ":id" refere-se ao vídeo selecionado, sendo que cada vídeo terá um id próprio

//1) faz o método listen
//2) passa um objeto {}
//3) passa a porta "port"
server.listen({
  port: 3333,
});
