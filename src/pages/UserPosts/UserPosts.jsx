import {
    MDBCol,
    MDBRow,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
} from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import HomePostGroup from '../../components/HomePostGroup/HomePostGroup';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import phone from '../../assets/phone-number-svgrepo-com.svg'


const UserPosts = () => {
    const userData = useSelector(store => store.app.userPage)
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className='' style={{ backgroundColor: '#eee' }}>
            <Card className="py-5 container text-center">
                <MDBRow>
                    <MDBCol>
                        <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                            <MDBBreadcrumbItem>
                                <Link to={'/'}>Home</Link>
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem active>{userData.name || 'Special title treatment'}</MDBBreadcrumbItem>
                        </MDBBreadcrumb>
                    </MDBCol>
                </MDBRow>
                <Card.Header>{userData.username || 'Featured'}</Card.Header>
                <Card.Body>
                    <Card.Title>{userData.name || 'Special title treatment'}</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">
                        <img width={20} src={phone} alt="" /> .
                        { userData?.phone || 'call number'}
                    </Button>
                </Card.Body>
                <Card.Footer className="text-muted mb-5">2 days ago</Card.Footer>
                <HomePostGroup posts={userData.posts} users={[userData]} userPage={true}/>
            </Card>
        </section>
    );
};

export default UserPosts;