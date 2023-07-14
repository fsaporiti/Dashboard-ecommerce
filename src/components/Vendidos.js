import { useState, useEffect } from 'react'

function Vendidos () {

    const [productosAll, setProductos] = useState ([]);

    useEffect(() => {
        fetch("http://localhost:3100/api/users/vendidos")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setProductos(data.data.products)
        }) 
        .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h2>Productos Vendidos</h2>
            <ul>
                {productosAll.length === 0 && <p>Probando</p>}
                {
                    productosAll.map((producto, i) => {
                        return (
                            <li key={i}>
                                <h3>{producto.nombre}</h3>
                                <p>${producto.precio}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )


}

export default Vendidos;