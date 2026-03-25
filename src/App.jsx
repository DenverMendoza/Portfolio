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
      
      <div className="grid grid-cols-6 gap-3">
          <div className='col-span-4'><About></About></div>
          <div className='col-span-2 row-span-2'><Experience></Experience></div>
          <div className='col-span-4'><TechStack></TechStack></div>
          <div className='hidden'><Experience></Experience></div>
          
      </div>
    </Layout>
  
  </div>
  )
}

export default App
