import './food.css'
import { Card, Image, Rate, Divider } from 'antd'
import { v4 as uuid } from 'uuid'
const decs = ['很难吃', '比较难吃', '还不错', '比较好吃', '好吃']

const FoodCard = ({ foodName, foodLoc, foodImgSrc, rateVal }) => {
  return (
    <Card className='food-card'>
      <Image width='100%' className='speech-img' src={foodImgSrc} />
      <p className='food-name'>{foodName}</p>
      <p className='food-loc'>{foodLoc}</p>
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

const testData = [
  {
    foodName: '大盘鸡',
    foodLoc: '四餐厅',
    rateVal: 4,
  },
  {
    foodName: '宫保鸡丁',
    foodLoc: '四餐厅',
    rateVal: 3,
  },
  {
    foodName: '大盘鸡',
    foodLoc: '四餐厅',
    rateVal: 1,
  },
  {
    foodName: '大盘鸡',
    foodLoc: '四餐厅',
    rateVal: 5,
  },
]

const FoodPage = () => {
  return (
    <div className='food-page'>
      {testData.map((val) => (
        <FoodCard
          foodImgSrc='https://pic.img.ski/1665041377.png'
          {...val}
          key={uuid()}
        />
      ))}
    </div>
  )
}

export default FoodPage
