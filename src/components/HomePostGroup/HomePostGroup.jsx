import CardGroup from 'react-bootstrap/CardGroup';
import PostCard from './PostCard/PostCard';
import { Col, Row } from 'react-bootstrap';

const HomePostGroup = () => {
    return (
        <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 14 }).map((_, idx) => (
                <Col key={idx}>
                   <PostCard/>
                </Col>
            ))}
        </Row>
    );
};

export default HomePostGroup;