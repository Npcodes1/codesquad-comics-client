import React from "react";

const About = () => {
  return (
    <div>
      <main className="main-container bg-gradient">
        <section className="comics-container">
          <h1 className="h1-title">ABOUT CODESQUAD COMICS</h1>
          <p>
            CodeSquad Comics is a collection of graphic novels read by Nicole
            Payne. Copyrighted images are used for review purposes only. Meta
            information about this collection can be found below. A detailed
            list of all graphic novels in this collection can be found on the
            homepage. Additional details about each comic book, including the
            author, genre, number of pages, and a brief synopsis, can be found
            by navigating to the homepage and clicking the image of the book
            cover or the Details link for the desired graphic novel.
          </p>

          <h2 className="h2-title">COLLECTION DETAILS</h2>
          <div className="collection-details">
            <ul>
              <li>total comic books: 12</li>
              <li>latest additions: 12</li>
              <li>5-star ratings: 5</li>
              <li>publishers: 9</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
