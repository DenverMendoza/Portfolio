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
      
      <div className='flex gap-4'>
        <div className="w-3/4">
          <About className="w-full"></About>
        </div>
        <div className="w-1/4">
          <Experience></Experience>
        </div>
      </div>
    </Layout>
  
  </div>
  )
}

export default App
