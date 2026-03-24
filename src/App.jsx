import { useState } from 'react'
import { Navbar} from '../components/navbar'
import { Experience }  from '../sections/Experience'
import { About } from '../sections/About'
import { TechStack } from '../sections/TechStack'
import  Button  from '../components/Button'
import Layout from '../components/Layout'
import { Hero } from '../sections/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <Navbar />
    
    <Layout>
      <Hero></Hero>
      
      <div className='flex gap-4'>
        <div className="w-3/4">
          <About className="w-full"></About>
          <TechStack className="w-full"></TechStack>
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
