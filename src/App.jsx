import React, { lazy, Suspense, useEffect } from 'react'
import './App.css'
import Login from './components/Login.jsx';
import { Routes, Route} from "react-router-dom"


function App() {
  const Home = lazy(()=> import("./components/Home"))
  return (

    <section className='app__container'>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route path='/home' element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>}/>
        </Routes>

    </section>
      
  )
}

export default App
