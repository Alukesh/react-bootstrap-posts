import {
    MDBCol,
    MDBRow,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
} from 'mdb-react-ui-kit';
import { useSelector } from "react-redux";
import HomePostGroup from "../../components/HomePostGroup/HomePostGroup";
import Loader from "../../components/Loader/Loader";
import PostsPagination from '../../components/HomePostGroup/PostsPagination/PostsPagination';

const Home = () => {
    const { users } = useSelector(store => store.app)
    const { posts } = useSelector(store => store)




    return (
        <section className=" mb-4 py-5" style={{ backgroundColor: '#eee', position: 'relative' }}>
            {
                posts?.loading ?
                    (<Loader />)
                    : <>
                        <div className="container text-center">
                            <MDBRow>
                                <MDBCol>
                                    <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                                        <MDBBreadcrumbItem active>Home</MDBBreadcrumbItem>
                                    </MDBBreadcrumb>
                                </MDBCol>
                            </MDBRow>
                            <HomePostGroup posts={posts?.data} users={users} />


                            <PostsPagination posts={posts} />
                        </div>
                    </>

            }
        </section>
    );
};

export default Home;