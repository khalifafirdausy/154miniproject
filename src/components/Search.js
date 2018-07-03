import React from 'react'
import Add from './Add';

class Search extends React.Component {
    render() {
        return (
            <form className="form-inline">
                <Add />
                <select className="combobox form-control">
                    <option value="" defaultValue="selected">- Select Company Code -</option>
                    <option>Alif</option>
                    <option>Emmy</option>
                    <option>Eko</option>
                    <option>Qalfin</option>
                    <option>Reza</option>
                </select>
                &nbsp;
                <select className="combobox form-control">
                    <option value="" defaultValue="selected">- Select Company Name -</option>                
                    <option>Alif</option>
                    <option>Emmy</option>
                    <option>Eko</option>
                    <option>Qalfin</option>
                    <option>Reza</option>
                </select>
                &nbsp;
                <div className="input-group date" data-provide="datepicker" data-date-format="dd/mm/yyyy">
                    <input type="text" className="form-control" placeholder="Created Date"/>
                    <div className="input-group-addon">
                        <span className="glyphicon glyphicon-calendar" />
                    </div>
                </div>
                &nbsp;
                <input type="text" className="form-control" placeholder="Created By"/>
                <button className="btn btn-warning pull-right">Search</button>
            </form>
        )
    }
}

export default Search