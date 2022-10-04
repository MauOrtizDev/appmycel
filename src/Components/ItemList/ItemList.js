import Item from "../Item/Item"


const ItemList = ({ productos }) => {

    return (


        <div id="productos" className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-3">

            {productos.map(prod =>

                <Item item={prod} key={prod.id}/>

            )}

        </div>
    )
}

export default ItemList