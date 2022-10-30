import { useState } from 'react'

interface CommentInterface {
  author: string
  avatar: string
  content: any
  datetime: string
}

interface SpeechInterFace {
  username: string
  userAvatar: string
  speechContent: string
  speechDate: string
  imgs: Array<string>
  comments: Array<CommentInterface>
}

const testSpeech: SpeechInterFace[] = [
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

const useUserSpeech: (userID: string) => SpeechInterFace[] = (userID) => {
  const [sph] = useState(testSpeech.filter((val) => val.username === userID))
  return sph
}

export { useUserSpeech }
