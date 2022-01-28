import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Elements from './components/Elements.jsx'
import Login from './components/login.jsx';
import Booking from './components/booking.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      toggle: true
    }
    this.changeView=this.changeView.bind(this)
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData() {
    $.ajax({
      url: '/items',
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });

  }
  changeView(){
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    console.log(this.state);
    return (
      <div>
      {this.state.toggle ?
      <div>

        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <a href="#" className="navbar-brand">camp go</a>
              <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                  <a href="#" className="nav-item nav-link active">Home</a>
                  <a href="#" className="nav-item nav-link">Services</a>
                  <a href="#" className="nav-item nav-link">About</a>
                  <a href="#" className="nav-item nav-link">Contact</a>
                </div>
                <div className="navbar-nav ms-auto">
                  <a href="#" className="nav-item nav-link">Register</a>
                  <a href="#" className="nav-item nav-link">Login</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div>
        <Elements items={this.state.items} changeView={this.changeView} />
          <div>
            <footer>
              <div className="row">
                <div className="col-md-6">
                  <p>Copyright &copy; 2021 Oussama Hmaied</p>
                </div>
                <div className="col-md-6 text-md-end">
                  <a href="#" className="text-dark">Terms of Use</a>
                  <span className="text-muted mx-2">|</span>
                  <a href="#" className="text-dark">Privacy Policy</a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
       :
    
          <div>
            <Booking />
          </div>
      }
      </div>      
     )
  }
}

        ReactDOM.render(<App />, document.getElementById('app'));