import React from 'react'

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
                        <a href="" style={{color:'black'}}><i className="glyphicon glyphicon-search"></i></a>&nbsp;&nbsp;&nbsp;
                        <a href="" style={{color:'black'}}><i className="glyphicon glyphicon-pencil"></i></a>&nbsp;&nbsp;&nbsp;
                        <a href="" style={{color:'black'}}><i className="glyphicon glyphicon-trash"></i></a>
                    </td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Dummy</td>
                    <td>Dummy</td>
                    <td>Dummy</td>
                    <td>Dummy</td>
                    <td>
                        <a href="" style={{color:'black'}}><i className="glyphicon glyphicon-search"></i></a>&nbsp;&nbsp;&nbsp;
                        <a href="" style={{color:'black'}}><i className="glyphicon glyphicon-pencil"></i></a>&nbsp;&nbsp;&nbsp;
                        <a href="" style={{color:'black'}}><i className="glyphicon glyphicon-trash"></i></a>
                    </td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Dummy</td>
                    <td>Dummy</td>
                    <td>Dummy</td>
                    <td>Dummy</td>
                    <td>
                        <a href="" style={{color:'black'}}><i className="glyphicon glyphicon-search"></i></a>&nbsp;&nbsp;&nbsp;
                        <a href="" style={{color:'black'}}><i className="glyphicon glyphicon-pencil"></i></a>&nbsp;&nbsp;&nbsp;
                        <a href="" style={{color:'black'}}><i className="glyphicon glyphicon-trash"></i></a>
                    </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Table