import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.error(err))
    }, [])
    return (
        <div className="px-4">
            <h1 className="fs-5 fw-bold mb-3">All Categories</h1>
            <ListGroup as={'ul'}>
                {
                    categories.map(category => (
                        <Link key={category.id} to={`/category/${category.id}`} className='text-body-secondary text-decoration-none'>
                            <ListGroup.Item
                                action
                                active={category.active ? true : undefined}
                                className="fs-6 fw-semibold text-center border-0 text-body-secondary py-3">
                                {category.name}
                            </ListGroup.Item>
                        </Link>
                    ))
                }
            </ListGroup>
        </div>
    );
};

export default LeftSideBar;