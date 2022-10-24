import './PuntajeBarras.css'

const PuntajeBarras = ({ crts }) => {

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
            }
        </div>
    )
}

export default PuntajeBarras