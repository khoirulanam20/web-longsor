import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import News from "./Pages/News";
import Notfound from "./Pages/Notfound";
import Footer from "./Components/Footer";
import { NewsProvider } from "./NewsContext"; 

function App() {
  return (
    <Router>
      <NewsProvider>
        <div>
          <Navbar bg="dark" expand="lg">
            <Container fluid>
              <Navbar.Brand as={Link} to="/" className="mx-2 custom-navbar-brand">
                <img
                  alt=""
                  src={`${process.env.PUBLIC_URL}/images/landslide.png`}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                Tanggap Darurat Tanah Longsor
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto mx-5">
                  <Nav.Link as={Link} to="/">
                    <Button variant="outline-light" className="mx-1">Home</Button>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about">
                    <Button variant="outline-light" className="mx-1">About</Button>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/contact">
                    <Button variant="outline-light" className="mx-1">Contact</Button>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/news">
                    <Button variant="outline-light" className="mx-1">News</Button>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <div className="container mt-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/news" element={<News />} />
              <Route path="*" element={<Notfound />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </NewsProvider>
    </Router>
  );
}

export default App;
