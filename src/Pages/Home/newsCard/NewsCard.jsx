import moment from "moment/moment";
import { Card, Image } from "react-bootstrap";
import { BsEyeFill, BsShare, BsStar, BsStarFill } from "react-icons/bs";
import { RxBookmarkFilled } from "react-icons/rx";
import Rating from "react-rating";
import { Link } from "react-router-dom";
const NewsCard = ({ news }) => {
    const { author, title, details, rating, total_view, image_url, _id } = news;
    return (
        <div>
            <Card className="mb-3">
                <Card.Header className="d-flex justify-content-between py-3">
                    <div className="d-flex gap-2 align-items-center">
                        <Image src={author.img} roundedCircle width={40} height={40} />
                        <div className="d-flex flex-column">
                            <h4 className="fs-6 fw-semibold">{author.name}</h4>
                            <p className="fs-6 mb-0">{moment(author?.published_date).format('yyyy-MM-D')}</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center gap-3 fs-5">
                        <RxBookmarkFilled />
                        <BsShare />
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>

                    <Card.Img variant="top" src={image_url} className=" py-2" alt={title} />

                    <div className="text-truncate-container">
                        <Card.Text>
                            {
                                details.length < 250 ? <>{details}</> : <>
                                    {details.slice(0, 250)}...
                                    <Link to={`/news/${_id}`} className='text-warning fw-bold text-decoration-none'>Read More</Link>
                                </>
                            }
                        </Card.Text>
                    </div>
                </Card.Body>
                <div className="p-4 border-top text-muted">
                    <div className="d-flex gap-2 align-items-center justify-content-between">
                        <div className="d-flex align-items-center fs-6 gap-2">
                            <div className="stars text-warning">
                                <Rating
                                    placeholderRating={rating.number}
                                    emptySymbol={<BsStar />}
                                    placeholderSymbol={<BsStarFill />}
                                    fullSymbol={<BsStarFill />}
                                    readonly
                                />
                            </div>
                            <h5 className="mb-0">
                                {rating.number}
                            </h5>
                        </div>
                        <div className="d-flex align-items-center fs-6 gap-2">
                            <BsEyeFill className="fs-5" />{total_view}
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default NewsCard;