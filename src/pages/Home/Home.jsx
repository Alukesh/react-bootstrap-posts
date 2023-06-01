import { useEffect, useState } from "react";
import { getAllPosts, getAllUsers } from "../../axios/axiosApi";
import HomePostGroup from "../../components/HomePostGroup/HomePostGroup";
import Pagination from 'react-bootstrap/Pagination';
import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";

const Home = () => {
    const [page, setPage] = useState(1)
    const { posts, users } = useSelector(store => store)
    let items = [];

    useEffect(() => {
        // getAllPosts()
        //     .then(data => {
        //         setPosts(data)
        //     })
    }, [])
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item
                key={number}
                active={number === page}
                onClick={() => setPage(number)}
            >
                {number}
            </Pagination.Item>,
        );
    }

    if (posts.length == 0) {
        return (<Loader />)
    }

    return (
        <section className="container mt-4">
            Home
            <HomePostGroup posts={posts} users={users} />


            <Pagination>
                <Pagination.First />
                <Pagination.Prev onClick={() => setPage(prev => prev > 1 ? --prev : prev)} />
                {items}
                <Pagination.Next onClick={() => setPage(prev => prev < 5 ? ++prev : prev)} />
                <Pagination.Last />
            </Pagination>
        </section>
    );
};

export default Home;