import {  useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const UserPosts = () => {
    const userData = useSelector(store => store.app.userPage)
    console.log(userData);


    return (
        <Card className=" text-center">
            <Card.Header>{userData.username || 'Featured'}</Card.Header>
            <Card.Body>
                <Card.Title>{userData.name || 'Special title treatment'}</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">{userData.phone || 'call number'}</Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default UserPosts;