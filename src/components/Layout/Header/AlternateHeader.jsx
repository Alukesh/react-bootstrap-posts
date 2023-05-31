import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import Logo  from "../../../assets/react.svg";


const AlternateHeader = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
            <Container fluid>
                <Navbar.Brand as={Link} to={'/'}>
                    <img
                        src={Logo}
                        alt=''
                        width='90'
                        height='30'
                        className='d-inline-block align-top'
                    />
                    Offposts
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='mr-auto'>
                        <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
                        <Nav.Link as={Link} to={'/about-me'}>About-me</Nav.Link>
                        <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
                            <NavDropdown.Item>Action</NavDropdown.Item>
                            <NavDropdown.Item>Another action</NavDropdown.Item>
                            <NavDropdown.Item>Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item>Separated Link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link>More deets</Nav.Link>
                        <Nav.Link>Dank memes</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default AlternateHeader;