import CardGroup from 'react-bootstrap/CardGroup';
import PostCard from './PostCard/PostCard';
import { Col, Row } from 'react-bootstrap';

const HomePostGroup = ({ posts, users }) => {

    return (
        <Row xs={1} md={2} lg={3} className="g-4 mb-5">

            {posts?.map((el, idx) => (
                <Col key={idx}>
                    <PostCard item={el} author={users.find(item => item.id === el.userId)} />
                </Col>
            ))}
        </Row>
    );
};

export default HomePostGroup;