import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import fetchData from "../utils/fetchData";
import img from "../imgs/no-thumbnail.jpg";
import { CardList, Loader, NavBar } from "../utils/constanst";

const BookDetails = () => {
  const [bookInfo, setBookInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchData(`volumes/${id}`).then((data) => setBookInfo(data));
  }, [setBookInfo, id]);

  if (!bookInfo?.volumeInfo) return <Loader />;

  const {
    volumeInfo: {
      title,
      subtitle,
      authors,
      description,
      ratingsCount,
      averageRating,
      imageLinks,
    },
    saleInfo: { listPrice, buyLink },
  } = bookInfo;

  const rating = (stars) => `★★★★★☆☆☆☆☆`.slice(5 - stars, 10 - stars);

  return (
    <div>
      <NavBar />
      <div class="container ">
        <h2 class="my-4 text-decoration-underline text-primary">
          Book Details
          <br />
        </h2>
        <div class="row bg-danger-subtle rounded-2 p-2">
          <div class="col-md-4">
            <img
              class="img-fluid"
              style={{ width: "300px", height: "400px" }}
              src={imageLinks ? imageLinks.thumbnail : img}
              alt="book thumbnail"
              loading="lazy"
            />
          </div>
          <div class="col-md-8 mt-2">
            <h3 class="mt-1 text-dark fs-1">{title}</h3>
            <p>{subtitle}</p>
            <p className="my-1 fs-6 text-decoration-underline fst-italic text-primary">
              by: {authors?.join(",  ")}
            </p>
            <h4 className="my-1 fs-6 text-black-50 ">Description:-</h4>
            <p class="m-0 p-0 fs-5 text-bg-light p-2">
              {description?.split("").length >= 1
                ? description
                    .split("")
                    .slice(0, 300)
                    .join("")
                    .replace(/<[^>]+>/g, "")
                : "No Description Founded"}
            </p>
            <ul class="list-unstyled mt-1">
              {averageRating ? (
                <li>
                  Rating:{rating(averageRating)}
                  {ratingsCount}
                </li>
              ) : (
                <li>Rating: No Rating</li>
              )}
              <li>
                Price: {listPrice?.amount ? listPrice?.amount + "EG" : "No Price"}
              </li>
              <li>
                <Link to={buyLink} target="_blank">
                  Google Play
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <h2 class="mt-2 text-decoration-underline text-primary">
          Similar Book
          <br />
        </h2>
      </div>
      <CardList search={title} />
    </div>
  );
};

export default BookDetails;
