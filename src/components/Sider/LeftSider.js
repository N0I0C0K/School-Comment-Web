import { Avatar, Card, Menu } from 'antd'
import { BulbOutlined } from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import './LeftSider.css'
import { useUserInfo } from '../../store/user'
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
  const userInfo = useUserInfo()
  const goto = useNavigate()
  return (
    <>
      <Card className='Sider-Card'>
        <div className='user-info'>
          <Avatar
            size={64}
            style={{
              cursor: 'pointer',
            }}
            src={userInfo.userAvatar}
            onClick={() => {
              goto('/user')
            }}
          />
          <h2>{userInfo.userName}</h2>
        </div>
        <Menu
          className='menu'
          items={menuData}
          defaultSelectedKeys={[pathname]}
          onClick={(info) => {
            goto(info.key)
          }}
        />
      </Card>
    </>
  )
}

export default MyLeftSider
