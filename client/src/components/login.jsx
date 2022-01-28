import React from "react"
import AdminTable from "./AdminTable.jsx"

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state={
            view:"",
        }
        this.changeView=this.changeView.bind(this)
    }

    changeView(view){
        this.setState({
            view:"signin"
        })
    }
    renderView(){
        if(this.state.view=== "signin"){
            return <AdminTable /> 
        }
    }
    render(){
        return(
            <div>
            {this.props.toggleAdmin ? 
            <form>
                <div className="row mb-3">
                    <label for="inputEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="checkRemember"/>
                                <label className="form-check-label" for="checkRemember">Remember me</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-10 offset-sm-2">
                        <button type="button" className="btn btn-primary" onClick={this.changeView}>Sign in</button>
                    </div>
                </div>
            </form>
            : <div></div>} 
            <div>{this.renderView()}</div>
        </div>
    
        )
    }
}


export default Login;