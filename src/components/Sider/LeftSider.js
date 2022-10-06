import { Avatar, Card, Menu } from 'antd'
import { BulbOutlined } from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import './LeftSider.css'
const menuData = [
  {
    key: '/ground',
    label: '广场',
    icon: <BulbOutlined />,
  },
  {
    key: '/food',
    label: '食物点评',
    icon: <BulbOutlined />,
  },
]

const MyLeftSider = () => {
  const { pathname } = useLocation()
  const goto = useNavigate()
  return (
    <>
      <Card className='Sider-Card'>
        <Avatar size={64} src='https://joeschmoe.io/api/v1/random' />
        <Menu
          className='menu'
          items={menuData}
          defaultSelectedKeys={[pathname]}
          onClick={(info) => {
            goto(info.key)
            //window.location.href = `/${info.key}`
          }}
        />
      </Card>
    </>
  )
}

export default MyLeftSider
