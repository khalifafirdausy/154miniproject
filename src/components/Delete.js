import React from 'react'

class Delete extends React.Component {
    render() {
        return (
            <div className="modal fade" id="deleteModal" role="dialog">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-body">
                            <p>Delete Data ?</p>
                            <button type="button" className="btn btn-primary">Delete</button>
                            &nbsp;
                            <button type="button" className="btn btn-warning">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Delete