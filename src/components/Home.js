import React from "react";

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
            {/* <!-- Fun Home Comic --> */}
            <div className="collection-container">
              <a href="#">
                <img
                  className="comic-img"
                  src="./images/fun-home.jpeg"
                  alt="Fun-Home-Comic"
                />
              </a>

              <ul className="comic-details">
                <li>
                  <em>Fun Home: A Family Tragicomic</em>
                </li>
                <li>by Alison Bechdel</li>
                <li>5 stars</li>
                <li>
                  <a className="details-link" href="#">
                    Details
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Watchmen Comic --> */}
            <article className="collection-container">
              <a href="#">
                <img
                  className="comic-img"
                  src="./images/watchmen.jpeg"
                  alt="Watchmen-Comic"
                />
              </a>

              <ul className="comic-details">
                <li>
                  <em>Watchmen</em>
                </li>
                <li>by Alan Moore</li>
                <li>5 stars</li>
                <li>
                  <a className="details-link" href="#">
                    Details
                  </a>
                </li>
              </ul>
            </article>

            {/* <!-- Hunter X Hunter Comic --> */}
            <article className="collection-container">
              <a href="#">
                <img
                  className="comic-img"
                  src="./images/hunter-x-hunter.jpeg"
                  alt="Hunter-X-Hunter-Comic"
                />
              </a>

              <ul className="comic-details">
                <li>
                  <em>Hunter X Hunter Vol. 1</em>
                </li>
                <li>by Yoshihiro Togashi</li>
                <li>5 stars</li>
                <li>
                  <a className="details-link" href="#">
                    Details
                  </a>
                </li>
              </ul>
            </article>

            {/* <!-- Lumberjanes Comic --> */}
            <article className="collection-container">
              <a href="#">
                <img
                  className="comic-img"
                  src="./images/lumberjanes.jpeg"
                  alt="Lumberjanes-Comic"
                />
              </a>

              <ul className="comic-details">
                <li>
                  <em>Lumberjanes Vol. 1</em>
                </li>
                <li>by Noelle Stevenson</li>
                <li>4 stars</li>
                <li>
                  <a className="details-link" href="#">
                    Details
                  </a>
                </li>
              </ul>
            </article>

            {/* <!-- One Piece Comic --> */}
            <article className="collection-container">
              <a href="#">
                <img
                  className="comic-img"
                  src="./images/one-piece.jpeg"
                  alt="One-Piece-Comic"
                />
              </a>

              <ul className="comic-details">
                <li>
                  <em>One Piece, Vol. 1: Romance Dawn</em>
                </li>
                <li>by Eiichiro Oda</li>
                <li>5 stars</li>
                <li>
                  <a className="details-link" href="#">
                    Details
                  </a>
                </li>
              </ul>
            </article>

            {/* <!-- Wake Comic --> */}
            <article className="collection-container">
              <a href="#">
                <img
                  className="comic-img"
                  src="./images/wake.jpeg"
                  alt="Wake-Comic"
                />
              </a>

              <ul className="comic-details">
                <li>
                  <em>Wake: The Hidden History of Women-Led Slave Revolts</em>
                </li>
                <li>by Rebecca Hall</li>
                <li>4 stars</li>
                <li>
                  <a className="details-link" href="#">
                    Details
                  </a>
                </li>
              </ul>
            </article>

            {/* <!-- Black Panther Comic --> */}
            <article className="collection-container">
              <a href="#">
                <img
                  className="comic-img"
                  src="./images/black-panther.jpeg"
                  alt="Black-Panther-Comic"
                />
              </a>

              <ul className="comic-details">
                <li>
                  <em>Black Panther: A Nation Under Our Feet Book 1</em>
                </li>
                <li>by Ta-Nehisi Coates</li>
                <li>3 stars</li>
                <li>
                  <a className="details-link" href="#">
                    Details
                  </a>
                </li>
              </ul>
            </article>

            {/* <!-- The Walking Dead Comic --> */}
            <article className="collection-container">
              <a href="#">
                <img
                  className="comic-img"
                  src="./images/the-walking-dead.jpeg"
                  alt="The-Walking-Dead-Comic"
                />
              </a>

              <ul className="comic-details">
                <li>
                  <em>The Walking Dead, Vol. 1: Days Gone Bye</em>
                </li>
                <li>by Robert Kirkman</li>
                <li>4 stars</li>
                <li>
                  <a className="details-link" href="#">
                    Details
                  </a>
                </li>
              </ul>
            </article>

            {/* <!-- March Comic --> */}
            <article className="collection-container">
              <a href="#">
                <img
                  className="comic-img"
                  src="./images/march.jpeg"
                  alt="March-Comic"
                />
              </a>

              <ul className="comic-details">
                <li>
                  <em>March: Book One</em>
                </li>
                <li>by John Lewis</li>
                <li>5 stars</li>
                <li>
                  <a className="details-link" href="#">
                    Details
                  </a>
                </li>
              </ul>
            </article>

            {/* <!-- Batman Comic --> */}
            <article className="collection-container">
              <a href="#">
                <img
                  className="comic-img"
                  src="./images/batman.jpeg"
                  alt="Batman-Comic"
                />
              </a>

              <ul className="comic-details">
                <li>
                  <em>Batman: The Dark Knight Returns</em>
                </li>
                <li>by Frank Miller</li>
                <li>3 stars</li>
                <li>
                  <a className="details-link" href="#">
                    Details
                  </a>
                </li>
              </ul>
            </article>

            {/* <!-- Queer Comic --> */}
            <article className="collection-container">
              <a href="#">
                <img
                  className="comic-img"
                  src="./images/queer.jpeg"
                  alt="Queer-Comic"
                />
              </a>

              <ul className="comic-details">
                <li>
                  <em>Queer: A Graphic History</em>
                </li>
                <li>by Meg-John Barker</li>
                <li>4 stars</li>
                <li>
                  <a className="details-link" href="#">
                    Details
                  </a>
                </li>
              </ul>
            </article>

            {/* <!-- Parable of the Sower Comic --> */}
            <article className="collection-container">
              <a href="#">
                <img
                  className="comic-img"
                  src="./images/parable-of-the-sower.jpeg"
                  alt="Parable-of-the-Sower-Comic"
                />
              </a>

              <ul className="comic-details">
                <li>
                  <em>Parable of the Sower</em>
                </li>
                <li>by Octavia E. Butler</li>
                <li>4 stars</li>
                <li>
                  <a className="details-link" href="#">
                    Details
                  </a>
                </li>
              </ul>
            </article>
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
