import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import View from './components/View'
import Records from './components/Records'
import Form from './components/Form'
import {Routes, Route} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <h1>Welcome to React</h1>
    <View/>
    <Routes>
      <Route path='/' element={<Records/>}></Route>
      <Route path='/add' element={<Form/>}></Route>
    </Routes>
    </>
  )
}

export default App
