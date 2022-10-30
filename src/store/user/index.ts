import { useState } from 'react'

type AvatarUrl = string

interface UserInfo {
  userName: string
  userAvatar: AvatarUrl
  grade: string
  studentID: string
}

const testUserInfo: UserInfo = {
  userName: 'nick',
  userAvatar: 'https://joeschmoe.io/api/v1/random',
  grade: '2022',
  studentID: '202007010101',
}

const useUserInfo: () => UserInfo = () => {
  const [userinfo] = useState(testUserInfo)
  return userinfo
}

export { useUserInfo }
