import Card from 'react-bootstrap/Card';
import styles from './postCard.module.scss'
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { Button, Collapse, Popover } from 'react-bootstrap';
import { apiPlaceholderGet } from '../../../axios/axiosApi';

const HomePost = ({ item, author, userPage }) => {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const [comments, setComments] = useState([])
    const ref = useRef(null);

    const wait = new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve()
        }, 500);
    })
    const getComments = async () => {
        // await wait()
        await apiPlaceholderGet(`posts/${item.id}/comments`)
            .then(data => {
                setComments(data)
                console.log(data);
            })
    }


    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
        !comments?.length && getComments()
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
                        {
                            userPage ? '' :
                                <>
                                    <Link to={'/user/' + author?.id}>
                                        <Image width={40} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9KehZ0Xz2eEw6uQZDN7YcxdzRfLNfyDs-Hg&usqp=CAU" rounded />
                                    </Link>
                                    <Card.Subtitle>{author?.name}</Card.Subtitle>
                                </>
                        }
                    </div>
                    <div>
                        <Card.Link href="#">Read More</Card.Link>
                        {
                            userPage ? '' :
                                <Card.Link href="#">Other Posts</Card.Link>
                        }
                    </div>
                </div>

                <div ref={ref} className='mt-2'>
                    <Button
                        onClick={handleClick}
                        aria-controls="example-collapse-text"
                        aria-expanded={show}
                    >
                        Comments
                    </Button>
                    <div style={{ minHeight: '20px' }}>
                        <Collapse in={show} dimension="width">
                            <div id="example-collapse-text">
                                <Card body style={{ border: 'none'}}  className={styles.card__popover}>
                                    <Popover id="popover-contained" className={styles.card__comments}>
                                        {
                                            comments?.map(el => (
                                                <>
                                                    <Popover.Header as="h3">{el.email}</Popover.Header>
                                                    <Popover.Body>
                                                        <strong>{el.name}</strong> {el.body}
                                                    </Popover.Body>
                                                </>
                                            ))
                                        }
                                    </Popover>
                                </Card>
                            </div>
                        </Collapse>
                    </div>
                 
                </div>
            </Card.Body>
        </Card>
    );
};

export default HomePost;