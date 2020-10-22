import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, useHistory } from 'react-router-dom';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import { getPosts } from './services/post';
//screens
import Layout from './screens/Layout/Layout';
import Profile from './screens/Profile/Profile';
import Posts from './screens/Posts/Posts';
import SignUp from './screens/Signup/SignUp';
import Login from './screens/Login/Login';
import Comments from './screens/Comments/Comments';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData)
    }
    handleVerify();
    getPosts();
  }, [])

  const getPostFromUser = async () => {
    const userPost = await getPosts();
    setCurrentUser(userPost);
  }

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
        {/* {console.log(currentUser.username)} */}
        <Layout
          currentUser={currentUser}
          handleLogout={handleLogout}
        // currentUserName={currentUser.username}
        />
      </Route>
      <div className="cont-app">

        <Route exact path="/">
          <Profile
            currentUser={currentUser}
          // currentUserName={currentUser.username}
          />
        </Route>

        <div className="ins-con-app">
          <Route exact path="/">
            <Posts currentUser={currentUser} />
            <Comments
              currentUser={currentUser}
            // currentUserName={currentUser.username}
            />
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
