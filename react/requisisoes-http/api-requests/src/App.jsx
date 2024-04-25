import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import './App.css'
import FetchPosts from './components/FetchPosts'
import AxiosPosts from './components/AxiosPosts'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <h1>Get com Fetch e Axios</h1>
      <div>
        <Link to="/fetch-posts">First Api Request - Fetch</Link>
        <br/>
        <Link to="/axios-posts">First Api Request - Axios</Link>
      </div>
      <div>
       
      </div>
      <Routes>
        <Route path="fetch-posts" element={<FetchPosts />} />
        <Route path="axios-posts" element={<AxiosPosts />} />
       
      </Routes>
    </BrowserRouter>
  )
}

export default App
