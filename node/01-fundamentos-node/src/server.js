import http from "node:http"
import { json } from "./midlewares/json.js"
import { Database } from "./midlewares/database.js"

const database = new Database()

const server = http.createServer(async (req, res) => {
    const { method, url } = req

    await json(req, res)
    if (method === "POST" && url === "/users") {
        const { name, email } = req.body

        const user = {
            id: 1,
            name: name,
            email: email,
        }

        database.insert("users", user)

        return res.writeHead(201).end("criação de usuário bem sucedida")
    }
    if (method === "GET" && url === "/users") {
        const users = database.select("users")
        return res.end(JSON.stringify(users))
    }

    return res.writeHead(404).end("Recurso não encontrado")
})

server.listen(3333)
