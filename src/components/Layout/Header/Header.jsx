import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LOAD_POSTS } from '../../../redux/reducers/posts/actions';


const Header = () => {
    const dispatch = useDispatch()
    const {posts} = useSelector(store => store)

    const search = (event) => {
        dispatch({
            type: LOAD_POSTS,
            payload: { page: 0, search: event.target.value }
        })
    }

    return (
        <header>
            <Navbar key={'sm'} bg="dark" variant='dark' expand={'lg'} className="mb-3">
                <Container >
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'sm'}`} />
                    <Navbar.Brand as={Link} to={'/'}>Offposts</Navbar.Brand>

                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${'sm'}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${'sm'}`}
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'sm'}`}>
                                Offposts
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>

                            <Nav className="justify-content-end flex-grow-1 pe-3 " style={{ border: 'none' }} variant='dark'>
                               
                                <Nav.Link eventKey={'/'} as={Link} to="/">Список постов</Nav.Link>
                                <Nav.Link eventKey={'/about-me'} as={Link} to="/about-me">Обо мне</Nav.Link>
                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            value={posts?.search}
                            onChange={search}
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>

                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
