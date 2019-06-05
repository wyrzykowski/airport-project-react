import React from 'react';
import logo from './logo.svg';
import './css/main.css';
import {Route,Switch,Redirect,Router,Link} from 'react-router-dom';
import Airport from "./components/airport";
import Home from "./components/home";
import Certificate from "./components/certificate";
import Employee from "./components/employee";
import Flight from "./components/flight";
import Model from "./components/model";
import Passenger from "./components/passenger";
import Pilot from "./components/pilot";
import Plane from "./components/plane";
import Runway from "./components/runway";
import Technician from "./components/technician";


function App() {
  return (
    <div className="App">
      <div className="container-grid">

        <div className="top-bar">
          <h1>Airport App 1.0.0</h1>
        </div>
          {/*here menu*/}

              <div className="menu-item menu-item-1">
                  <Link className="link" to={"/"}>
                    <h5>Home</h5>
                  </Link>
              </div>

          <div className="menu-item menu-item-2">
              <Link className="link" to={"/airport"}>
                  <h5>Airports</h5>
              </Link>
          </div>
          <div className="menu-item menu-item-3">
              <Link className="link" to={"/employee"}>
                  <h5>Employee</h5>
              </Link>
          </div>
          <div className="menu-item menu-item-4">
              <Link className="link" to={"/runway"}>
                  <h5>Runways</h5>
              </Link>
          </div>
          <div className="menu-item menu-item-4">
              <Link className="link" to={"/flight"}>
                  <h5>Flight</h5>
              </Link>
          </div>
          <div className="menu-item menu-item-4">
              <Link className="link" to={"/model"}>
                  <h5>Plane models</h5>
              </Link>
          </div>
          <div className="menu-item menu-item-4">
              <Link className="link" to={"/plane"}>
                  <h5>Planes</h5>
              </Link>
          </div>
          <div className="menu-item menu-item-4">
              <Link className="link" to={"/certificate"}>
                  <h5>Certificates</h5>
              </Link>
          </div>
          <div className="menu-item menu-item-4">
              <Link className="link" to={"/passenger"}>
                  <h5>Passengers</h5>
              </Link>
          </div>
          <div className="menu-item menu-item-5">
              <Link className="link" to={"/pilot"}>
                  <h5>Pilots</h5>
              </Link>
          </div>
          <div className="menu-item menu-item-4">
              <Link className="link"  to={"/technician"}>
                  <h5>Technicians</h5>
              </Link>
          </div>
          <div className="main-content">
              <Switch>
                  <Route exact path ="/" component={Home}/>
                  <Route exact path="/airport" component={Airport}/>
                  <Route exact path="/certificate" component={Certificate}/>
                  <Route exact path="/employee" component={Employee}/>
                  <Route exact path="/flight" component={Flight}/>
                  <Route exact path="/model" component={Model}/>
                  <Route exact path="/passenger" component={Passenger}/>
                  <Route exact path="/pilot" component={Pilot}/>
                  <Route exact path="/plane" component={Plane}/>
                  <Route exact path="/runway" component={Runway}/>
                  <Route exact path="/technician" component={Technician}/>
              </Switch>
          </div>
      </div>
    </div>
  );
}

export default App;
