import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'

export default class navbar extends Component {
    render() {
        return (
            <Navbar expand="lg" variant="dark" bg="dark">
                <Navbar.Brand href="#" >SysRes</Navbar.Brand>
            </Navbar>
        )
    }
}