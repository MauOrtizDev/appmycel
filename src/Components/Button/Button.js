const Button = ({ label, tipo, accion }) => {
    const clase = `btn btn-${tipo}`
    return <button className={clase} onClick={accion}>{label}</button>

}

export default Button