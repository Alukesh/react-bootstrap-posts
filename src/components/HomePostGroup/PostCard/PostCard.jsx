import Card from 'react-bootstrap/Card';
import styles from './postCard.module.scss'
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { Button, Overlay, Popover } from 'react-bootstrap';

const HomePost = ({ item, author }) => {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };


    return (
        <Card className={styles.card__wrapper} style={{ height: "100%" }}>
            <Card.Body className={styles.card} >
                <Card.Title>{item?.title}</Card.Title>
                <Card.Text>
                    {item?.body}
                </Card.Text>
                <div className={styles.card__bottom}>
                    <div>
                        <Card.Link as={Link} to={'/user/' + author?.id}>
                            <Image width={40} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9KehZ0Xz2eEw6uQZDN7YcxdzRfLNfyDs-Hg&usqp=CAU" rounded />
                        </Card.Link>
                        {/* <Card.Subtitle>{author?.name}</Card.Subtitle> */}
                    </div>
                    <div>
                        <Card.Link href="#">Read More</Card.Link>
                        <Card.Link href="#">Other Posts</Card.Link>
                    </div>
                </div>
                <div ref={ref} className='mt-2'>
                    <Button onClick={handleClick}>Comments</Button>

                    <Overlay
                        show={show}
                        target={target}
                        placement="bottom"
                        container={ref}
                        containerPadding={20}
                    >
                        <Popover id="popover-contained">
                            <Popover.Header as="h3">Popover bottom</Popover.Header>
                            <Popover.Body>
                                <strong>Holy guacamole!</strong> Check this info.
                            </Popover.Body>
                        </Popover>
                    </Overlay>
                </div>
              
            </Card.Body>
        </Card>
    );
};

export default HomePost;