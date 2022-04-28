/** @format */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/home/Home';
import Register from './Pages/Register';
import Signup from './Pages/Signup';
import Connect from './Components/Connect';
import { useState } from 'react';
import Recoverpassword from './Pages/RecoverPassword';
import RecoveryPin from './Pages/RecoveryPin';
import ResetPassword from './Pages/ResetPassword';

function App() {
  const [showConnect, setShowConnect] = useState(false);

  return (
    <Router>
      <Connect showConnect={showConnect} setShowConnect={setShowConnect} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='register' element={<Register />}>
          <Route
            path='login'
            element={<Login setShowConnect={setShowConnect} />}
          />
          <Route
            path='signup'
            element={<Signup setShowConnect={setShowConnect} />}
          />
          <Route path='recovery-email' element={<Recoverpassword />} />
          <Route path='recovery-pin' element={<RecoveryPin />} />
          <Route path='reset-password' element={<ResetPassword />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
