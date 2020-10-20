import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
//screens
import Layout from './screens/Layout/Layout';
import Profile from './screens/Profile/Profile';
import Posts from './screens/Posts/Posts';

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Layout />
      </Route>
      <Profile />
      {/* <Posts /> */}

    </div>
  );
}

export default App;
