import React, { Component } from 'react'

export class Spinner extends Component {
    render() {
        return (
            <div>
                
                <div className="spinner-grow text-success mx-1" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-success mx-1" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-success mx-1" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-success mx-1" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                
            </div>
        )
    }
}

export default Spinner
