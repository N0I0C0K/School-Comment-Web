import './food.css'
import { Card, Image, Rate, Divider } from 'antd'

const decs = ['很难吃', '比较难吃', '还不错', '比较好吃', '好吃']

const FoodCard = ({ rateVal }) => {
  return (
    <Card className='food-card'>
      <Image
        width='100%'
        className='speech-img'
        src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Flmg.jj20.com%2Fup%2Fallimg%2F811%2F0HQ4104127%2F140HQ04127-5-1200.jpg&refer=http%3A%2F%2Flmg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1667618661&t=aaec5bf65dff1cece66040d4308f3810'
      />
      <p className='food-name'>大盘鸡</p>
      <p className='food-loc'>四餐厅-22号</p>
      <div className='rate-group'>
        <Divider />
        <Rate style={{ fontSize: '20px' }} disabled value={rateVal} />
        <p className='rate-text'>
          {rateVal ? decs[rateVal - 1] : ''}(50人参与评价)
        </p>
      </div>
    </Card>
  )
}

const FoodPage = () => {
  return (
    <div className='food-page'>
      {[2, 3, 4, 1, 1, 1, 1].map((val) => (
        <FoodCard rateVal={val} />
      ))}
    </div>
  )
}

export default FoodPage
