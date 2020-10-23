import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, useHistory } from 'react-router-dom';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import { getPosts, createPost, deletePost, updatePost } from './services/post';
//screens
import Layout from './screens/Layout/Layout';
import Profile from './screens/Profile/Profile';
import CreatePost from './screens/CreatePost/CreatePost';
import SignUp from './screens/Signup/SignUp';
import Login from './screens/Login/Login';
import Posts from './screens/Posts/Posts';
import EditPost from './screens/EditPost/EditPost';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData)
    }
    handleVerify();
  }, [])

  useEffect(() => {
    const getUserPosts = async () => {
      const userPosts = await getPosts()
      setPosts(userPosts)

    }
    if (currentUser) {
      getUserPosts()
    }
  }, [currentUser])

  //============================================================
  //========================== Posts ===========================
  //============================================================
  const handlePostCreate = async (formData) => {
    const created = await createPost(formData);
    setPosts(prevState => [...prevState, created]);
  }

  const handleDelete = async (id) => {
    await deletePost(id);
    setPosts(prevState => {
      return prevState.filter(post => post.id !== id)
    });
  }

  const handleUpdate = async (id, formData) => {
    const updatedPost = await updatePost(id, formData);
    setPosts(prevState => prevState.map(post => {
      return post.id === parseInt(id) ? updatedPost : post
    }))
    history.push('/')
  }
  //============================================================
  //========================== Auth ============================
  //============================================================
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
          <Route path="/posts/:id/edit">
            <EditPost
              currentUser={currentUser}
              posts={posts}
              handleUpdate={handleUpdate}
            />
          </Route>
          <Route exact path="/">
            <CreatePost
              currentUser={currentUser}
              handlePostCreate={handlePostCreate}
            />
            <Posts
              currentUser={currentUser}
              posts={posts}
              handleDelete={handleDelete}
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
