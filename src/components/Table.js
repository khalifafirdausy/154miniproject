import React from 'react'
import Delete from './Delete';

class Table extends React.Component {
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Company Code</th>
                    <th>Company Name</th>
                    <th>Created Date</th>
                    <th>Created By</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody className="panel-body">
                    <tr>
                    <td>1</td>
                    <td>Dummy</td>
                    <td>Dummy</td>
                    <td>Dummy</td>
                    <td>Dummy</td>
                    <td>
                        <div className="btn-group">
                            <button type="button" className="btn btn-link"><i className="glyphicon glyphicon-search"></i></button>
                            <button type="button" className="btn btn-link"><i className="glyphicon glyphicon-pencil"></i></button>
                            <button type="button" className="btn btn-link" data-toggle="modal" data-target="#deleteModal" id="deleteBtn"><i className="glyphicon glyphicon-trash"></i></button>
                        </div>
                    </td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Dummy</td>
                    <td>Dummy</td>
                    <td>Dummy</td>
                    <td>Dummy</td>
                    <td>
                        <div className="btn-group">
                            <button type="button" className="btn btn-link"><i className="glyphicon glyphicon-search"></i></button>
                            <button type="button" className="btn btn-link"><i className="glyphicon glyphicon-pencil"></i></button>
                            <button type="button" className="btn btn-link"><i className="glyphicon glyphicon-trash"></i></button>
                        </div>
                    </td>
                    </tr>
                </tbody>
                <Delete />
            </table>
        )
    }
}

export default Table