import Nav from 'react-bootstrap/Nav';

function TabsExample() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/">Productos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/vendidos">Vendidos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/user">Usuarios</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default TabsExample;