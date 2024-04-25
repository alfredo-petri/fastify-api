import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Box } from '@mui/material'

const PostFormAxios = (onSuccess) => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const url = "https://jsonplaceholder.typicode.com/posts"

    const handleSubmit = async (e) => {
        e.prevent.Default()
        const newPost = {title, body, userId: 25}

        try {
            const response = await axios.post(url,newPost)
            onSuccess(response.data, "add")

        } catch (error) {
            console.log("Erro ao enviar a postagem: ", error)
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <Box>
                <input 
                    type="text"
                    value={title}
                    placeholder='Digite o titulo'
                    onChange={(e) => setTitle(e.target.value)} 
                />
            </Box>
            <Box>
                <textarea 
                    value={body}
                    onChange={(e)=> setBody(e.target.value)} 
                    placeholder="Digite o conteúdo"
                >
                    
                </textarea>
            </Box>
            <button type='submit'>Criar</button>
        </form>
    )
}

export default PostFormAxios