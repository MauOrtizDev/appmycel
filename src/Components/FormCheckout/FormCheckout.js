import { useState,useEffect} from 'react';
import './FormCheckout.css'

const FormCheckout = ({ onCreateOrder, cart }) => {

    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [isCartEmpty, setIsCartEmpty] = useState(true);

    useEffect(()=>{
        if(cart.length > 0){
            setIsCartEmpty(false)
        } else {
        }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ,[])

    if(isCartEmpty){
    return(
        <h3 className='text-danger'>Carrito Vacío :(</h3>
    )
}

    return (
        <form onSubmit={() => onCreateOrder(name, tel, email)}>
            <div>
                <label>Nombre<br/> 
                    <input
                        className='mx-3'
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>Teléfono <br/> 
                    <input
                        className='mx-3'
                        type="tel"
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>Email <br/> 
                    <input 
                        className='mx-3'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div className='text-center'>
            <input className='btn btn-success' type="submit" value="Crear Orden" />
            </div>
        </form>
    )
}

export default FormCheckout