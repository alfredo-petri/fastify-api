
import Button from '@mui/material/Button';
import './App.css'
import { useState, useEffect } from 'react';


const url = "http://localhost:3000/products"

function App() {

  const [products, setProducts] = useState ([]);
  const [name, setName] = useState ('');
  const [price, setPrice] = useState ('');

  
  useEffect ( ()=>{
    const fetchData = async ()=> {
      const res = await fetch(url);
      const data = await res.json();

      setProducts (data);
    }

    fetchData()

  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name, 
      price
    }

    const res = await fetch (url, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(product)
    })

    const addedProducts = await res.json();

    setProducts ((prevProducts) => [...prevProducts, addedProducts])
    setName ("")
    setPrice("")

  }

  return (
    <>
      <h1>Lista de produtos</h1>
      <ul>
        {products.map((product)=>(
          <li key={product.id}> {product.name} - R$ {product.price} </li>
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            <input 
              type="text" 
              value={name} 
              name='name' 
              placeholder='Digite o nome do produto' 
              onChange={(e)=> {setName(e.target.value)}}
            />
          </label>
          <label>
            <span>Preço:</span>
            <input
              type='number'
              value={price}
              name='price'
              placeholder='Digite o valor do produto'
              onChange={(e)=> {setPrice(e.target.value)}}
            />
          </label>
          <button type='submit' className='cadastrar' >Cadastrar</button>
        </form>
      </div>
    </>
  )
}

export default App
