import { BrowserRouter , Routes, Route,   } from 'react-router-dom';
import HomePage from "./pages/HomePage";

import Register from "./pages/register/Register";

import Login from "./pages/login/Login";

import Profile from "./pages/profile/Profile";
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
function App() {
  const {user }  = useContext(AuthContext)
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={user? <HomePage /> : <Register/>  } />
      <Route path="/login" element={user?<HomePage />: <Login /> } />
      <Route path="/register" element={<Register /> } />
      <Route path="/profile/:username" element={<Profile /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
