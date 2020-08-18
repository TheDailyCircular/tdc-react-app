import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
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


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/registration" component={UserRegistration} />
          <NavigationBar />
          <Row id="main-row">
            <Col md={9} className="changeable-area">
              <Route exact path="/" component={Posts} />
              <Route exact path="/posts" component={Posts} />
              <Route exact path="/messages" component={Messages} />
              <Route exact path="/circulars" component={Circulars} />
              <Route exact path="/profile" component={UserProfile} />
            </Col>
            <Col md={3}>
              <SideBarAdsence />
              <Notifications />
            </Col>
          </Row>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
