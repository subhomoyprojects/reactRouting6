import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function ObjectPass(props) {
    const location = useLocation();
    const {info} = location.state;
    return (
        <div>
            <Link to='/'>Back to base</Link>
            <h3>State Id: {info.stid}</h3>
            <h3>State Name: {info.stname}</h3>
            <h3>Department: {info.stdept} </h3>
            <h3>Mail: {info.stemail} </h3>
        </div>
    );
}

export default ObjectPass;