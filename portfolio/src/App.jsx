import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import ContentCard from './components/ContentDisplay'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Hero/>
     <ContentCard />
     <Footer/>
    </>
  )
}

export default App
