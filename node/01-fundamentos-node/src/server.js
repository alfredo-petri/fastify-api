import http from "node:http"

const users = []

const server = http.createServer(async (req, res) => {
    const { method, url } = req

    const buffers = []

    for await (const chunk of req) {
        buffers.push(chunk)
    }

    try {
        req.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch (error) {
        req.body = null
    }

    if (method === "POST" && url === "/users") {
        const { name, email } = req.body

        users.push({
            id: 1,
            name: name,
            email: email,
        })
        return res.writeHead(201).end("criação de usuário bem sucedida")
    }
    if (method === "GET" && url === "/users") return res.setHeader("content-type", "aplication/json").end(JSON.stringify(users))

    return res.writeHead(404).end("Recurso não encontrado")
})

server.listen(3333)
