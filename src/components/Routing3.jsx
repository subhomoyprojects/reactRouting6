import React from 'react';
import { useParams } from 'react-router-dom';

function Routing3(props) {
    let {id} = useParams();
    return (
        <div>
            <h3>Value sent is: {id}</h3>
        </div>
    );
}

export default Routing3;