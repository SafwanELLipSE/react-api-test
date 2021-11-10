import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Container, Col } from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import { urlLocation } from "../../action";
import { useDispatch, useSelector } from "react-redux";

const IndividualLocation = () => {
    const [location, setLocation] = useState(0);
    const {id} = useParams();
    const eUrl = useSelector(c => c.locationUrl);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(urlLocation())
        const url = eUrl.url+id;
        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                setLocation(result)
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
                            </div>
                            <div className="col-8">
                                <Row className="text-center">
                                    <Col xs={6} md={6}>
                                        <b>Name: </b>
                                    </Col>
                                    <Col xs={6} md={6}>
                                        {location.name}
                                    </Col>
                                </Row>
                                <Row className="text-center">
                                    <Col xs={6} md={6}>
                                        <b>Type: </b>
                                    </Col>
                                    <Col xs={6} md={6}>
                                        {location.type}
                                    </Col>
                                </Row>
                                <Row className="text-center">
                                    <Col xs={6} md={6}>
                                        <b>Dimension: </b>
                                    </Col>
                                    <Col xs={6} md={6}>
                                        {location.dimension}
                                    </Col>
                                </Row>
                                <Row className="text-center">
                                    <Col xs={6} md={6}>
                                        <b>Number of Residents: </b>
                                    </Col>
                                    <Col xs={6} md={6}>
                                        {location.residents}
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

export default IndividualLocation;
