import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route } from "react-router-dom";
import Layout from './components/Layout';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Layout>
      
    </Layout>

    <Route path="/html" element ={<Resources category={"html"} />} />
    <Route path="/css" element ={<Resources category={"css"} />} />
    <Route path="/javascript" element ={<Resources category={"javascript"} />} />
    <Route path="/react" element ={<Resources category={"react"} />} />
    <Route path="/sanity" element ={<Resources category={"headless-cms"} />} />

    </>
  );

  }

export default App
