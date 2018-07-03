import React from 'react'

class Breadcrumb extends React.Component {
    render() {
        return (
            <ol className="breadcrumb">
                <li><a href="">Home</a></li>
                <li><a href="">Master</a></li>
                <li className="active">List Company</li>
            </ol>
        )
    }
}

export default Breadcrumb