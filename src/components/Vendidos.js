import { useState, useEffect } from 'react'

function Vendidos () {

    const [productosAllV, setProductosV] = useState ([]);

    useEffect(() => {
        fetch("http://localhost:3100/api/products/vendidos")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setProductosV(data.metadata.quantity)
        }) 
        .catch(error => console.log(error))
    }, [])

    return (
        <div>
           <p style={{color:'rgb(19, 228, 0)', fontWeight: "bold", padding: "12px", fontSize: "20px" }}>{productosAllV}</p>
        </div>
    )


}

export default Vendidos;