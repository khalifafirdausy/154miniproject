import React from 'react'
import ReactDOM from 'react-dom'
import Heading from './component/Heading'
import Breadcrumb from './component/Breadcrumb'
import Search from './component/Search'
import Table from './component/Table'

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
                                <div className="col-md-12 ml-auto" id="add-btn">
                                    <button className="btn btn-primary pull-right">Add</button>
                                </div>
                                &nbsp;
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