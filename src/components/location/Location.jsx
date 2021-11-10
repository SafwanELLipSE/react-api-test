import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import Paginate from "./Paginate";
import { Link } from 'react-router-dom';

class Location extends Component {
    state = {
        data: [],
        page: []
    }
    
    componentDidMount(){
        fetch("https://rickandmortyapi.com/api/location")
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
            <h1>All Locations ({this.state.page.count})</h1>
            <div className="row mt-2">
                <Table responsive>
                    <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Dimension</th>
                        <th>Local Peoples</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data.map(data => (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.type}</td>
                                <td>{data.dimension}</td>
                                <td>{data.residents.length}</td>
                                <td>
                                    <Link to={`/location/${data.id}`} className="btn-sm btn-primary">View</Link>
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

export default Location;
