import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Navbar,
  Container,
  Nav,
  InputGroup,
  FormControl,
  Button,
  Col,
  Row,
} from "react-bootstrap";

const SearchBox = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <InputGroup style={{ width: "20vw" }}>
      <FormControl
        type="text"
        className="mr-sm-2"
        placeholder="What are you looking for..."
        value={searchInput}
        onChange={handleInput}
        width="40px"
      />
      <Link to={`/search/${searchInput}`}>
        <Button variant="danger" id="button-addon1">
          Search
        </Button>
      </Link>
    </InputGroup>
  );
};

export default SearchBox;
