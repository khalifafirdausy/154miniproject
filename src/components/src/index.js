import React from 'react'
import ReactDOM from 'react-dom'
import Heading from './component/Heading'
import Breadcrumb from './component/Breadcrumb'
import Search from './component/Search'
import Table from './component/Table'

class App extends React.Component{
    render() {
        return (
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <div className="panel panel-primary">
                        <Heading />
                        <div className= "panel-body">
                            <Breadcrumb />
                            <div className = "table-responsive">
                            <button className="btn btn-primary pull-right">Add</button>
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