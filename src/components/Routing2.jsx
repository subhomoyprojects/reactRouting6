import React from 'react';
import { Link } from 'react-router-dom';

function Routing2(props) {
    return (
        <div>
            <Link to='/'>Back to base</Link>
            <p>This is a Routing 2</p>
        </div>
    );
}

export default Routing2;