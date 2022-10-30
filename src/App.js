import './App.css'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import MyLeftSider from './components/Sider/LeftSider'
import Ground from './pages/ground/Ground'
import LoginPage from './pages/login/login'
import FoodPage from './pages/food/food'
import UserPage from './pages/user/user'
import { useEffect, useState } from 'react'
const MyContent = () => {
  return (
    <div className='content radius-min'>
      <Outlet />
    </div>
  )
}

const MyFooter = () => {
  return <div className='footer'>footer</div>
}

const LeftSider = () => {
  const [left, setLeft] = useState()
  const handleResize = () => {
    const width = window.innerWidth
    setLeft(width / 2 - width * 0.2 - 270)
  }
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })
  return (
    <div
      style={{
        left: `${left}px`,
      }}
      className='left-sider radius-min'
    >
      <MyLeftSider />
    </div>
  )
}

const Home = () => {
  return (
    <div className='App'>
      <LeftSider />
      <MyContent />
      <MyFooter />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/' element={<Ground />} />
          <Route path='ground' element={<Ground />} />
          <Route path='food' element={<FoodPage />} />
          <Route path='user' element={<UserPage />} />
        </Route>
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
