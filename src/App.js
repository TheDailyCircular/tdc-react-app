import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';

import { Provider } from 'react-redux';
import store from './Store';

import UserRegistration from './component/user/UserRegistration';
import Header from './component/header/Header';
import Posts from './component/posts/Posts'
import Messages from './component/message/Messages';
import Circulars from './component/circular/Circulars';
import UserProfile from './component/user/UserProfile';
import NavigationBar from './component/navbar/NavigationBar';
import SideBarAdsence from './component/adsence/SideBarAdsence';
import Notifications from './component/notification/Notifications';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App fluid">
          <Header />
          <Route exact path="/registration" component={UserRegistration} />
          <NavigationBar />
          <Container id="main-container">
            <Row className="main-row">
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
          </Container>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
