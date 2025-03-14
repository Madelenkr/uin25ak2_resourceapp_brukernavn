import './App.css'
import { Route, Routes } from "react-router-dom";
import Layout from './components/Layout';
import ResourceCard from "./components/ResourceCard";
import "../Style/app.scss";


function App() {
  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<ResourceCard category={"html"} />} />
        <Route path="/html" element ={<ResourceCard category={"html"} />} />
        <Route path="/css" element ={<ResourceCard category={"css"} />} />
        <Route path="/javascript" element ={<ResourceCard category={"javascript"} />} />
        <Route path="/react" element ={<ResourceCard category={"react"} />} />
        <Route path="/headless-cms" element ={<ResourceCard category={"headless-cms"} />} />
      </Routes>
    </Layout>
    </>
  );
}

export default App
