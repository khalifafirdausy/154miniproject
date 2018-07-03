import React from 'react'
import ReactDOM from 'react-dom'
import Heading from './components/Heading'
import Breadcrumb from './components/Breadcrumb'
import Search from './components/Search'
import Table from './components/Table'

class App extends React.Component{
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="panel panel-primary">
                        <Heading />
                        <div className= "panel-body">
                            <Breadcrumb />
                            <div className = "table-responsive">
                                <Search />
                                <Table />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />
    , document.getElementById("root")
)