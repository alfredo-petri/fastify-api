import http from "node:http"

const server = http.createServer((req, res) => {
    const { method, url } = req

    if (method === "POST" && url === "/users") return res.end("criação de usuários")
    if (method === "GET" && url === "/users") return res.end("busca de usuários")
    
    return res.end("Hello World!!!")
})

server.listen(3333)
