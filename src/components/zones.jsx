import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { connect } from 'react-redux'
import { fetchZonesThunk } from '../redux/thunks';

class zones extends Component {

    constructor(props) {
        super(props);

        
        this.props.fetchZones();
    }

    render() {
        return (
            ''
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchZones: () => dispatch(fetchZonesThunk())
})

const mapStateToProps = (state) => {

}

const connectedZones = connect(mapStateToProps, mapDispatchToProps)(zones);

export default connectedZones;