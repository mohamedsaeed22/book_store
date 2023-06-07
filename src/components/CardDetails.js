import React from "react";
import { Card } from "react-bootstrap";
import img from "../imgs/no-thumbnail.jpg";
import { Link } from "react-router-dom";

const CardDetails = ({ book }) => {
  const {
    volumeInfo: {
      title,
      authors,
      imageLinks,
    },
  } = book;

  return (
    <Card
      style={{
        width: "9rem",
        height: "22rem",
        position: "relative",
        overflowY: "hidden",
      }}
    >
      <Card.Img
        variant="top"
        style={{ height: "50%" }}
        loading="lazy"
        src={imageLinks ? imageLinks.thumbnail : img}
      />
      <Link to={`/book/${book.id}`} className="stretched-link" />

      <div style={{ padding: "15px 10px" }}>
        <Card.Title style={{ fontSize: "1rem", textAlign: "center" }}>
          {title?.slice(0, 30)}...
        </Card.Title>
        <Card.Text style={{ fontSize: ".8rem" }}>

          <div style={{ fontStyle: "italic" , color:'violet', textAlign:'center'}}>
            Authors: <span style={{color:'black'}}>{authors?.join(", ")}</span>
          </div>
          
        </Card.Text>
      </div>
    </Card>
  );
};

export default CardDetails;
