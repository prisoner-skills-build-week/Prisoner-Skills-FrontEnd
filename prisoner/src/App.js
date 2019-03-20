import React from 'react';
import './App.css';
import Inmates from './components/Inmates'
import InmatesForm from './components/InmatesForm';
import {getData} from './actions';
import {connect } from 'react-redux'


import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'


class App extends React.Component {

  componentDidMount() {
    this.props.getData()
  }

  render() {
    return (

      <Router>
      <div className="App">
     
        <div className='nav'>
          <div className='nav-tag'>

            <Link className='nav-link' to="/public">Home</Link>
          </div>
          <div className='nav-tag'>
            <Link className='nav-link' to="/protected">Login</Link>
          </div>
         
        </div>
        <h1>Prison Employment Connection</h1>
        <Route path="/login"  component={Login} /*component={login} *//>
        <PrivateRoute exact path="/protected" component={InmatesForm}/>
        <Route path="/public" component={Inmates}/>
        <Route path="/public" component={InmatesForm} />
      </div>
     
      <div>
        {/* <h4>Add a potential employee</h4> */}
          {/* <InmatesForm /> */}
        
      </div>
      </Router>
    );
  }
}


const mapStateToProps = state => {
  const {inmateReducer} = state;
  return {
    inmates: inmateReducer.inmates,
    error: inmateReducer.error,
    gettingData: inmateReducer.gettingData
  }
}

export default connect(mapStateToProps, {getData})(App)
