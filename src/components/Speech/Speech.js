import {
  Card,
  Avatar,
  Button,
  Image,
  Form,
  Input,
  Comment,
  Divider,
  List,
} from 'antd'
import moment from 'moment'

import {
  LikeOutlined,
  DislikeOutlined,
  CommentOutlined,
} from '@ant-design/icons'

import { v4 as uuid } from 'uuid'
import { useState } from 'react'
import './Speech.css'
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

const Speech = ({
  username,
  userAvatar,
  speechContent,
  speechDate,
  imgs,
  comments,
}) => {
  const [openComment, setOpenComment] = useState(false)
  const [comComments, setComments] = useState(comments)
  const [val, setVal] = useState('')

  const AddComment = () => {
    if (val.length <= 0) return
    setComments([
      ...comComments,
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
    <Card className='speech'>
      <Avatar size='large' src={userAvatar} />
      <p className='username'>{username}</p>
      <p className='speech-content'>{speechContent}</p>
      {imgs.map((val) => {
        return <Image width={150} className='speech-img' src={val} />
      })}

      <p className='speech-time'>{speechDate}</p>
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
          {comComments.length > 0 && <CommentList comments={comComments} />}
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

export default Speech
