import { useState, useEffect } from 'react'

function Productos () {

    const [productosAll, setProductos] = useState ([]);

    useEffect(() => {
        fetch("http://localhost:3100/api/products")
        .then(response => response.json())
        .then(data => {
            console.log(data.data.products)
            setProductos(data.data.products)
        }) 
        .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h2>Soy el componente Detail</h2>
            <ul>
                {productosAll.length === 0 && <p>Probando</p>}
                {
                    productosAll.map((producto, i) => {
                        return (
                            <li key={i}>
                                <h3>{producto.nombre}</h3>
                                <p>${producto.precio}</p>
                                <p>${producto.imagen}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )


}

export default Productos;