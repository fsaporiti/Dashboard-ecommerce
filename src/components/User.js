import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  const [usuarios, setUsuarios] = useState ([]);

  useEffect (() => {
    console.log('se monto el componente');
    fetch('http://localhost:3100/api/users/total')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setUsuarios(data.data.users)
      })
      .catch(error => console.error(error));
  }, [])

  useEffect(() => {
    console.log('se actualizo el componente');
  }, [usuarios])

  useEffect (() => {
    return () => console.log('se desmonto el componente');
  }, [])

  return (
    <Card style= {{ margin: '20px'}}>
        <Card.Body>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Correo electronico</th>
                </tr>
            </thead>
            <tbody>
              { usuarios.length === 0 && <p>Cargando</p>}
              { 
                usuarios.map((usuario, i) => {
                  return (
                    <tr key={i}>
                    <td>{usuario.id}</td>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.apellido}</td>
                    <td>{usuario.email}</td>
                    </tr>
                  )
                }) 
              }
               
            </tbody>
            </Table>
        </Card.Body>
    </Card>
  );
}

export default BasicExample;