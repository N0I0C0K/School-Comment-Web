import { Avatar, Card, Menu } from 'antd'
import { BulbOutlined, UserOutlined } from '@ant-design/icons'
import { useLocation } from 'react-router-dom'
import './LeftSider.css'
const menuData = [
  {
    key: 'ground',
    label: '广场',
    icon: <BulbOutlined />,
  },
  {
    key: 'food',
    label: '食物点评',
    icon: <BulbOutlined />,
  },
]

const MyLeftSider = () => {
  return (
    <>
      <Card style={{ borderRadius: '20px' }}>
        <Avatar size={64} icon={<UserOutlined />} />
        <Menu
          className='menu'
          items={menuData}
          onClick={(info) => {
            window.location.href = `/${info.key}`
          }}
        />
      </Card>
    </>
  )
}

export default MyLeftSider
