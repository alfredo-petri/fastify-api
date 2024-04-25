import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box } from '@mui/material';

const AxiosPosts = () => {
    
        
    const url = "https://jsonplaceholder.typicode.com/posts"
    const [posts, setPosts] = useState ([]);
    const [error, setErrors] = useState ('');

    useEffect (()=>{
        const axiosPosts = async () => {
            try {
                const response = await axios.get(url) 
                setPosts(response.data)
            } catch (error) {
                setErrors(error.message)
            }
        }
        axiosPosts()
    }, [])

  return (
    <Box>
        <h1>Posts (Axios API)</h1>
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

export default AxiosPosts