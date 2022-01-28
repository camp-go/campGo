import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Elements from './components/Elements.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
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

  render() {
    return (
      // <div>
      //   <h1>Item List</h1>
      //   <List items={this.state.items}/>
      // </div>
      <div>
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a href="#" className="navbar-brand">Brand</a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav">
                <a href="#" className="nav-item nav-link active">Home</a>
                <a href="#" className="nav-item nav-link">Profile</a>
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Messages</a>
                  <div className="dropdown-menu">
                    <a href="#" className="dropdown-item">Inbox</a>
                    <a href="#" className="dropdown-item">Sent</a>
                    <a href="#" className="dropdown-item">Drafts</a>
                  </div>
                </div>
                <a href="#" className="nav-item nav-link disabled" tabindex="-1">Reports</a>
              </div>
              <div className="navbar-nav ms-auto">
                <a href="#" className="nav-item nav-link">Login</a>
              </div>
            </div>
          </div>
        </nav> */}
        <div>
          <Elements />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));