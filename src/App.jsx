import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import { UserStorage } from './UserContext';

import './App.css'

const App = () => {
  return (
    <div>
      <UserStorage>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login/*' element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserStorage>
    </div>
  );
};

export default App;