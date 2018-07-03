import React from 'react'

class Add extends React.Component {
    render() {
        return (
            <div className="col-md-12" id="add-btn">
                <button className="btn btn-primary pull-right" data-toggle="modal" data-target="#addModal" id="addBtn">Add</button>
                <div className="modal fade" id="addModal" role="dialog">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="panel panel-primary" id="add-modal">
                                <div className="panel-heading">Add List Company</div>
                                <div className="panel-body">
                                    <form className="form-horizontal">
                                        <div className="form-group" id="add-user">
                                            <div className="col-md-6">
                                                <label className="control-label col-sm-5">* Role Name</label>
                                                <div className="col-sm-7" id="form-user">
                                                    <select className="form-control">
                                                        <option defaultValue>- Select Role Code -</option>
                                                        <option>Alif</option>
                                                        <option>Emmy</option>
                                                        <option>Eko</option>
                                                        <option>Qalfin</option>
                                                        <option>Reza</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="control-label col-sm-5">* Username</label>
                                                <div className="col-sm-7" id="form-user">
                                                    <input className="form-control" placeholder="Type Username" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group" id="add-user">
                                            <div className="col-md-6">
                                                <label className="control-label col-sm-5">* Employee Name</label>
                                                <div className="col-sm-7" id="form-user">
                                                    <select className="form-control">
                                                        <option defaultValue>- Select Employee -</option>
                                                        <option>Alif</option>
                                                        <option>Emmy</option>
                                                        <option>Eko</option>
                                                        <option>Qalfin</option>
                                                        <option>Reza</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="control-label col-sm-5">* Password</label>
                                                <div className="col-sm-7" id="form-user">
                                                    <input className="form-control" placeholder="Type Password" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group" id="add-user">
                                            <div className="col-md-6"></div>
                                            <div className="col-md-6">
                                                <label className="control-label col-sm-5">* Re-type Password</label>
                                                <div className="col-sm-7" id="form-user">
                                                    <input className="form-control" placeholder="Re-type Password" />
                                                </div>
                                            </div>
                                        </div>
                                        &nbsp;
                                        <div className="form-group" id="add-user">
                                            <div className="col-md-9"></div>
                                            <div className="col-md-3" id="btn-center">
                                                <button className="btn btn-primary">Save</button>
                                                &nbsp;
                                                <button className="btn btn-warning" data-dismiss="modal">Cancel</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Add