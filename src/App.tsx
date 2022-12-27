import "./components/auth/auth.css";
import styled from "styled-components";
import LoginForm from "./components/auth/Login";
import SignUpForm from "./components/auth/SignUp";
import NavbarContainer from "./components/navbar/Navbar";
import DashboardPage from "./components/Dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const MainAppDiv = styled.div`
`

function App() {
  return (
    <BrowserRouter>
      <MainAppDiv>
        <Routes>
          <Route path="/" element={<NavbarContainer />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </MainAppDiv>
    </BrowserRouter>
  );
}

export default App;
