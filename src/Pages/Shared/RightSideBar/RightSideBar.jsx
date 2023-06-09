import { Button, ListGroup } from "react-bootstrap";
import { FcGoogle } from 'react-icons/fc'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook, BsGithub, BsInstagram } from 'react-icons/bs'
import QZone from "../QZone/QZone";

const RightSideBar = () => {
    return (
        <div>
            <div className="mb-4">
                <h3 className="fs-4 fw-bold pb-3">Login With</h3>
                <div className="d-flex flex-column gap-2">
                    <Button variant="outline-primary">
                        <FcGoogle className="fs-4" /> Login with Google
                    </Button>
                    <Button variant="outline-secondary">
                        <BsGithub className="fs-4" /> Login with Github
                    </Button>
                </div>
            </div>
            <div className="mb-4">
                <h3 className="fs-4 fw-bold pb-3">Find Us On</h3>
                <div className="">
                    <ListGroup>
                        <ListGroup.Item className="py-3">
                            <BsFacebook className="fs-4 me-3" /> Facebook
                        </ListGroup.Item>
                        <ListGroup.Item className="py-3">
                            <AiFillTwitterCircle className="fs-4 me-3" /> Twitter
                        </ListGroup.Item>
                        <ListGroup.Item className="py-3">
                            <BsInstagram className="fs-4 me-3" /> Instagram
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
            <QZone />


        </div>
    );
};

export default RightSideBar;