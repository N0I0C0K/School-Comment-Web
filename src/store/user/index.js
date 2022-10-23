import { useState } from 'react'

const testUserInfo = {
  userName: 'nick',
  userAvatar: 'https://joeschmoe.io/api/v1/random',
  grade: '2022',
  studentID: '202007010101',
}

const useUserInfo = () => {
  const [userinfo] = useState(testUserInfo)
  return userinfo
}

export { useUserInfo }
