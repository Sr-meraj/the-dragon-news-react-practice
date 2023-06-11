import { useState } from "react";
import { useEffect } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";
import { NewsLoader } from "../../Loader/Loader";

const NewsDetails = () => {
    const loadedDetails = useLoaderData();
    const { title, image_url, details, category_id } = loadedDetails;
    const news = NewsLoader()
    const [relatedNews, setRelatedNews] = useState([])

    useEffect(() => {
        news.then(data => setRelatedNews(data)).catch(err => console.error(err))

    }, [news])
    return (
        <div>
            <h4 className="fw-bolder fs-4">Dragon News</h4>
            <div className="py-4">
                <Card>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {details}
                        </Card.Text>
                        <Link to={`/category/${category_id}`}>
                            <Button variant="danger">
                                <BsArrowLeft /> All new in this category
                            </Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <h4 className="fw-bolder fs-4">Related News</h4>
                <div className="py-4">
                    <Row xs={1} md={3} className="g-3">
                        {relatedNews.slice(7, 10).map((news, idx) => (
                            <Col key={idx}>
                                <Card className="h-100">
                                    <Card.Img variant="top" src={news.image_url} />
                                    <Card.Body>
                                        <Card.Title className="fs-6">{news.title}</Card.Title>
                                        <div className=" w-100">
                                            <p className="card-text text-truncate">{news.details}</p>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;