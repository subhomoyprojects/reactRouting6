import React from 'react';
import { Link, useLocation } from 'react-router-dom';


export default function User() {
    const location = useLocation();
    const {u_id,u_name,u_loc} = location.state;
    return (
        <>
            <Link to='/'>Back to base</Link>
            <h3>User Id: {u_id}</h3>
            <h3>User Name: {u_name}</h3>
            <h3>User location: {u_loc}</h3>
        </>
    )
}
