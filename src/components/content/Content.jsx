import React from 'react'
import HomePageContent from './content-pages/ContentHome'
import Catalog from './content-pages/catalogpage/CatalogPage'
import './content.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import cake1 from '../../img/ar.jpg'
import cake2 from '../../img/belgium.jpg'
import cake3 from '../../img/chok.jpg'
import cake4 from '../../img/carrot.PNG'
import cake5 from '../../img/confetti.PNG'
import cake6 from '../../img/strawb.PNG'
import cake7 from '../../img/cheesecake.jpg'
import cake8 from '../../img/chz.PNG'
import cake9 from '../../img/grap.PNG'
import cake10 from '../../img/sweet.PNG'
import cake11 from '../../img/sweet2.PNG'
import cake12 from '../../img/diabeticCake.PNG'
import ItemPage from './content-pages/catalogpage/ItemPage/ItemPage'
import Cart from './content-pages/catalogpage/components/CatalogMain/CartTest/cart'

const Content = () => {
  const [artState] = useState([
    {
      id: 1,
      title: 'Hummingbird cake',
      text: ' The tiny, fluttery hummingbird is the national bird of Jamaica (where it’s called the Doctor Bird), which is where this cake originated. The best-known recipe for this abundantly-moist and fragrant pineapple, banana, and pecan cake was submitted to Southern Living in 1978 by Mrs. L.H. Wiggins of Greensboro, North Carolina, and almost every rendition of the cake I’ve found follows a similar formula, because it’s clearly too good to be messed with. Zoe’s uses a little less oil, and a smidge less banana, although I added a little back.',
      link: 'hummingbird-cake',
      photo: './home/static/media/ar.ddb29e0e.jpg',
      price: 80,
      weight: 1200,
      diabetic: 'no',
    },
    {
      id: 2,
      title: 'Belgium chocolate truffle',
      text: ' Our signature Belgium Chocolate Truffle Cake is every chocolate connoisseur’s delight. Wonderfully textured, the soft chocolate sponge is layered with dark chocolate creamy ganache, making this dessert cake the perfect end to any meal, or a standalone indulgence. Elegant and dense with the sinful richness of chocolate cream, the moist eggless signature chocolate cake takes center stage on any occasion.',
      link: 'belgium-chocolate-truffle',
      photo: './home/static/media/belgium.ef54fe10.jpg',
      price: 60,
      weight: 1000,
      diabetic: 'no',
    },
    {
      id: 3,
      title: 'Chocoholic Cake',
      link: 'chocoholic-cake',
      text: 'A sight to behold, our signature Chocoholic Cake is the perfect treat for chocolate lovers. A sponge base is layered with dark chocolate mousse, then milk chocolate mousse, and finished with a layer of white chocolate mousse. Each bite is an explosion of three different chocolate flavours in the mouth!',
      photo: './home/static/media/chok.708f850f.jpg',
      price: 70,
      weight: 1100,
      diabetic: 'no',
    },
    {
      id: 4,
      title: 'Diabetic Carrot Cake',
      link: 'diabetic-carrot-cake',
      text: ' With this luscious take on an all-time favorite, you can fit this low-sugar cake into a diabetic meal plan with style.',
      photo: './home/static/media/carrot.e601e3c4.PNG',
      price: 30,
      weight: 700,
      diabetic: 'yes',
    },
    {
      id: 5,
      title: 'Confetti Birthday Cake',
      link: 'confetti-birthday-cake',
      text: ' This simple two-layer cake has colored sprinkles baked right in for a fun surprise in every bite, just like a Funfetti cake. It"s perfect for birthdays or any occasion that calls for a celebration.',
      photo: './home/static/media/confetti.23dc1dcf.PNG',
      price: 40,
      weight: 1000,
      diabetic: 'no',
    },
    {
      id: 6,
      title: 'Diabetic Black Cake',
      link: 'diabetic-black-cake',
      text: 'This delicious Egg-free | Gluten-Free | Sugar-Free | Diabetic Cake Recipe is a sugar-free, gluten-free and egg-free chocolate cake. A decadent and tasty dessert for everyone! This amazing Diabetic Cake uses regular ingredients.',
      photo: './home/static/media/diabeticCake.9e73019b.PNG',
      price: 55,
      weight: 1100,
      diabetic: 'yes',
    },
    {
      id: 7,
      title: 'New York Baked Cheese Cake',
      link: 'new-york-baked-cheese-cake',
      text: ' This deliciously indulgent cream cheese dessert is considered to be a classic the world over. The New York Baked Cheese Cake is perfectly crafted and baked on a bed of fresh crumbled cookies. The silky-smooth texture of the cake comes from generous use of cream cheese and heavy whipping cream.',
      photo: './home/static/media/cheesecake.6d17b02e.jpg',
      price: 50,
      weight: 1000,
      diabetic: 'no',
    },
    {
      id: 8,
      title: 'Cheesecake Cake',
      link: 'cheesecake-cake',
      text: ' A thin layer of airy sponge cake is covered with a delicate cheese mousse. Top of the cake is covered with fruit jelly and decorated with fruit. Light and delicious dessert will be a great gift or CatalogMain to a bouquet!',
      photo: '/home/static/media/chz.4b51b74e.PNG',
      price: 45,
      weight: 1000,
      diabetic: 'no',
    },
    {
      id: 9,
      title: 'Grape Cake',
      link: 'grape-cake',
      text: 'Canned fruit and jelly grape cake, especially popular among children, will become the color of any holiday',
      photo: './home/static/media/grap.fe6b470e.PNG',
      price: 80,
      weight: 1200,
      diabetic: 'no',
    },
    {
      id: 10,
      title: 'Sweet Life Cake',
      link: 'sweet-life-cake',
      text: ' This is our best vanilla cake recipe. A classic butter cake but with Japanese techniques applied for the most plush, soft and moist yellow cake like you’ve never had before. This professional bakery style cake stays fresh and moist for 4 days — that’s unheard of!',
      photo: './home/static/media/sweet.34cdd0d5.PNG',
      price: 60,
      weight: 1000,
      diabetic: 'no',
    },
    {
      id: 11,
      title: 'Cake "Sweet"',
      link: 'cake-sweet',
      text: ' Light pillow made of curd soufflé on which fruit pieces are laid out. A light and healthy dessert, and most importantly - delicious!',
      photo: './home/static/media/sweet2.67cc3980.PNG',
      price: 75,
      weight: 1000,
      diabetic: 'no',
    },
    {
      id: 12,
      title: 'Cake "Strawberry"',
      link: 'cake-strawberry',
      text: 'Delicate strawberry cake made from white delicate sponge cake, soaked in strawberry cream. Decorated with strawberry slices and covered with red jelly.',
      photo: './home/static/media/strawb.a6beb204.PNG',
      price: 55,
      weight: 900,
      diabetic: 'no',
    },
  ])

  return (
    <Routes>
      <Route path="/home" element={<HomePageContent artState={artState} />} />
      <Route path="/catalog" element={<Catalog artState={artState} />} />
      <Route path="/catalog/:link" element={<ItemPage artState={artState} />} />
      <Route path="/cart" element={<Cart artState={artState} />} />
    </Routes>
  )
}

export default Content

// Довелось захардкодити шлях до фото... через консоль лог отримував шлях, який вставляв у " photo:"
console.log(cake1)
console.log(cake2)
console.log(cake3)
console.log(cake4)
console.log(cake5)
console.log(cake6)
console.log(cake7)
console.log(cake8)
console.log(cake9)
console.log(cake10)
console.log(cake11)
console.log(cake12)
