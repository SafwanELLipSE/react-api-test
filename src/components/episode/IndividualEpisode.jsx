import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Container, Col } from 'react-bootstrap';
import {useParams} from 'react-router-dom';

const IndividualEpisode = () => {
    const [episode, setEpisode] = useState(0);
    const {id} = useParams();
    useEffect(() => {
        const url = `https://rickandmortyapi.com/api/episode/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                setEpisode(result)
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
                                        {episode.name}
                                    </Col>
                                </Row>
                                <Row className="text-center">
                                    <Col xs={6} md={6}>
                                        <b>Air Date: </b>
                                    </Col>
                                    <Col xs={6} md={6}>
                                        {episode.air_date}
                                    </Col>
                                </Row>
                                <Row className="text-center">
                                    <Col xs={6} md={6}>
                                        <b>Episode: </b>
                                    </Col>
                                    <Col xs={6} md={6}>
                                        {episode.episode}
                                    </Col>
                                </Row>
                                <Row className="text-center">
                                    <Col xs={6} md={6}>
                                        <b>Number of Characters: </b>
                                    </Col>
                                    <Col xs={6} md={6}>
                                        {episode.characters}
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

export default IndividualEpisode;

