import React, { Component } from 'react';
import './App.css';
import Heading from './components/Heading'
import Breadcrumb from './components/Breadcrumb'
import Search from './components/Search';
import Table from './components/Table';

class App extends Component {
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
    );
  }
}

export default App;
