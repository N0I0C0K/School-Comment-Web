import {
  Card,
  Avatar,
  Button,
  Image,
  Form,
  Input,
  Comment,
  Divider,
  BackTop,
  List,
} from 'antd'
import moment from 'moment'

import {
  UserOutlined,
  LikeOutlined,
  DislikeOutlined,
  CommentOutlined,
} from '@ant-design/icons'

import './Ground.css'
import { v4 as uuid } from 'uuid'
import { useState } from 'react'

const { TextArea } = Input

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea
        style={{ borderRadius: '20px' }}
        rows={4}
        onChange={onChange}
        value={value}
      />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType='submit'
        style={{ borderRadius: '20px' }}
        loading={submitting}
        onClick={onSubmit}
        type='primary'
      >
        Add Comment
      </Button>
    </Form.Item>
  </>
)

const CommentList = ({ comments }) => {
  return (
    <List
      dataSource={comments}
      itemLayout='horizontal'
      renderItem={(props) => <Comment {...props} />}
    />
  )
}

const Speech = () => {
  const [openComment, setOpenComment] = useState(false)
  const [comments, setComments] = useState([])
  const [val, setVal] = useState('')

  const AddComment = () => {
    if (val.length <= 0) return
    setComments([
      ...comments,
      {
        author: 'username',
        avatar: 'https://joeschmoe.io/api/v1/random',
        content: <p>{val}</p>,
        datetime: moment('2022-10-1').toNow(),
      },
    ])
    setVal('')
  }

  return (
    <Card style={{ borderRadius: '20px' }} className='speech'>
      <Avatar size='large' icon={<UserOutlined />} />
      <p className='username'>username</p>
      <p className='speech-content'>
        sadasdkhasjkdhajkshdjkashdjkashdkjashdjkashdjkashdjkashsadasdkhasjkdhajkshdjkashdjkashdkjashdjkashdjkashdjkash
        测试中文
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
          onClick={(e) => {
            setOpenComment(!openComment)
          }}
        />
      </div>
      {openComment && (
        <div className='comment'>
          <Divider />
          {comments.length > 0 && <CommentList comments={comments} />}
          <Comment
            avatar={
              <Avatar src='https://joeschmoe.io/api/v1/random' alt='Han Solo' />
            }
            content={
              <Editor
                onChange={(e) => {
                  setVal(e.target.value)
                }}
                onSubmit={AddComment}
                value={val}
              />
            }
          />
        </div>
      )}
    </Card>
  )
}

const Ground = () => {
  return (
    <div className='ground'>
      {[1, 2, 3, 4, 5, 6, 1, 1, 1, 1, 1, 1, 1, 1].map((bal) => (
        <Speech key={uuid()}></Speech>
      ))}
      <BackTop />
    </div>
  )
}

export default Ground
