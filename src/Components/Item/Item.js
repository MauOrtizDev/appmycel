import './Item.css'

const Item = ({ item }) => {
    return (

        
        <div className="card p-1">
            <h5>{item.nombre}</h5>
            <div className="w-100 text-center m-auto d-flex justify-content-around align-items-start">
                <div className="puntaje__fondo d-flex justify-content-center align-items-center text-center">
                    <div className="puntuacion d-flex justify-content-center">
                        <div>
                            <div className="puntaje_num">48</div>
                            <div className="palabra__puntos">PUNTOS</div>
                        </div>
                    </div>
                </div>
                <img src={"/celulares/"+item.nombre.toLowerCase()+".webp"} alt={item.nombre} />
                <button className="btn-comparacion">
                    Comprar
                </button>
            </div>
            <ul>
                <li>Diseño: 45
                    {/* <div className="barra">
                    </div> */}
                </li>
                <li>Pantalla: 33
                    {/* <div className="barra">
                    </div> */}
                </li>
            </ul>
        </div>


    )
}

export default Item

{/* <h5>{item.nombre}</h5>

<div className="w-100 text-center m-auto d-flex justify-content-around align-items-start">
    <div className="puntaje__fondo d-flex justify-content-center align-items-center text-center" style="background: conic-gradient(rgba(73, 32, 255, 0.733), rgba(51, 245, 125, 0.733) 16%, rgba(197, 27, 132, 0.733) 32%, rgba(197, 27, 132, 0.733) 47.9%, white 48%, white);">
        <div className="puntuacion d-flex justify-content-center">
            <div>
                <div className="puntaje_num">48</div>
                <div className="palabra__puntos">PUNTOS</div>
            </div>
        </div>
    </div>
    <img src="./multimedia/celulares/vivo y77e (t1).webp"/>
    <button className="btn-comparacion">
        Compara
    </button>
</div>
<ul>
    <li>Diseño: 45
        <div className="barra" style="width: 45%;">
        </div>
    </li>
    <li>Pantalla: 33
        <div className="barra" style="width: 33%;">
        </div>
    </li>
</ul> */}