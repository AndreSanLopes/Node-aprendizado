import { createServer } from "node:http";
//request = obtém dados da requisição que o usuário faz ao servidor
//response = objeto para devolver a resposta para o usuário 
const server = createServer( (request, response)=> {
    response.write('Testando o recurso watch')
    return response.end()
})

/*chamar utilizando uma porta*/
//a porta irá servir para não ter conflitos com outros projetos
server.listen(3333)