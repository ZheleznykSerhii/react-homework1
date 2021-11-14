import search from '../../../../../../img/search.png';
import s from './Addition.module.css';

const Addition = () => {
    return (
        <div className={s.wrapper_addition}>
            <input type='text' />
            <img className={s.imgAd} src={ search } alt='search-icon' width='16px'/>
        </div>
    )
}

export default Addition;
