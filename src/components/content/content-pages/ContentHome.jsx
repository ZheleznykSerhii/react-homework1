import React from 'react'
import Heading from '../../../img/heading.PNG'
import Art from '../../../img/art.PNG'
import Button from '../../../common/button'
import ArtMain from './homepageComponents/ArtMain'
import Belgum from '../../../img/belgum.PNG'
import Choko from '../../../img/choko.PNG'
import HeaderPart from './HeaderPart'

const HomePageContent = () => {
  return (
    <div className="content-main">
      <HeaderPart heading={Heading} />
      <div className="bottom-part">
        <ArtMain
          title="Hummingbird cake"
          text=" The tiny, fluttery hummingbird is the national bird of Jamaica (where it’s called the Doctor Bird), which is where this cake originated. The best-known recipe for this abundantly-moist and fragrant pineapple, banana, and pecan cake was submitted to Southern Living in 1978 by Mrs. L.H. Wiggins of Greensboro, North Carolina, and almost every rendition of the cake I’ve found follows a similar formula, because it’s clearly too good to be messed with. Zoe’s uses a little less oil, and a smidge less banana, although I added a little back. I added some allspice because I love the way it rounds things out, and use my own cream cheese frosting, with much less sugar than usual."
          photo={Art}
        />
        <ArtMain
          title="Belgium chocolate truffle"
          text=" Our signature Belgium Chocolate Truffle Cake is every chocolate connoisseur’s delight. Wonderfully textured, the soft chocolate sponge is layered with dark chocolate creamy ganache, making this dessert cake the perfect end to any meal, or a standalone indulgence. Elegant and dense with the sinful richness of chocolate cream, the moist eggless signature chocolate cake takes center stage on any occasion."
          photo={Belgum}
        />
        <ArtMain
          title="Hummingbird cake"
          text="A sight to behold, our signature Chocoholic Cake is the perfect treat for chocolate lovers. A sponge base is layered with dark chocolate mousse, then milk chocolate mousse, and finished with a layer of white chocolate mousse. Each bite is an explosion of three different chocolate flavours in the mouth!"
          photo={Choko}
        />
      </div>
      <Button text="View more" />
    </div>
  )
}

export default HomePageContent
