import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import fetchData from "../utils/fetchData";
import { Loader, CardDetails } from "../utils/constanst";

const CardList = ({ search }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (search) {
      fetchData(`volumes/?q=${search}&maxResults=40`).then((data) =>
        setBooks(data.items)
      );
    } else {
      fetchData(`volumes/?q=React&maxResults=40`).then((data) =>
        setBooks(data.items)
      );
    }
  }, [setBooks, search]);

  return (
    <>
      {books.length >= 1 ? (
        <Container className="mt-5">
          <Row className="justify-content-center">
            {books.map((book) => (
              <Col className="col-auto g-3" key={book.id}>
                <CardDetails book={book} />
              </Col>
            ))}
          </Row>
        </Container>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default CardList;
