import React, { useState } from "react";
import { Button, Container, Form, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    if (search.length>=1) {
      navigate(`/search/${search}`);
    }
    setSearch("");
  };

  return (
    <Navbar bg="dark">
      <Container>
        <Link to="/" className="brand-name">
          BookStore
        </Link>
        <Form className="d-flex ">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={search}
            required
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            variant="outline-primary"
            type="submit"
            onClick={(e) => handleClick(e)}
          >
            Search
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
};
export default NavBar;
