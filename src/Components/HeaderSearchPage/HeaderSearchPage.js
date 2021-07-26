import React from "react";
import "./styles.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import SearchBar from "../../Components/SearchBar/index.js";

// let trending =
// 	'https://api.themoviedb.org/3/trending/all/week?api_key=be052554f80e371720157b837ddf8d48';
import logo from "./logo.png";
import { Link } from "react-router-dom";
const HeaderSearchPage = () => {
  return (
    <Navbar className="nav-bar" variant="dark" expand="lg">
      <Link style={{ textDecoration: "none" }} as={Link} to={`/`}>
        <Navbar.Brand>
          <img
            src={logo}
            alt=""
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          CodeFlix
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Back to Homepage</Nav.Link>
          <Nav.Link href="/#trendingnow">Trending Now</Nav.Link>
          <Nav.Link href="/#movie">Movie</Nav.Link>
          <Nav.Link href="/#tv">TV Shows</Nav.Link>
          <Nav.Link href="/#action">Action</Nav.Link>
          <Nav.Link href="/#adventure">Adventure</Nav.Link>
          <Nav.Link href="/#comedy">Comedy</Nav.Link>
        </Nav>
        <SearchBar />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderSearchPage;
