import React, {useState} from 'react';
import './TableContent.css';

let Table = ({allComments}) => {
    const [sortedColumn, setSortedColumn] = useState({});

    if (sortedColumn != null) {
        allComments = allComments.sort((a,b) => {
            if (sortedColumn.ascOrder) {
                if (a[sortedColumn.name] > b[sortedColumn.name]) {
                    return 1;
                } else {
                    return -1;
                } 
            } else {
                if (a[sortedColumn.name] < b[sortedColumn.name]) {
                    return 1;
                } else {
                    return -1;
                } 
            }
        })
    }

    let sortItems = param => {
        if (sortedColumn.name === param && sortedColumn.ascOrder) {
            setSortedColumn({name: param, ascOrder: false})
        } else {
            setSortedColumn({name: param, ascOrder: true})
        }
        
    }   
    return (
        <table>
            <thead>
                <tr>
                    <th className="id" onClick={() => {sortItems("id")}}>ID</th>
                    <th className="name" onClick={() => {sortItems("name")}}>Name</th>
                    <th className="email" onClick={() => {sortItems("email")}}>email</th>
                    <th className="body" onClick={() => {sortItems("body")}}>Body</th>
                </tr>
            </thead>
            <tbody>
            {
                allComments.map( comment => (
                    <tr key={comment.id}>
                        <td className="id">{comment.id}</td> 
                        <td className="name">{comment.name}</td> 
                        <td className="email">{comment.email}</td> 
                        <td className="body">{comment.body}</td> 
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}

export default Table;
