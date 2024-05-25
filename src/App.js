import LandingPage from 'pages/LandingPage';
import GlobalStyles from 'styles/GlobalStyles';
import { css } from "styled-components/macro"; //eslint-disable-line
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactUs from 'pages/ContactUs';
import AboutUs from 'pages/AboutUs';
import Pricing from 'pages/Pricing';
import Signup from 'pages/Signup';
import Login from 'pages/Login';
import ScrollToTop from 'helpers/ScrollToTop';
function App() {
  return (
    <>
    <GlobalStyles/>
    <Router>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="Pricing" element={<Pricing/>} />
        <Route path="Signup" element={<Signup/>}/>
        <Route path="Login" element={<Login/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;
