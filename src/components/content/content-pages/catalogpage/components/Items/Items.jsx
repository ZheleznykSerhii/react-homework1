import Item from "../Item/Item";
import item1 from '../../../../../../img/ar.jpg';
import item2 from '../../../../../../img/belgium.jpg';
import item3 from '../../../../../../img/chok.jpg';
import item4 from '../../../../../../img/cheesecake.jpg';
import s from './Items.module.css';

const Items = () => {
    return (
        <div id={s.wrapper}>
            <Item
                cardHeading='Item 1'
                photo={ item1 }
                name='Hummingbird cake'
                description='A moist, fruity cake filled with bananas, pineapple, pecans, and frosted with cream cheese frosting'
                price='$45'
            />
            <Item
                cardHeading='Item 2'
                photo={ item2 }
                name='Belgium chocolate truffle'
                description='Soft chocolate sponge layered indulgently with dark chocolate ganache.'
                price='$80'
            />
            <Item
                cardHeading='Item 3'
                photo={ item3 }
                name='Chocoholic Cake'
                description='A sight to behold, our signature Chocoholic Cake is the perfect treat for chocolate lovers. A sponge base is layered with dark chocolate mousse, then milk chocolate mousse, and finished with a layer of white chocolate mousse. Each bite is an explosion of three different chocolate flavours in the mouth!'
                price='$60'
            />
            <Item
                cardHeading='Item 4'
                photo={ item4 }
                name='New York Baked Cheese Cake'
                description='This deliciously indulgent cream cheese dessert is considered to be a classic the world over. The New York Baked Cheese Cake is perfectly crafted and baked on a bed of fresh crumbled cookies. The silky-smooth texture of the cake comes from generous use of cream cheese and heavy whipping cream.'
                price='$55'
            />
        </div>
    )
}

export default Items;