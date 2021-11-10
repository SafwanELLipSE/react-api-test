import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Fetchcharacter = props => {
    const {data} = props;
    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json())
        .then(
            (result) => {
                  
            },
            (error) => {
                console.log("error");
                console.log(error);
            }
        );
    }, [])
    return (
        <div className="row mt-2">
        {
            data.map(data => (
                <div className="col-3" key={data.id}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={data.image} />
                        <Card.Body>
                            <Card.Title>
                                {data.name} ({data.status})
                            </Card.Title>
                            <Card.Text>
                                <b>Gender: </b> {data.gender} <b>Species: </b>{data.species} <br/> 
                                <b>Origin: </b>{data.origin.name} <b>Location: </b> {data.location.name}
                            </Card.Text>
                            <Link to={`/character/${data.id}`} className="btn-sm btn-primary">Go somewhere</Link>
                        </Card.Body>
                    </Card>
                </div>
            ))
        }
        </div>
    );
}

export default Fetchcharacter;
