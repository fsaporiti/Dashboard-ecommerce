import Nav from 'react-bootstrap/Nav';

function TabsExample() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/">Detalle</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/user">Usuarios</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default TabsExample;