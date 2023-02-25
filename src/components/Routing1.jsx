import React from 'react';
import { Link } from 'react-router-dom';

function Routing1(props) {
    return (
        <div>
            <Link to='/'>Back to base</Link>
            <p>Routing 1 Runing</p>
        </div>
    );
}

export default Routing1;