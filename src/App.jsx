import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import DetailedPost from './pages/DetailedPost'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/create-post' element={<CreatePost/>}/>
        <Route path='/post/:slug' element={<DetailedPost/>}/>
      </Route>
    </Routes>
  )
}

export default App