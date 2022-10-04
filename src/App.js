import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from 'react-router-dom'
import MyLeftSider from './components/Sider/LeftSider'
import Ground from './pages/ground/Ground'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Ground />,
  },
  {
    path: '/ground',
    element: <Ground />,
  },
])
const MyContent = () => {
  return (
    <div className='content radius-min'>
      <RouterProvider router={router} />
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
    <div className='App'>
      <LeftSider />
      <MyContent />
      <MyFooter />
    </div>
  )
}

export default App
