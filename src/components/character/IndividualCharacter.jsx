import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Container, Col } from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import { urlCharacter } from "../../action";
import { useDispatch, useSelector } from "react-redux";

const Individualcharacter = () => {
    const [user, setUser] = useState(0);
    const {id} = useParams();
    const cUrl = useSelector(c => c.characterUrl);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(urlCharacter())
        const url = cUrl.url+id;
        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                setUser(result)
            },
            (error) => {
                console.log("error");
                console.log(error);
            }
        );
    }, [id]);
    return (
        <Container>
            <Row>
                <Card>
                    <Card.Body>
                        <Row>
                            <div className="col-4">
                                <Card.Img variant="top" src={user.image} />
                            </div>
                            <div className="col-8">
                                <Row className="text-center">
                                    <Col xs={6} md={6}>
                                        <b>Name: </b>
                                    </Col>
                                    <Col xs={6} md={6}>
                                        {user.name}
                                    </Col>
                                </Row>
                                <Row className="text-center">
                                    <Col xs={6} md={6}>
                                        <b>Status: </b>
                                    </Col>
                                    <Col xs={6} md={6}>
                                        {user.status}
                                    </Col>
                                </Row>
                                <Row className="text-center">
                                    <Col xs={6} md={6}>
                                        <b>Species: </b>
                                    </Col>
                                    <Col xs={6} md={6}>
                                        {user.species}
                                    </Col>
                                </Row>
                                <Row className="text-center">
                                    <Col xs={6} md={6}>
                                        <b>Type: </b>
                                    </Col>
                                    <Col xs={6} md={6}>
                                        {user.type}
                                    </Col>
                                </Row>
                                <Row className="text-center">
                                    <Col xs={6} md={6}>
                                        <b>Gender: </b>
                                    </Col>
                                    <Col xs={6} md={6}>
                                        {user.gender}
                                    </Col>
                                </Row>
                                <Row className="text-center">
                                    <Col xs={6} md={6}>
                                        <b>Number of Episode: </b>
                                    </Col>
                                    <Col xs={6} md={6}>
                                        {user.episode}
                                    </Col>
                                </Row>
                            </div>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
}

export default Individualcharacter;