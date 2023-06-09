import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { LOAD_POSTS } from '../../../redux/reducers/posts/index';
import { Image } from 'react-bootstrap';
import './header.css'


const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { posts } = useSelector(store => store)

    const search = (event) => {
        if (window.location.pathname !== '/') {
            navigate('/')
        }
        dispatch({
            type: LOAD_POSTS,
            payload: { page: 0, search: event.target.value }
        })
    }

    return (
        <header>
            <Navbar key={'sm'} bg="dark" variant='dark' expand={''} className="mb-3">
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
                                <Navbar.Toggle aria-labelledby={`offcanvasNavbarLabel-expand-${'sm'}`}>
                                    <Image width={40} src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" style={{ borderRadius: '50%' }} />
                                    <Nav.Link eventKey={'/about-me'} as={Link} to="/about-me">akenzhebaev422@gmail.com</Nav.Link>
                                </Navbar.Toggle>
                                <Navbar.Toggle aria-labelledby={`offcanvasNavbarLabel-expand-${'sm'}`}>
                                    <Nav.Link eventKey={'/'} as={Link} to="/">Список постов</Nav.Link>
                                </Navbar.Toggle>
                                <Navbar.Toggle aria-labelledby={`offcanvasNavbarLabel-expand-${'sm'}`}>
                                    <Nav.Link eventKey={'/about-me'} as={Link} to="/about-me">Обо мне</Nav.Link>
                                </Navbar.Toggle>
                            </Nav> <br />

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>

                    <Form className="d-flex search">
                        
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            value={posts?.search}
                            onChange={search}
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form>

                    <Nav id='header-avatar' className="justify-content-end flex-grow-1 pe-3 " style={{ border: 'none', flexDirection: 'row' }} variant='dark'>
                        <Image width={40} src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" style={{ borderRadius: '50%' }} />
                        <Nav.Link eventKey={'/about-me'} as={Link} to="/about-me">akenzhebaev422@gmail.com</Nav.Link>
                    </Nav>

                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
