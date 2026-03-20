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

import {fastify} from "fastify"

//cria o servidor
const server = fastify()

//cria uma rota, especificando qual local e atribuindo uma ação
//'/' é a rota do localhost:3333
server.get('/', ()=>{
    return 'Olá mundo!'
})

//OUTRAS ROTAS:
server.get('/hello', ()=> {
    return 'Você está na rota hello, seja bem-vindo!'
})

server.get('/jogos', ()=> {
    return 'Você está na rota de jogos, divirta-se.'
})

//1) faz o método listen
//2) passa um objeto {}
//3) passa a porta "port"
server.listen({
    port:3333,
})