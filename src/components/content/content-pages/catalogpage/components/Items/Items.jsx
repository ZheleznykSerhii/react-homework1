import item1 from '../../../../../../img/ar.jpg'
import item2 from '../../../../../../img/belgium.jpg'
import item3 from '../../../../../../img/chok.jpg'
import item4 from '../../../../../../img/cheesecake.jpg'
import s from './Items.module.css'
import { useState } from 'react'
import ItemCont from '../Item/ItemСont'

console.log(item1)
console.log(item2)
console.log(item3)
console.log(item4)

const Items = () => {
  const [catalogState] = useState([
    {
      id: 1,
      cardHeading: 'Item 1',
      name: 'Hummingbird cake',
      description:
        'A moist, fruity cake filled with bananas, pineapple, pecans, and frosted with cream cheese frosting',
      photo: '/react-homework1/static/media/ar.ddb29e0e.jpg',
      price: '$45',
    },
    {
      id: 2,
      cardHeading: 'Item 2',
      name: 'Belgium chocolate truffle',
      description:
        'Soft chocolate sponge layered indulgently with dark chocolate ganache.',
      photo: '/react-homework1/static/media/belgium.ef54fe10.jpg',
      price: '$80',
    },
    {
      id: 3,
      cardHeading: 'Item 3',
      name: 'Chocoholic Cake',
      description:
        'A sight to behold, our signature Chocoholic Cake is the perfect treat for chocolate lovers. A sponge base is layered with dark chocolate mousse, then milk chocolate mousse, and finished with a layer of white chocolate mousse. Each bite is an explosion of three different chocolate flavours in the mouth!',
      photo: '/react-homework1/static/media/chok.708f850f.jpg',
      price: '$60',
    },
    {
      id: 4,
      cardHeading: 'Item 4',
      name: 'New York Baked Cheese Cake',
      description:
        'This deliciously indulgent cream cheese dessert is considered to be a classic the world over. The New York Baked Cheese Cake is perfectly crafted and baked on a bed of fresh crumbled cookies. The silky-smooth texture of the cake comes from generous use of cream cheese and heavy whipping cream.',
      photo: '/react-homework1/static/media/cheesecake.6d17b02e.jpg',
      price: '$55',
    },
  ])
  return (
    <div id={s.wrapper}>
      <ItemCont catalogState={catalogState} />
    </div>
  )
}

export default Items
