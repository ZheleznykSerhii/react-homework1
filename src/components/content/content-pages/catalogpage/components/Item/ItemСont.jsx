import Item from './Item'

const ItemCont = ({ catalogState }) => {
  return (
    <div className="artMain">
      {catalogState.map((items) => (
        <Item key={items.id} {...items} />
      ))}
    </div>
  )
}

export default ItemCont
