import { useEffect, useState } from "react";
import { getAllPosts, getAllUsers } from "../../axios/axiosApi";
import HomePostGroup from "../../components/HomePostGroup/HomePostGroup";
import Pagination from 'react-bootstrap/Pagination';

const Home = () => {
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)
    let items = [];
    
    useEffect(() => {
        getAllPosts()
            .then(data => {
                // console.log(data);
                setPosts(data)
            })
        getAllUsers()
            .then(res => {
                // console.log(res);
                setUsers(res)
            })

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

    return (
        <section className="container mt-4">
            Home
            <HomePostGroup posts={posts} users={users} />

            
            <Pagination>
                <Pagination.First />
                <Pagination.Prev onClick={() => setPage(prev => prev > 1 ? --prev : prev)}/>
                {items}
                <Pagination.Next onClick={() => setPage(prev => prev < 5 ? ++prev : prev)}/>
                <Pagination.Last />
            </Pagination>
        </section>
    );
};

export default Home;