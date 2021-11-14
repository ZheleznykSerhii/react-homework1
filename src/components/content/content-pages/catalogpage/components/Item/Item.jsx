import Button from "../../../../../../common/button";
import s from './Item.module.css';

const Item = ({ cardHeading, photo, name, description, price }) => {
    return (
        <div className={s.card}>
            <span>
                <h4>{ cardHeading }</h4>
                <img src={photo} alt='apperance' className={s.cardImg} width='100%' />
                <h3 className={s.name}>{ name }</h3>
                <h3 className={s.desc}>{ description }</h3>
            </span>
            <div className={s.footer}>
                <div><h4><b>Price :</b></h4><span>{ price }</span></div>
                <Button text="View more" className={s.btn} />
            </div>
        </div>
    )
}

export default Item;