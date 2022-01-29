import React from 'react';
import axios from 'axios';
import AddItems from './AddItems.jsx';

class Admin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle: true
        }
        this.remove = this.remove.bind(this)
    }

    remove(_id) {
        console.log(_id);
        axios.delete(`/removeItems/${_id}`)
            .then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error)
            })
        
    }

    update(_id) {
        console.log(_id);
        axios.put('/updateItems' + _id, {
            itemPic: this.state.itemPic,
            itemdescription: this.state.itemdescription,
            itemPrice: this.state.itemPrice
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error)
        })
    }
    changeView(){
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
        console.log(this.props.items, "admin");
        return (
            <div>
                <body>
                    <div class="container">
                        <div class="table-responsive">
                            <div class="table-wrapper">
                                <div class="table-title">
                                    <div class="row">
                                        <div class="col-xs-6">
                                            <h2>Manage <b>bookings</b></h2>
                                        </div>
                                    </div>
                                </div>
                                <table class="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th>
                                                <span class="custom-checkbox">
                                                    <input type="checkbox" id="selectAll" />
                                                    <label for="selectAll"></label>
                                                </span>
                                            </th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Address</th>
                                            <th>Phone</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            this.props.items.map((elem, i) => (
                                                <div>
                                                    <tr>
                                                        <td>
                                                            <span class="custom-checkbox">
                                                                <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                                                                <label for="checkbox1"></label>
                                                            </span>
                                                        </td>
                                                        {this.state.toggle ?
                                                            <div>
                                                            <td>{elem.nameSite}</td>
                                                            <td>{elem.localisation}</td>
                                                            <td>yoyo</td>
                                                            <td>(171) 555-2222</td>
                                                            </div>
                                                        : 
                                                        <div>
                                                            <input type="text"  />
                                                            <button className="btn btn-primary">done!</button>
                                                        </div>
                                                        }
                                                        <td>
                                                            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit" onClick={()=>{this.update(elem._id) , this.changeView()}}>update</i></a>
                                                            <a class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete" onClick={()=>{this.remove(elem._id)}}>delete</i></a>
                                                        </td>
                                                    </tr>
                                                </div>
                                            ))
                                        }


                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                    <div id="addEmployeeModal" class="modal fade">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <form>
                                    <div class="modal-header">
                                        <h4 class="modal-title">Add Employee</h4>
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="form-group">
                                            <label>Name</label>
                                            <input type="text" class="form-control" required />
                                        </div>
                                        <div class="form-group">
                                            <label>Email</label>
                                            <input type="email" class="form-control" required />
                                        </div>
                                        <div class="form-group">
                                            <label>Address</label>
                                            <textarea class="form-control" required></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label>Phone</label>
                                            <input type="text" class="form-control" required />
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel" />
                                        <input type="submit" class="btn btn-success" value="Add" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div id="editEmployeeModal" class="modal fade">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <form>
                                    <div class="modal-header">
                                        <h4 class="modal-title">Edit Employee</h4>
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="form-group">
                                            <label>Name</label>
                                            <input type="text" class="form-control" required />
                                        </div>
                                        <div class="form-group">
                                            <label>Email</label>
                                            <input type="email" class="form-control" required />
                                        </div>
                                        <div class="form-group">
                                            <label>Address</label>
                                            <textarea class="form-control" required></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label>Phone</label>
                                            <input type="text" class="form-control" required />
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel" />
                                        <input type="submit" class="btn btn-info" value="Save" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div id="deleteEmployeeModal" class="modal fade">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <form>
                                    <div class="modal-header">
                                        <h4 class="modal-title">Delete Employee</h4>
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    </div>
                                    <div class="modal-body">
                                        <p>Are you sure you want to delete these Records?</p>
                                        <p class="text-warning"><small>This action cannot be undone.</small></p>
                                    </div>
                                    <div class="modal-footer">
                                        <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel" />
                                        <input type="submit" class="btn btn-danger" value="Delete" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </body>
                <div>
                <AddItems />
                </div>
            </div>
        )
    }
}

export default Admin;
