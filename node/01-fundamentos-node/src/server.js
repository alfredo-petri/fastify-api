import http from "node:http"

const users = []

const server = http.createServer((req, res) => {
    const { method, url } = req

    if (method === "POST" && url === "/users") {
        users.push({
            id: 1,
            name: "Jhon Doe",
            email: "jhondoe@example.com",
        })
        return res.writeHead(201).end("criação de usuário bem sucedida")
    }
    if (method === "GET" && url === "/users") return res.setHeader("content-type", "aplication/json").end(JSON.stringify(users))

    return res.writeHead(404).end("Recurso não encontrado")
})

server.listen(3333)
