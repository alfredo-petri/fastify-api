import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react'

const FetchPosts = () => {

    const url = "https://jsonplaceholder.typicode.com/posts"
    const [posts, setPosts] = useState ([]);
    const [error, setErrors] = useState ('');

    useEffect (()=>{
        const fetchPosts = async () => {
            try {
                const response = await fetch(url) 
                const data = await response.json()
                setPosts(data)
            } catch (error) {
                setErrors(error.message)
            }
        }
        fetchPosts()
    }, [])

  return (
    <Box>
        <h1>Posts (Fetch API)</h1>
        {error ? (<p>Erro: {error}</p>) : (
            posts.map((post)=>(
               <Box key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p> 
               </Box> 
            )))}
    </Box>
  )

}

export default FetchPosts