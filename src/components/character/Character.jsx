import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Paginate from "./Paginate";
import { Link } from 'react-router-dom';
import Fetchcharacter from "./FetchCharacter"; 

class character extends Component {
    state = {
        data: [],
        page: []
    }
    
    componentDidMount(){
        fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState(()=>({
                    data: result.results,
                    page: result.info,
                }));
            },
            (error) => {
                console.log("error");
                console.log(error);
            }
        );
    }

    changePage=(result)=>{
        this.setState({
            data: result.results,
            page: result.info,
        });
    };

    render() { 
        const {data, page} = this.state;
        return <div className="container">
            <h1>All Characters ({this.state.page.count})</h1>
            {/* <Fetchcharacter data={data} page={page}/> */}
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
            <Paginate page={page}  onchange={this.changePage}/>
        </div>;
    }
}

export default character;