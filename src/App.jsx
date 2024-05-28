import React from 'react';
import Container from '@mui/material/Container';
import Navbar from './components/Navbar';
import MessageForm from './components/MessageForm';
import MainChatAdmin from './Pages/callAdmin/MainChatAdmin';
import ErrorBoundary from './Pages/ErrorBoundary'; 
import History from './Pages/callAdmin/History';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hubungi-Admin" element={<MainChatAdminPage />} />
        <Route path="/history" element={<History />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <MessageForm />
      </Container>
    </>
  );
}

const MainChatAdminPage = () => {
  return (
    <>
      <MainChatAdmin />
    </>
  );
}

export default App;
