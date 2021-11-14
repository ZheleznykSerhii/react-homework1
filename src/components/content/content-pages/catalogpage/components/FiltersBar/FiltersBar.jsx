import Button from "../../../../../../common/button";
import Select from "../Select/Select";
import bar from './FiltersBar.module.css';

const FiltersBar = () => {
    return (
        <div className={bar.filtersBar}>
            <div className={bar.set}>
                <Select text=' 1'/>
                <Select text=' 2'/>
                <Select text=' 3'/>
            </div>
            <div className={bar.btn}>
                <Button text='Apply'/>
            </div>
        </div>
    )
}

export default FiltersBar;