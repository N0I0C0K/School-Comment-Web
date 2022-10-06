import { Form, Input, Button, Card } from 'antd'
import { useNavigate } from 'react-router-dom'
import './login.css'

const LoginPage = () => {
  const nav = useNavigate()
  return (
    <div className='login-page'>
      <Card className='login-block' style={{ borderRadius: '20px' }}>
        <Form
          name='basic'
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={(val) => {
            console.log(val)
            nav('/ground')
          }}
          onFinishFailed={(val) => console.log(val)}
          autoComplete='off'
        >
          <Form.Item
            label='Username'
            name='username'
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input style={{ borderRadius: '20px' }} />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password style={{ borderRadius: '20px' }} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              type='primary'
              htmlType='submit'
              style={{ borderRadius: '20px' }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default LoginPage
