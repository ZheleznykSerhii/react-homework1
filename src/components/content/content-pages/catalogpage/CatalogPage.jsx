import FiltersBar from "./components/FiltersBar/FiltersBar";
import Addition from "./components/Addition/Addition";
import Items from './components/Items/Items';

const Catalog = () => {
    return (
        <div>
            <Addition />
            <FiltersBar />
            <Items />
        </div>
    )
}
export default Catalog;