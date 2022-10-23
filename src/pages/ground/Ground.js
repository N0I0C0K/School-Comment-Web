import { BackTop } from 'antd'

import './Ground.css'
import Speech from '../../components/Speech/Speech'

const testData = [
  {
    username: 'nick',
    userAvatar: 'https://joeschmoe.io/api/v1/random',
    speechContent: '123123, test\r\naaaaa',
    speechDate: '2022-10-1 10:22',
    imgs: [
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    ],
    comments: [
      {
        author: 'username1',
        avatar: 'https://joeschmoe.io/api/v1/random',
        content: '说得好',
        datetime: '2022-10-1',
      },
    ],
  },
]

const Ground = () => {
  return (
    <div className='ground'>
      {testData.map((val) => {
        return <Speech {...val} />
      })}
      <BackTop />
    </div>
  )
}

export default Ground
