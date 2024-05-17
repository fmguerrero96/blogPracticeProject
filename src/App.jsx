import { useState } from 'react'
import './App.css'
import Post from './Post'
import Header from './header'

function App() {

  return (
    <main>
      <Header/>

      <Post/>
      <Post/>
      <Post/> 
    </main>
  )
}

export default App
