import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div>
      <div class="container w-100 h-100 text-center mt-5">
        <div class="row">
          <div class="col">
            <h1>Page Not Found</h1>
            <p class="lead shadow-none">
              Something went terribly wrong...
              <br />
              Try and reload the page, that usually does the trick.
            </p>
            <Link to={`/`}>
              <Button className="btn btn-info">Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
