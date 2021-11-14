import FiltersBar from "./components/FiltersBar/FiltersBar";
import Addition from "./components/Addition/Addition";
import Items from './components/Items/Items';
import Nav from '../../../nav/Nav';

const Catalog = () => {
    return (
        <div>
            <Nav />
            <Addition />
            <FiltersBar />
            <Items />
        </div>
    )
}
export default Catalog;