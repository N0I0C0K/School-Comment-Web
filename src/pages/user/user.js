import { Avatar, Card } from 'antd'
import Speech from '../../components/Speech/Speech'
import { useUserSpeech } from '../../store/Speech'
//import Speech from '../../components/Speech/Speech'
import { useUserInfo } from '../../store/user'
import './user.css'

const UserPage = () => {
  const userInfo = useUserInfo()
  const sph = useUserSpeech(userInfo.userName)
  return (
    <div className='user-page'>
      <Card className='user-card'>
        <Avatar src={userInfo.userAvatar} size={128} />
        <br />
        <br />
        <h1>{userInfo.userName}</h1>
        <p>{userInfo.studentID}</p>
      </Card>
      {sph.map((val) => {
        return <Speech {...val} />
      })}
    </div>
  )
}

export default UserPage
