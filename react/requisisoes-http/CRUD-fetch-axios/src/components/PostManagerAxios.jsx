import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostFormAxios from './PostFormAxios'

const PostManagerAxios = () => {

    const url = "https://jsonplaceholder.typicode.com/posts"
    const [posts, setPosts] = useState ([]);
    const [error, setErrors] = useState ('');

    const handleSuccess = (post, operation) => {
        if (operation === "add") {
            setPosts((currentPosts) => [...currentPosts, post])
        }
    }

    useEffect (()=>{
        const axiosPosts = async () => {
            try {
                const response = await axios.get(url) 
                setPosts(response.data.slice(0, 5))
            } catch (error) {
                setErrors(error.message)
            }
        }
        axiosPosts()
    }, [])

    return (
        <Box>
            <h1>Gerenciar Posts</h1>
            <PostFormAxios onSuccess={handleSuccess} />
            <h2>Postagens</h2>
            {(posts.map((post)=>(
               <Box key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <button>Editar</button> 
               </Box>
                
            )))}
        </Box>
    )
}

export default PostManagerAxios