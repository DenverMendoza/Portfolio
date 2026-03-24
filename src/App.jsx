import { useState } from 'react'
import { Experience }  from '../sections/Experience'
import { About } from '../sections/About'
import { TechStack } from '../sections/TechStack'
import Layout from '../components/Layout'
import { Hero } from '../sections/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
  
    <Layout>
      <div className='mb-7'>
        <Hero></Hero>
      </div>
      
      <div className="grid grid-cols-4 gap-4">
          <div className='col-span-3 border-solid border-1 border-black'><About></About></div>
          <div className='col-span-1 border-solid border-1 border-black'><Experience></Experience></div>
          <div className='col-span-3 border-solid border-1 border-black'><TechStack></TechStack></div>
          <div className='hidden'><Experience></Experience></div>
          
      </div>
    </Layout>
  
  </div>
  )
}

export default App
