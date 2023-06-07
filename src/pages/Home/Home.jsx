import {
    MDBCol,
    MDBRow,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
} from 'mdb-react-ui-kit';
import { useState } from "react";
import { useSelector } from "react-redux";
import HomePostGroup from "../../components/HomePostGroup/HomePostGroup";
import Pagination from 'react-bootstrap/Pagination';
import Loader from "../../components/Loader/Loader";

const Home = () => {
    const [page, setPage] = useState(1)
    const { users } = useSelector(store => store.app)
    const { posts } = useSelector(store => store)
    console.log(posts);
    let items = [];


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

    if (posts?.data?.length == 0) {
        return (<Loader />)
    }

    return (
        <section className=" mb-4 py-5" style={{ backgroundColor: '#eee' }}>
            <div className="container text-center">
                <MDBRow>
                    <MDBCol>
                        <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                            <MDBBreadcrumbItem active>Home</MDBBreadcrumbItem>
                        </MDBBreadcrumb>
                    </MDBCol>
                </MDBRow>
                {/* Home */}
                <HomePostGroup posts={posts.data} users={users} />


                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev onClick={() => setPage(prev => prev > 1 ? --prev : prev)} />
                    {items}
                    <Pagination.Next onClick={() => setPage(prev => prev < 5 ? ++prev : prev)} />
                    <Pagination.Last />
                </Pagination>
            </div>
        </section>
    );
};

export default Home;