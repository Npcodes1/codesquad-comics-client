import React, { useState, useEffect } from "react";
// import booksData from "../data/books";
import { useNavigate, useParams } from "react-router-dom";

const url = "http://localhost:8080";

const Update = () => {
  // Create a variable to get a book id from the URL using useParams
  const { bookId } = useParams();

  const navigate = useNavigate();

  const [book, setBook] = useState({});

  //Find a book from the books data where the id matches.Create a new variable and assign the found book to the variable. Use the setter function of the book state to set the value of the book to the new found book.
  useEffect(() => {
    fetch(`${url}/api/books/${bookId}`, {
      method: "GET",
    })
      .then((response) => console.log(response))
      .then((result) => {
        console.log(result);
        setBook(result.data);
      })
      .catch((error) => console.log(error));

    // find a book from the books data where the id matches. Create a new variable and assign the found book to the variable.
    // const foundBook = booksData.find((book) => book._id === id);

    // //convert object to string
    // localStorage.setItem("book", JSON.stringify(foundBook));

    // // Use the setter function of the book state to set the value of the book to the new found book.
    // setBook(foundBook);

    // //if book is found, convert string back to object and read it
    // if (foundBook) {
    //   JSON.parse(localStorage.getItem(foundBook));
    //   console.log(foundBook);
    // }
  }, [bookId]);

  const handleUpdateForm = (e) => {
    e.preventDefault();
    //printing message the method ran
    console.log("This method ran!");
    //print the value of each input using name attribute
    console.log(e.target.title.value);
    console.log(e.target.author.value);
    console.log(e.target.publisher.value);
    console.log(e.target.genre.value);
    console.log(e.target.pages.value);
    console.log(e.target.rating.value);
    console.log(e.target.synopsis.value);

    // creating variable to store book information that is submitted from form
    const body = {
      title: e.target.title.value,
      author: e.target.author.value,
      publisher: e.target.publisher.value,
      genre: e.target.genre.value,
      pages: e.target.pages.value,
      rating: e.target.rating.value,
      synopsis: e.target.synopsis.value,
    };

    fetch(`${url}/api/books/update/${bookId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setBook(result.data);
        navigate("/admin");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <main className="main-container bg-gradient">
        <section className="comics-container">
          <form className="form" onSubmit={handleUpdateForm}>
            <h1 className="h1-title">UPDATE COMIC</h1>
            <div className="form-fields">
              <div className="form-details">
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  defaultValue={book.title}
                  // placeholder="title value stored in the database"
                  required
                />
              </div>

              <div className="form-details">
                <label htmlFor="author">Author:</label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  defaultValue={book.author}
                  // placeholder="author value stored in the database"
                  required
                />
              </div>

              <div className="form-details">
                <label htmlFor="publisher">Publisher:</label>
                <select name="publisher" id="publisher" required>
                  <option value="BOOM! Box">BOOM! Box</option>
                  <option value="DC Comics">DC Comics</option>
                  <option value="Harry N. Abrams">Harry N. Abrams</option>
                  <option value="Icon Books">Icon Books</option>
                  <option value="Image Comics">Image Comics</option>
                  <option value="Marvel">Marvel</option>
                  <option value="Simon & Schuster">Simon & Schuster</option>
                  <option value="Top Shelf Productions">
                    Top Shelf Productions
                  </option>
                  <option value="VIZ Media LLC">VIZ Media LLC</option>
                  <option value={book.publisher} selected disabled>
                    publisher value stored in the database
                  </option>
                </select>
              </div>

              <div className="form-details">
                <label htmlFor="genre">Genre:</label>
                <input
                  type="text"
                  id="genre"
                  name="genre"
                  defaultValue={book.genre}
                  // placeholder="genre data stored in database"
                  required
                />
              </div>

              <div className="form-details">
                <label htmlFor="pages">Number of pages:</label>
                <input
                  type="text"
                  id="pages"
                  name="pages"
                  defaultValue={book.pages}
                  // placeholder="pages stored in database"
                  required
                />
              </div>

              <div className="form-details">
                <label htmlFor="rating">Rating:</label>
                <input
                  type="number"
                  id="rating"
                  name="rating"
                  min="0"
                  max="5"
                  defaultValue={book.rating}
                  // placeholder="5"
                  required
                />
              </div>

              <div className="form-details">
                <label htmlFor="synopsis">Synopsis:</label>
                <textarea
                  id="synopsis"
                  name="synopsis"
                  // placeholder="synopsis value stored in database"
                  required
                ></textarea>
              </div>

              <div className="form-submit">
                <button className="btn" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Update;
