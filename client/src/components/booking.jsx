import axios from 'axios'
import React from 'react'

class Booking extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            fName: '',
            lName:'',
            email: '',
            campSite: '',
            nbrNights: '',
            date: '',
            phoneNb: '',
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange = (event)=>{
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    
      handleSubmit() {
        axios.post("/books", this.state).then(({ data }) => {
          console.log(data);
        });
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
                                        <input type="text" className="form-control" placeholder="First Name" name="fName" value={this.state.fName} onChange={this.handleChange}/>
                                    </div>
                                    <div className="col-2">
                                    <label className="form-label" for="inputEmail">Last Name</label>
                                        <input type="text" className="form-control" placeholder="Last Name" name="lName" value={this.state.lName} onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <label className="form-label" for="inputEmail">Email</label>
                                <input type="email" className="form-control" id="inputEmail" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange}/>
                            </div>
                            <div className="row g-3">
                                    <div className="col-6">
                                    <label className="form-label" >camp Site</label>
                                        <input type="text" className="form-control" placeholder="Camp Site" name="campSite" value={this.state.campSite} onChange={this.handleChange}/>
                                    </div>
                                    <div className="col-2">
                                    <label className="form-label" for="inputEmail">Nbr of Nights</label>
                                        <input type="text" className="form-control" placeholder="Nbr of Nights" name="nbrNights" value={this.state.nbrNights} onChange={this.handleChange}/>
                                    </div>
                                    <div className="col-2">
                                    <label className="form-label" for="inputEmail">Phone Number</label>
                                        <input type="text" className="form-control" placeholder="Phone Number" name="phoneNb" value={this.state.phoneNb} onChange={this.handleChange}/>
                                    </div>
                                </div>
                            <button type="button" className="btn btn-primary" onClick={()=>{this.handleSubmit()}}>Done!</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Booking