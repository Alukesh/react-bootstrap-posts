import { useDispatch, useSelector } from "react-redux";
import { Button, Card } from "react-bootstrap";
import { LOAD_POSTS } from "../../redux/reducers/posts";
import Loader from "../../components/Loader/Loader";
import HomePostGroup from "../../components/HomePostGroup/HomePostGroup";
import PostsPagination from '../../components/HomePostGroup/PostsPagination/PostsPagination';
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";

const Home = () => {
    const dispatch = useDispatch()
    const { users } = useSelector(store => store.app)
    const { posts } = useSelector(store => store)

    const clearSearchPosts = () => {

        dispatch({
            type: LOAD_POSTS,
            payload: { page: 0, search: '' }
        })
    }


    return (
        <section className="  py-5" style={{ backgroundColor: '#eee', position: 'relative' }}>
            {
                posts?.loading ?
                    (<Loader />)
                    : 
                    posts?.data?.length ? 
                    <>
                        <div className="container text-center">

                            <BreadCrumbs active={'Home'}/>

                            <HomePostGroup posts={posts?.data} users={users} />

                            <PostsPagination posts={posts} />
                        </div>
                    </>
                    : 
                    <Card className="container" >
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <Card.Title>По запросу "{posts?.search}" нет постов</Card.Title>
                            <Card.Text>
                                Удалить строку поиска и вернуться к главной странице?
                            </Card.Text>
                            <Button variant="primary" onClick={clearSearchPosts}>Назад</Button>
                        </Card.Body>
                    </Card>
            }
        </section>
    );
};

export default Home;