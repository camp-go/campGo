import axios from "axios"
import React from "react"

class AddItems extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: [],
            nameSite: '',
            localisation: '',
            imageUrl: '',
            capacity: '',
            price: '',
            phone: '',
            email: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        axios.post('/campsites', this.state)
            .then(({ data }) => {
                console.log(data);
            })
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Add a new campSite</h5>
                        <h6 className="card-subtitle mb-3 text-muted">welcome dear admin</h6>
                        <div>
                            <form>
                                <div className="mb-3">
                                    <div className="row g-3">
                                        <div className="col-6">
                                            <label className="form-label" >Name of site</label>
                                            <input type="text" className="form-control" placeholder="Name of site" name="nameSite" value={this.state.nameSite} onChange={this.handleChange} />
                                        </div>
                                        <div className="col-2">
                                            <label className="form-label" for="inputEmail">Localisation</label>
                                            <input type="text" className="form-control" placeholder="Localisation" name="localisation" value={this.state.localisation} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <label className="form-label" for="inputEmail">Image (url)</label>
                                    <input type="email" className="form-control" id="inputEmail" placeholder="Image (url)" name="imageUrl" value={this.state.imageUrl} onChange={this.handleChange} />
                                </div>
                                <div className="row g-3">
                                    <div className="col-6">
                                        <label className="form-label" >capacity</label>
                                        <input type="text" className="form-control" placeholder="capacity" name="capacity" value={this.state.capacity} onChange={this.handleChange} />
                                    </div>
                                    <div className="col-2">
                                        <label className="form-label" for="inputEmail">Price(in DT):</label>
                                        <input type="text" className="form-control" placeholder="Price(in DT):" name="price" value={this.state.price} onChange={this.handleChange} />
                                    </div>
                                    <div className="col-2">
                                        <label className="form-label" for="inputEmail">Phone Number</label>
                                        <input type="text" className="form-control" placeholder="Phone Number" name="phone" value={this.state.phone} onChange={this.handleChange} />
                                    </div>
                                    <div className="col-2">
                                        <label className="form-label" for="inputEmail">Email</label>
                                        <input type="text" className="form-control" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />
                                    </div>

                                </div>
                                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit()}>Done!</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddItems;