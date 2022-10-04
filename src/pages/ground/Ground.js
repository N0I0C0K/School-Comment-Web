import { Card, Avatar, Button, Image } from 'antd'
import {
  UserOutlined,
  LikeOutlined,
  DislikeOutlined,
  CommentOutlined,
} from '@ant-design/icons'
import './Ground.css'
import { v4 as uuid } from 'uuid'

const Speech = () => {
  return (
    <Card style={{ borderRadius: '20px' }} className='speech'>
      <Avatar size='large' icon={<UserOutlined />} />
      <p className='username'>username</p>
      <p className='speech-content'>
        sadasdkhasjkdhajkshdjkashdjkashdkjashdjkashdjkashdjkashsadasdkhasjkdhajkshdjkashdjkashdkjashdjkashdjkashdjkash
      </p>
      <Image
        width={150}
        style={{
          borderRadius: '20px',
        }}
        src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
      />
      <p className='speech-time'>2022-6-6 20:22</p>
      <div className='btn-group'>
        <Button className='speech-btn' shape='circle' icon={<LikeOutlined />} />
        <Button
          className='speech-btn'
          shape='circle'
          icon={<DislikeOutlined />}
        />
        <Button
          className='speech-btn'
          shape='circle'
          icon={<CommentOutlined />}
        />
      </div>
    </Card>
  )
}

const Ground = () => {
  return (
    <div className='ground'>
      {[1, 2, 3, 4, 5, 6, 1, 1, 1, 1, 1, 1, 1, 1].map((bal) => (
        <Speech key={uuid()}></Speech>
      ))}
    </div>
  )
}

export default Ground
