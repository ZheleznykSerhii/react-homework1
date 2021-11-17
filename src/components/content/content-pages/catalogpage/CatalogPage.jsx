import FiltersBar from './components/FiltersBar/FiltersBar'
import Addition from './components/Addition/Addition'
import Items from './components/Items/Items'

const Catalog = ({ artState }) => {
  return (
    <div>
      <Addition />
      <FiltersBar />
      <Items artState={artState} />
    </div>
  )
}
export default Catalog
