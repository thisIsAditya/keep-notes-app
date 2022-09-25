import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

const SideBar = () => {
  const expand = false;
  return (
    <Navbar bg="light" expand={expand} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#">TooDaloo App</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Filter
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Important and Urgent</Nav.Link>
              <Nav.Link href="#action1">Unimportant but Urgent</Nav.Link>
              <Nav.Link href="#action1">Important but Not Urgent</Nav.Link>
              <Nav.Link href="#action2">Not Important and Not Urgent</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

SideBar.propTypes = {};

export default SideBar;
