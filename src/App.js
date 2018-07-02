import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return ( 
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <div className="panel panel-primary">
            <div className="panel-heading">
            List Company
            </div>
            <div className= "panel-body">
            <ol class="breadcrumb">
            <li><a href="#">Home</a></li>
            <li><a href="#">Master</a></li>
            <li class="active">List Company</li>
            </ol>
              <div className = "table-responsive">
              <button className="btn btn-primary pull-right" >Add</button>
            {/* <form method="post">
              <div class="form-group"> 
              <div className="col-md-3">
              <select class="combobox form-control pull-left">
                <option></option>
                <option value="PA">1XSIS0002</option>
                <option value="CT">2XSIS0012</option>
                <option value="NY">3XSIS0022</option>
                <option value="MD">4XSIS0032</option>
                <option value="VA">5XSIS0032</option>
              </select>
              </div>
              </div>
            </form> */}
                <form class="form-inline">
<div class="btn-group">
<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Select Role Code <span class="caret"></span>
</button>
<ul class="dropdown-menu">
<li><a href="#">Action</a></li>
<li><a href="#">Another action</a></li>
<li><a href="#">Something else here</a></li>
<li role="separator" class="divider"></li>
<li><a href="#">Separated link</a></li>
</ul>
</div>
&nbsp;
<div class="btn-group">
<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Select Role Name <span class="caret"></span>
</button>
<ul class="dropdown-menu">
<li><a href="#">Action</a></li>
<li><a href="#">Another action</a></li>
<li><a href="#">Something else here</a></li>
<li role="separator" class="divider"></li>
<li><a href="#">Separated link</a></li>
</ul>
</div>
                </form>
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
                          <a href="#" style={{color:'black'}}><i className="glyphicon glyphicon-search"></i></a>&nbsp;&nbsp;&nbsp;
                          <a href="#" style={{color:'black'}}><i className="glyphicon glyphicon-pencil"></i></a>&nbsp;&nbsp;&nbsp;
                          <a href="#" style={{color:'black'}}><i className="glyphicon glyphicon-trash"></i></a>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Dummy</td>
                        <td>Dummy</td>
                        <td>Dummy</td>
                        <td>Dummy</td>
                        <td>
                          <a href="#" style={{color:'black'}}><i className="glyphicon glyphicon-search"></i></a>&nbsp;&nbsp;&nbsp;
                          <a href="#" style={{color:'black'}}><i className="glyphicon glyphicon-pencil"></i></a>&nbsp;&nbsp;&nbsp;
                          <a href="#" style={{color:'black'}}><i className="glyphicon glyphicon-trash"></i></a>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Dummy</td>
                        <td>Dummy</td>
                        <td>Dummy</td>
                        <td>Dummy</td>
                        <td>
                          <a href="#" style={{color:'black'}}><i className="glyphicon glyphicon-search"></i></a>&nbsp;&nbsp;&nbsp;
                          <a href="#" style={{color:'black'}}><i className="glyphicon glyphicon-pencil"></i></a>&nbsp;&nbsp;&nbsp;
                          <a href="#" style={{color:'black'}}><i className="glyphicon glyphicon-trash"></i></a>
                        </td>
                      </tr>
                    </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
