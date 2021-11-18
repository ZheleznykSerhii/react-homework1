import CatalogMain from './components/CatalogMain/CatalogMain'

const Catalog = ({ artState }) => {
  return (
    <div>
      <CatalogMain artState={artState} />
    </div>
  )
}
export default Catalog

// <Items artState={artState} /> <FiltersBar artState={artState} /> Були перенесені всередину компоненти, щоб інфо з інпута всередині одразу ж передавати, з часом пофікшу
