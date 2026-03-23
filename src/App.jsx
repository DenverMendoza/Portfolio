import { useState } from 'react'
import { Navbar} from '../components/navbar'
import { Experience }  from '../sections/Experience'
import { About } from '../sections/About'
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
      </div>
      <div className="w-1/4">
        <Experience></Experience>
      </div>
    </div>
  </Layout>
      

    
    

    <Button
      variant = "border-solid border-3 border-black"
      label = {'Click Me'}
      onClick={() => setCount((count) => count + 1)}
    >
      count is {count}
    </Button>
      
    <Button
      onClick={() => window.open('https://google.com', '_blank')}
    >
      Open Google
    </Button>
  </div>
  )
}

export default App
