import React from 'react'
import HomePageContent from './content-pages/ContentHome'
import Catalog from './content-pages/catalogpage/CatalogPage'
import './content.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import conf from '../../img/diabeticCake.PNG'

// Довелось захардкодити шлях до фото... через консоль лог отримував шлях, який вставляв у " photo:"
console.log(conf)

const Content = () => {
  const [artState] = useState([
    {
      id: 1,
      title: 'Hummingbird cake',
      text: ' The tiny, fluttery hummingbird is the national bird of Jamaica (where it’s called the Doctor Bird), which is where this cake originated. The best-known recipe for this abundantly-moist and fragrant pineapple, banana, and pecan cake was submitted to Southern Living in 1978 by Mrs. L.H. Wiggins of Greensboro, North Carolina, and almost every rendition of the cake I’ve found follows a similar formula, because it’s clearly too good to be messed with. Zoe’s uses a little less oil, and a smidge less banana, although I added a little back.',
      photo: './home/static/media/ar.ddb29e0e.jpg',
      price: 80,
    },
    {
      id: 2,
      title: 'Belgium chocolate truffle',
      text: ' Our signature Belgium Chocolate Truffle Cake is every chocolate connoisseur’s delight. Wonderfully textured, the soft chocolate sponge is layered with dark chocolate creamy ganache, making this dessert cake the perfect end to any meal, or a standalone indulgence. Elegant and dense with the sinful richness of chocolate cream, the moist eggless signature chocolate cake takes center stage on any occasion.',
      photo: './home/static/media/belgium.ef54fe10.jpg',
      price: 60,
    },
    {
      id: 3,
      title: 'Chocoholic Cake',
      text: 'A sight to behold, our signature Chocoholic Cake is the perfect treat for chocolate lovers. A sponge base is layered with dark chocolate mousse, then milk chocolate mousse, and finished with a layer of white chocolate mousse. Each bite is an explosion of three different chocolate flavours in the mouth!',
      photo: './home/static/media/chok.708f850f.jpg',
      price: 70,
    },
    {
      id: 4,
      title: 'Diabetic Carrot Cake',
      text: ' With this luscious take on an all-time favorite, you can fit this low-sugar cake into a diabetic meal plan with style.',
      photo: './home/static/media/carrot.e601e3c4.PNG',
      price: 30,
    },
    {
      id: 5,
      title: 'Confetti Birthday Cake',
      text: ' This simple two-layer cake has colored sprinkles baked right in for a fun surprise in every bite, just like a Funfetti cake. It"s perfect for birthdays or any occasion that calls for a celebration.',
      photo: './home/static/media/confetti.23dc1dcf.PNG',
      price: 40,
    },
    {
      id: 6,
      title: 'Diabetic Black Cake',
      text: 'This delicious Egg-free | Gluten-Free | Sugar-Free | Diabetic Cake Recipe is a sugar-free, gluten-free and egg-free chocolate cake. A decadent and tasty dessert for everyone! This amazing Diabetic Cake uses regular ingredients.',
      photo: './home/static/media/diabeticCake.9e73019b.PNG',
      price: 55,
    },
    {
      id: 7,
      title: 'New York Baked Cheese Cake',
      text: ' This deliciously indulgent cream cheese dessert is considered to be a classic the world over. The New York Baked Cheese Cake is perfectly crafted and baked on a bed of fresh crumbled cookies. The silky-smooth texture of the cake comes from generous use of cream cheese and heavy whipping cream.',
      photo: './home/static/media/cheesecake.6d17b02e.jpg',
      price: 50,
    },
    {
      id: 8,
      title: 'Cheesecake Cake',
      text: ' A thin layer of airy sponge cake is covered with a delicate cheese mousse. Top of the cake is covered with fruit jelly and decorated with fruit. Light and delicious dessert will be a great gift or addition to a bouquet!',
      photo: '/home/static/media/chz.4b51b74e.PNG',
      price: 45,
    },
    {
      id: 9,
      title: 'Grape Cake',
      text: 'Canned fruit and jelly grape cake, especially popular among children, will become the color of any holiday',
      photo: './home/static/media/grap.fe6b470e.PNG',
      price: 80,
    },
    {
      id: 10,
      title: 'Sweet Life Cake',
      text: ' This is our best vanilla cake recipe. A classic butter cake but with Japanese techniques applied for the most plush, soft and moist yellow cake like you’ve never had before. This professional bakery style cake stays fresh and moist for 4 days — that’s unheard of!',
      photo: './home/static/media/sweet.34cdd0d5.PNG',
      price: 60,
    },
    {
      id: 11,
      title: 'Cake "Sweet"',
      text: ' Light pillow made of curd soufflé on which fruit pieces are laid out. A light and healthy dessert, and most importantly - delicious!',
      photo: './home/static/media/sweet2.67cc3980.PNG',
      price: 75,
    },
    {
      id: 12,
      title: 'Cake "Strawberry"',
      text: 'Delicate strawberry cake made from white delicate sponge cake, soaked in strawberry cream. Decorated with strawberry slices and covered with red jelly.',
      photo: './home/static/media/strawb.a6beb204.PNG',
      price: 55,
    },
  ])

  return (
    <Routes>
      <Route path="/home" element={<HomePageContent artState={artState} />} />
      <Route path="/catalog" element={<Catalog artState={artState} />} />
    </Routes>
  )
}

export default Content
