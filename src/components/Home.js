import React from "react";
import booksData from "../data/books";

const Home = () => {
  return (
    <div>
      <main className="main-container bg-gradient">
        <div className="comics-container">
          <h1 className="h1-title">CODESQUAD COMICS</h1>
          <div className="comic-tiles">
            <p>
              CodeSquad Comics is a collection of graphic novels read by Nicole
              Payne. The site is intended to display comic book covers along
              with information about each book, including the author, a rating,
              and other details about the graphic novel. Browse through the
              complete collection below. Click on the cover image or the Details
              link to see even more information about each graphic novel
              including the publisher, genre, number of pages, and a brief
              synopsis. The About page includes meta information about this
              collection. Login is only available to the site administrator at
              this time.
            </p>
          </div>
        </div>

        <div className="comics-container">
          <h2 className="h2-title">COMPLETE COMIC COLLECTION</h2>
          <div className="comic-tiles">
            {booksData.map((book) => {
              return (
                <div className="collection-container">
                  <a href="#">
                    <img
                      className="comic-img"
                      src={`./images/${book.image}`}
                      alt={`Book cover for ${book.title}`}
                      width="200px"
                    />
                  </a>

                  <ul className="comic-details">
                    <li>
                      <em>{book.title}</em>
                    </li>
                    <li>{`by ${book.author}`}</li>
                    <li>{`${book.rating} stars`}</li>
                    <li>
                      <a className="details-link" href="#">
                        Details
                      </a>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="form-submit">
            <button className="btn" type="submit">
              DISPLAY MORE
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
