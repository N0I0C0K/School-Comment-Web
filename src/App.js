import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyLeftSider from './components/Sider/LeftSider'
import Ground from './pages/ground/Ground'

const MyContent = () => {
  return (
    <div className='content radius-min'>
      <Routes>
        <Route path='/' element={<Ground />}>
          <Route path='/ground' element={<Ground />} />
        </Route>
      </Routes>
    </div>
  )
}

const MyFooter = () => {
  return <div className='footer'>footer</div>
}

const LeftSider = () => {
  return (
    <div className='left-sider radius-min'>
      <MyLeftSider />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <LeftSider />
        <MyContent />
        <MyFooter />
      </div>
    </BrowserRouter>
  )
}

export default App
