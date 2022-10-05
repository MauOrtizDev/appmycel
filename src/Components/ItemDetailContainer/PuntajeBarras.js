import './PuntajeBarras.css'

const PuntajeBarras = ({ crts }) => {
    console.log(crts);
    Object.keys(crts).map((key, index) => {

        console.log(index);
        console.log(`${key}: ${crts[key]}`)


    })
    return (
        <div>
            <h5>Características:</h5>

            {
                Object.keys(crts).map((key, index) =>

                    <div key={index}>
                        <h6>
                            {key}: {crts[key]}
                        </h6>

                        <div className="barra" style={{width: crts[key]+'%' }}>

                        </div>
                    </div>

                )
                // crts.map(caracteristica => {
                // console.log(caracteristica);
                // <li>
                //     {caracteristica}
                //     <div style={{ background: 'black', width: caracteristica.value }}>

                //     </div>
                // </li>

            }
        </div>
    )
}

export default PuntajeBarras