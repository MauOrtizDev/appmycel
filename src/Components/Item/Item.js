import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ item }) => {
    return (

        <Link to={`/detail/${item.id}`} style={{ textDecoration: 'none', color: 'black' }}>
            <div className="card p-1 text-center">
                <h5>{item.nombre}</h5>
                <div className="w-100 text-center m-auto d-flex justify-content-around align-items-start">
                    {/* <div className="puntaje__fondo d-flex justify-content-center align-items-center text-center">
                    <div className="puntuacion d-flex justify-content-center">
                        <div>
                            <div className="puntaje_num">48</div>
                            <div className="palabra__puntos">PUNTOS</div>
                        </div>
                    </div>
                </div> */}
                    <img src={"/celulares/" + item.nombre.toLowerCase() + ".webp"} alt={item.nombre} />

                    <div className='d-flex flex-column'>
                        <button className="btn-comparacion py-2">
                            Ver Detalle
                        </button>
                        <h6 className='my-3'>Precio </h6>
                        <h5>${Intl.NumberFormat('es-CO').format(item.precio)}</h5>
                        <button className="btn-comparacion py-2 my-2" disabled>
                            Comprar
                        </button>
                        <h6 className='my-5'>En Stock: {item.stock}</h6>
                    </div>
                </div>
                {/* <ul>
                <li>Diseño: 45
                    <div className="barra">
                    </div>
                </li>
                <li>Pantalla: 33
                    <div className="barra">
                    </div>
                </li>
            </ul> */}
            </div>
        </Link>


    )
}

export default Item