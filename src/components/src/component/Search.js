import React from 'react'

class Search extends React.Component {
    render() {
        return (
            <form className="form-inline">
                <div className="btn-group">
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Select Role Code <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                        <li><a href="">Action</a></li>
                        <li><a href="">Another action</a></li>
                        <li><a href="">Something else here</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="">Separated link</a></li>
                    </ul>
                </div>
                &nbsp;
                <div className="btn-group">
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Select Role Name <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                        <li><a href="">Action</a></li>
                        <li><a href="">Another action</a></li>
                        <li><a href="">Something else here</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a href="">Separated link</a></li>
                    </ul>
                </div>
            </form>
        )
    }
}

export default Search