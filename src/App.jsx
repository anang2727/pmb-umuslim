import React from 'react';
import Container from '@mui/material/Container';
import Navbar from './components/Navbar';
import MessageForm from './components/MessageForm';
import MainChatAdmin from './components/callAdmin/MainChatAdmin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary'; 
import History from './components/callAdmin/History';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hubungi-Admin" element={<MainChatAdminPage />} />
        <Route path="/history" element={<History />} />
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
