import { useDispatch } from "react-redux";
import { LOAD_POSTS } from "../../../redux/reducers/posts/index";
import Pagination from 'react-bootstrap/Pagination';

const PostsPagination = ({ posts }) => {
    const dispatch = useDispatch()
    let items = [];


    const changePage = (newPage) => {
        dispatch({
            type: LOAD_POSTS,
            payload: { page: newPage, search: posts?.search }
        })
    }

    for (let number = 0; number <= 12; number++) {
        const currentPage = number === posts?.page
        items.push(
            <Pagination.Item
                key={number}
                active={currentPage}
                onClick={() => !currentPage && changePage(number)}
            >
                {number + 1}
            </Pagination.Item>,
        );
    }

    return (
        <Pagination style={{ overflow:'auto'}} className="py-4">
            <Pagination.First />
            <Pagination.Prev onClick={() => posts?.page > 0 && changePage(posts?.page - 1)} />
            {items}
            <Pagination.Next onClick={() => posts?.page < 12 && changePage(posts?.page + 1)} />
            <Pagination.Last />
        </Pagination>
    );
};

export default PostsPagination;