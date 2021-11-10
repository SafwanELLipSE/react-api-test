import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPaginate from 'react-paginate';

class Paginate extends Component {
    handlePageClick = (ev)=> {
        const url = `https://rickandmortyapi.com/api/episode/?page=${ev.selected+1}`;
        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                this.props.onchange(result);
            },
            (error) => {
                console.log("error");
                console.log(error);
            }
        );
    };

    render() { 
        const {page} = this.props;
        return <div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={this.handlePageClick}
                pageRangeDisplayed={5}
                marginPagesDisplayed={3}
                pageCount={page.pages}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName="pagination justify-content-center"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                activeClassName="active"
            />
        </div>;
    }
}
export default Paginate;
