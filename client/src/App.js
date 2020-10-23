import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, useHistory } from 'react-router-dom';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import { getPosts } from './services/post';
//screens
import Layout from './screens/Layout/Layout';
import Profile from './screens/Profile/Profile';
import CreatePost from './screens/CreatePost/CreatePost';
import SignUp from './screens/Signup/SignUp';
import Login from './screens/Login/Login';
import Posts from './screens/Posts/Posts';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  // const [allPosts, setAllPosts] = useState([]);
  // const [post, setPost] = useState({});
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      // console.log(userData)
      setCurrentUser(userData)
    }
    handleVerify();
    getPosts();
  }, [])

  // const deleteUserPost = async () => {
  //   const postData = await deletePost();
  //   setCurrentUser(postData)
  //   history.push('/')
  // }

  // useEffect(() => {
  //   const getPostFromUser = async () => {
  //     const resp = await getPosts();
  //     console.log(resp)
  //     setAllPosts(resp);

  //   }
  //   getPostFromUser()
  // }, [])



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
    history.push('/')
  }

  return (
    <div className="App">
      <Route path="/">
        <Layout
          currentUser={currentUser}
          handleLogout={handleLogout}
        />

      </Route>


      <div className="cont-app">

        <Route exact path="/">
          <Profile
            currentUser={currentUser}
          />
        </Route>

        <div className="ins-con-app">
          <Route exact path="/">
            <CreatePost currentUser={currentUser} />
            <Posts
              currentUser={currentUser}
            // allPosts={allPosts}
            // deleteUserPost={deleteUserPost}
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
