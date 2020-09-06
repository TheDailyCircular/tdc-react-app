import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';

import { Provider } from 'react-redux';
import store from './Store';

import UserRegistration from './components/user/UserRegistration';
import Header from './components/header/Header';
import Posts from './components/posts/Posts'
import Messages from './components/message/Messages';
import Circulars from './components/circular/Circulars';
import UserProfile from './components/user/UserProfile';
import NavigationBar from './components/navbar/NavigationBar';
import SideBarAdsence from './components/adsence/SideBarAdsence';
import Notifications from './components/notification/Notifications';
import CreateCircular from './components/circular/CreateCircular';
import Registration from './components/user/Registration';

import jwt_decode from 'jwt-decode';
import setJWTTokenToHeader from './security/setJWTTokenToHeader';
import { SET_CURRENT_USER } from './actions/types';
import { logout } from './actions/SecurityActions';

const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  setJWTTokenToHeader(jwtToken);
  const decodeJwtToken = jwt_decode(jwtToken.split(" ")[1]);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decodeJwtToken
  });

  const currentTime = Date.now() / 1000;
  if (decodeJwtToken.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Route exact path="/registration" component={UserRegistration} />
            <NavigationBar jwtToken={jwtToken} />
            <Row id="main-row">
              <Col md={9} className="changeable-area">
                <Switch>
                  <Route exact path="/" component={Circulars} />
                  <Route exact path="/register" component={Registration} />
                  <Route exact path="/circulars" component={Circulars} />
                  <Route exact path="/posts" component={Posts} />
                  <Route exact path="/posts/create" component={CreateCircular} />
                  <Route exact path="/messages" component={Messages} />
                  <Route exact path="/profile" component={UserProfile} />
                </Switch>
              </Col>
              <Col md={3}>
                <SideBarAdsence />
                <Notifications />
              </Col>
            </Row>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
