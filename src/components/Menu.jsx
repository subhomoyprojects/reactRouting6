import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Menu extends Component {
    state = {
        id: 10,
        name: 'Subhomoy',
        loc: 'Kolkata',
        stinfo: {stid: 10, stname: 'Subhomoy', stdept: 'Design', stemail: 's@s.com'}
    }
    render() {
        return (
        <ul>
            <li><Link to='/routing1'>Routing1</Link></li>
            <li><Link to='/newcomp/routing2'>Routing2</Link></li>
            <li>
                <Link to='/users' state={{u_id: this.state.id,u_name: this.state.name,u_loc: this.state.loc}}>
                    Routing3
                </Link>
            </li>
            <li>
                <Link to={'/routing3/' + this.state.name}>Routing3</Link>
            </li>
            <li>
                <Link to='/objectpass' state={{info: this.state.stinfo}}>Pass Object</Link>
            </li>
        </ul>
        )
    }
}

