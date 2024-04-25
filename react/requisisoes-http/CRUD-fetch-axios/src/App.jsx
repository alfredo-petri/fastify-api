import { Box, Container } from "@mui/material"
import { Routes, Route, RouterProvider, Link, BrowserRouter } from "react-router-dom"
import FetchPosts from "./components/FetchPosts"
import AxiosPosts from "./components/AxiosPosts"
import NavBar from "./components/NavBar"
import PostManagerAxios from "./components/PostManagerAxios"


function App() {


  return (
    
    
    <BrowserRouter>

      <h1>GET fetch e Axios</h1>
      <Box> 
        <Link to='/fetch-posts'>Fetch posts</Link>
        <Link to='/axios-posts'>Axios posts</Link>
      </Box>
      <Box>
        <Link to='/posts/'>Gerenciar Posts</Link>
      </Box>
    
      <Container>

        <Routes>
          <Route path="/fetch-posts" element={<FetchPosts />} />
          <Route path="/axios-posts" element={<AxiosPosts />} />
          <Route path="/posts" element={<PostManagerAxios />} />
        </Routes>

      </Container>
    </BrowserRouter>
  )
}

export default App
