import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './component/header/Header';
import Posts from './component/posts/Posts'
import Messages from './component/message/Messages';
import Circulars from './component/circular/Circulars';
import UserProfile from './component/user/UserProfile';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div role="main">
          <Route exact path="/" component={Posts} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/message" component={Messages} />
          <Route exact path="/circulars" component={Circulars} />
          <Route exact path="/profile" component={UserProfile} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
