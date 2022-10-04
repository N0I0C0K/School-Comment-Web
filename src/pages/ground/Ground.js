import { Card, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useLocation } from 'react-router-dom'
import './Ground.css'

const Speech = () => {
  return (
    <Card style={{ borderRadius: '20px' }} className='speech'>
      <Avatar size='large' icon={<UserOutlined />} />
      <p className='text'>1212121212</p>
    </Card>
  )
}

const Ground = () => {
  return (
    <div className='ground'>
      {[1, 2, 3, 4, 5, 6, 1, 1, 1, 1, 1, 1, 1, 1].map((bal) => (
        <Speech></Speech>
      ))}
    </div>
  )
}

export default Ground
