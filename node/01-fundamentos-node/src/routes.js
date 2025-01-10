import { Database } from "./database.js"
import { randomUUID } from "node:crypto"
import { BuildRoutePath } from "./utils/build-route-path.js"

const database = new Database()

export const routes = [
    {
        method: "GET",
        path: BuildRoutePath("/users"),
        handler: (req, res) => {
            const users = database.select("users")
            return res.end(JSON.stringify(users))
        },
    },
    {
        method: "POST",
        path: BuildRoutePath("/users"),
        handler: (req, res) => {
            const { name, email } = req.body

            const user = {
                id: randomUUID(),
                name: name,
                email: email,
            }

            database.insert("users", user)

            return res.writeHead(201).end("criação de usuário bem sucedida")
        },
    },
]
