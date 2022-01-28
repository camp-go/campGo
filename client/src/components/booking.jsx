import React from 'react'

class Booking extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">live your dream!</h5>
                    <h6 className="card-subtitle mb-3 text-muted">Fill this form and we will contact you.</h6>
                    {/* <p className="card-text">Built in 1889 Eiffel Tower is one of the most iconic landmarks in the world.</p> */}
                    <div>
                        <form>
                            <div className="mb-3">
                                <div className="row g-3">
                                    <div className="col-6">
                                    <label className="form-label" >First Name</label>
                                        <input type="text" className="form-control" placeholder="First Name" />
                                    </div>
                                    <div className="col-2">
                                    <label className="form-label" for="inputEmail">Last Name</label>
                                        <input type="text" className="form-control" placeholder="Last Name"/>
                                    </div>
                                </div>
                                <label className="form-label" for="inputEmail">Email</label>
                                <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                            </div>
                            <div className="row g-3">
                                    <div className="col-6">
                                    <label className="form-label" >camp Site</label>
                                        <input type="text" className="form-control" placeholder="Camp Site" />
                                    </div>
                                    <div className="col-2">
                                    <label className="form-label" for="inputEmail">Nbr of Nights</label>
                                        <input type="text" className="form-control" placeholder="Nbr of Nights"/>
                                    </div>
                                    <div className="col-2">
                                    <label className="form-label" for="inputEmail">Phone Number</label>
                                        <input type="text" className="form-control" placeholder="Phone Number"/>
                                    </div>
                                </div>
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Booking