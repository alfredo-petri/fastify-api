import './App.css'
import { useState, useEffect } from 'react';
import { useFetch } from './hooks/useFetch';
import { useFetchAdvanced } from './hooks/useFetchAdvanced';

const url = "http://localhost:3000/products"

export const AppAdvanced = () => {
    const [products, setProducts] = useState ([]);

    const {data: items, httpConfig, loading, error} = useFetchAdvanced(url)

    const [name, setName] = useState ('');
    const [price, setPrice] = useState ('');
      
    const handleSubmit = async (e) => {
      e.preventDefault()
  
      const product = {
        name, 
        price
      }

      /*
      const res = await fetch (url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(product)
      })

      const addedProducts = await res.json();

      setProducts ((prevProducts) => [...prevProducts, addedProducts])

      */

      httpConfig(product, "POST");
  
      
      setName ("")
      setPrice("")
  
    }

    const handleDelete = (id) =>{
      httpConfig (id, "DELETE")
    }
  
    return (
      <>
        <h1>Lista de produtos</h1>

        
        {loading && <><br/><p>Carregando os dados..</p><br/></>}
        {error && <p>{error}</p>}
        {!error && <ul>
          {items && items.map((product)=>(
            <li key={product.id}> {product.name} - R$ {product.price}<button style={{ marginLeft: "15px"}} onClick={()=>{handleDelete(product.id)}}>Deletar</button></li>
          ))}
          
        </ul>}
        
        
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
            {loading && <button type='submit' className='cadastrar' disabled>Aguarde</button>}
            {!loading && <button type='submit' className='cadastrar' >Cadastrar</button>}
            
          </form>
        </div>
      </>
    )
  }