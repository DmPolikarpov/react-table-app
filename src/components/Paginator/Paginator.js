import React from 'react';
import './Paginator.css';

let Paginator = ({notesPerPage, comments, paginatorButton}) => {
    let pageNumber = [];
    for (let i = 1; i <= Math.ceil(comments.length / notesPerPage); i++) {
        pageNumber.push(i);
    }
    return (
        <div className="paginator">
            {
                pageNumber.map(page => (
                    <p key={page} onClick={() => {paginatorButton(page)}}>{page}</p>
                ))
            }
        </div>
    )
}

export default Paginator;
