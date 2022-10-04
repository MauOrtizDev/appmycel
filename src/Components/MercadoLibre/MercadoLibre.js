import { useEffect, useState } from "react"

const MercadoLibre = () => {
    const [products,setProducts] = useState([])
    
    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=celulares')
        .then(response => {
            return response.json()})
        .then(res => {

            setProducts(res.results)
        })
        .catch(error => {console.log(error)})
    }, [])
    
    
    console.log(products)

    return (
        <div>
            <h1>MERCADO LIBRE</h1>
        </div>
    )
}

export default MercadoLibre