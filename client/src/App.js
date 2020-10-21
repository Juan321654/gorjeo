import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, useHistory } from 'react-router-dom';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
//screens
import Layout from './screens/Layout/Layout';
import Profile from './screens/Profile/Profile';
import Posts from './screens/Posts/Posts';
import SignUp from './screens/Signup/SignUp';
import Login from './screens/Login/Login';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData)
    }
    handleVerify();
  }, [])

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/')
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/')
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  }

  return (
    <div className="App">
      <Route path="/">
        <Layout />
      </Route>

      <div className="cont-app">

        <Route exact path="/">
          <Profile />
        </Route>

        <div className="ins-con-app">
          <Route exact path="/">
            <Posts />
          </Route>
        </div>

      </div>

      <Route path="/register">
        <SignUp handleRegister={handleRegister} />
      </Route>

      <Route path="/login">
        <Login handleLogin={handleLogin} />
      </Route>


    </div>
  );
}

export default App;
