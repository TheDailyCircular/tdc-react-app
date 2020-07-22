import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Posts from './component/posts/Posts'
import Messages from './component/message/Messages';
import Circulars from './component/circular/Circulars';
import UserProfile from './component/user/UserProfile';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Posts} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/message" component={Messages} />
        <Route exact path="/circular" component={Circulars} />
        <Route exact path="/profile" component={UserProfile} />
      </div>
    </BrowserRouter>
  );
}

export default App;
