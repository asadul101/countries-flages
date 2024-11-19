
import { useEffect, useState } from 'react'
import './App.css'
import PorductsCard from './components/PorductsCard'

function App() {
  const[products,setProducts]=useState([])
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=> res.json())
    .then(data=>setProducts(data))
  },[])
  return (
    <div className='max-w-7xl mx-auto pb-20'>
      <h1 className='text-4xl font-bold text-center pt-10 pb-14'>All Countries Flags</h1>
      <div className='grid grid-cols-3 gap-10'>
        {
          products.map(pro=><PorductsCard key={pro.id} products={pro}></PorductsCard>)
        }
      </div>
    </div>
  )
}

export default App
