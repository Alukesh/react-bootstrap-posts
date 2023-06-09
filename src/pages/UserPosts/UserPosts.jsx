import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import HomePostGroup from '../../components/HomePostGroup/HomePostGroup';
import phone from '../../assets/phone-number-svgrepo-com.svg'
import Loader from '../../components/Loader/Loader';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import styles from './userPosts.module.css'
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardOverlay,
    MDBCardImage
} from 'mdb-react-ui-kit';

const UserPosts = () => {
    const { userPage } = useSelector(store => store)
    const userData = userPage?.data;
    
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const panelStyle = {
        height: '300px'
    }
    
    const linkToCall = userData?.phone ? `tel:${userData?.phone?.replace(/\D/g, '')}` : '#'

    return (
        <section style={{ backgroundColor: '#eee' }}>
            {
                userPage?.loading ?
                    (<Loader />)
                    :
                    <Card className="py-5 container text-center">

                        <BreadCrumbs items={[{ path: '/', text: 'Home' }]} active={userData?.name} />

                        <Card.Header>{userData.username || 'Featured'}</Card.Header>
                        <Card.Body>
                            <MDBCard background='dark' className='text-white'>
                                <MDBCardImage overlay style={panelStyle} src='https://mdbootstrap.com/img/new/slides/017.webp' alt='...' />
                                <MDBCardOverlay>
                                    <MDBCardTitle>Card title</MDBCardTitle>
                                    <MDBCardText>
                                        This is a wider card with supporting text below as a natural lead-in to additional content. This
                                        content is a little bit longer.
                                    </MDBCardText>
                                    <div className={styles.iconUser}>
                                        <Card.Img height={60} style={{ aspectRatio: '1/1', width: '60px' }} src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp' />
                                    </div>
                                    <MDBCardText>Last updated 3 mins ago</MDBCardText>
                                </MDBCardOverlay>
                            </MDBCard>

                            <Card.Title>{userData.name || 'Special title treatment'}</Card.Title>
                            <Card.Text>
                                {userData?.company?.bs}
                            </Card.Text>
                            <a href={linkToCall}>
                                <Button variant="primary" className='m-2'>
                                    <img width={20} src={phone} alt="call" /> .
                                    {userData?.phone || 'no number'}
                                </Button>
                            </a>
                            <a href={'https://' + userData?.website || '#'}>
                                <Button variant="primary">
                                    website: {userData?.website}
                                </Button>
                            </a>
                        </Card.Body>
                        <Card.Footer className="text-muted mb-5">Have Posts</Card.Footer>


                        <HomePostGroup posts={userData.posts} users={[userData]} userPage={true} />
                    </Card>
            }
        </section>
    );
};

export default UserPosts;