import http from "node:http"
import { json } from "./midlewares/json.js"

const users = []

const server = http.createServer(async (req, res) => {
    const { method, url } = req

    await json(req, res)
    if (method === "POST" && url === "/users") {
        const { name, email } = req.body

        users.push({
            id: 1,
            name: name,
            email: email,
        })
        return res.writeHead(201).end("criação de usuário bem sucedida")
    }
    if (method === "GET" && url === "/users") return res.end(JSON.stringify(users))

    return res.writeHead(404).end("Recurso não encontrado")
})

server.listen(3333)
