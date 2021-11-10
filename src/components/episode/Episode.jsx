import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import Paginate from "./Paginate";
import { Link } from 'react-router-dom';

class Episode extends Component {
    state = {
        data: [],
        page: []
    }
    
    componentDidMount(){
        fetch("https://rickandmortyapi.com/api/episode")
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
            <h1>All Episode ({page.count})</h1>
            <div className="row mt-2">
                <Table responsive>
                    <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Name</th>
                        <th>On Air Date</th>
                        <th>Episode</th>
                        <th>Views</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data.map(data => (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.air_date}</td>
                                <td>{data.episode}</td>
                                <td>{data.characters.length}</td>
                                <td>
                                    <Link to={`/episode/${data.id}`} className="btn-sm btn-primary">View</Link>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </div>
            <Paginate page={page}  onchange={this.changePage}/>
        </div>;
    }
}

export default Episode;
