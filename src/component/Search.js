import React from 'react'

class Search extends React.Component {
    render() {
        return (
            <form className="form-inline">
                <select className="combobox form-control">
                    <option value="" selected="selected">- Select Company Code -</option>
                    <option>Alif</option>
                    <option>Emmy</option>
                    <option>Eko</option>
                    <option>Qalfin</option>
                    <option>Reza</option>
                </select>
                &nbsp;
                <select className="combobox form-control">
                    <option value="" selected="selected">- Select Company Name -</option>                
                    <option>Alif</option>
                    <option>Emmy</option>
                    <option>Eko</option>
                    <option>Qalfin</option>
                    <option>Reza</option>
                </select>
                &nbsp;
                <input type="text" className="form-control" placeholder="Date Picker"/>
                &nbsp;
                <input type="text" className="form-control" placeholder="Created By"/>
                &nbsp;
                <input type="text" className="form-control" placeholder="Username"/>
                <button className="btn btn-warning pull-right">Search</button>
            </form>
        )
    }
}

export default Search