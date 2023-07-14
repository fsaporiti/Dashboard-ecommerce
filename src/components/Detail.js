import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Vendidos from './Vendidos';

import { useState, useEffect } from 'react'

function GroupExample() {

  const [productosAll, setProductos] = useState ([]);
  const [productosAllV, setProductosV] = useState ([]);

    useEffect(() => {
        fetch('http://localhost:3100/api/products')
        .then(response => response.json())
        .then(data => {
           console.log(data.data.quantity)
            setProductos(data.data.quantity)
        }) 
        .catch(error => console.log(error))
    }, []);

  const [usuarios, setUsuarios] = useState ([]);

  useEffect (() => {
    fetch('http://localhost:3100/api/users/total')
      .then(response => response.json())
      .then(data => {
        setUsuarios(data.metadata.quantity)
      })
      .catch(error => console.error(error));
  }, [])

  return (
    <CardGroup border="secundary" style= {{ margin: '20px', borderTop: '1px solid grey', paddingTop: '20px'}}>
      <Card style= {{ margin: '10px'}}>
        <Card.Body className='cartas'>
          <Card.Title style={{color:'orange', textAlign: 'center'}}>Productos en stock</Card.Title>
          <Card.Text>
              <p style={{color:'orange', fontWeight: "bold", padding: "12px", fontSize: "20px" }}>{productosAll}</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style= {{ margin: '10px'}}>
      <Card.Body className='cartas2'>
          <Card.Title style={{color:'rgb(19, 228, 0)', textAlign: 'center'}}>Productos vendidos</Card.Title>
          <Card.Text>
              {/* <p style={{color:'rgb(19, 228, 0)', fontWeight: "bold", padding: "12px", fontSize: "20px" }}>{productosAllV}</p> */}
              <Vendidos {...productosAllV} />
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style= {{ margin: '10px'}}>
        <Card.Body className='cartas3'>
          <Card.Title style={{color:'blue', textAlign: 'center'}}>Cantidad de usuarios</Card.Title>
          <Card.Text>
              <p style={{color:'blue', fontWeight: "bold", padding: "12px", fontSize: "20px" }}>{usuarios}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;