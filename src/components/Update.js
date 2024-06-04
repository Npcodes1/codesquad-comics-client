import React, { useState, useEffect } from "react";
import booksData from "../data/books";

const Update = () => {
  const id = "66b62a49-a8de-4914-ab3f-49fe0554c08a";

  const [book, setBook] = useState({});

  //Find a book from the books data where the id matches.Create a new variable and assign the found book to the variable. Use the setter function of the book state to set the value of the book to the new found book.
  useEffect(() => {
    const foundBook = booksData.find((book) => book.id === id);
    setBook(foundBook);
  }, []);

  const handleUpdateForm = (e) => {
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
                  value="title value stored in the database"
                  required
                />
              </div>

              <div className="form-details">
                <label htmlFor="author">Author:</label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value="author value stored in the database"
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
                  <option value="select" selected disabled>
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
                  value="genre data stored in database"
                  required
                />
              </div>

              <div className="form-details">
                <label htmlFor="pages">Number of pages:</label>
                <input
                  type="text"
                  id="pages"
                  name="pages"
                  value="pages stored in database"
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
                  value="5"
                  required
                />
              </div>

              <div className="form-details">
                <label htmlFor="synopsis">Synopsis:</label>
                <textarea
                  id="synopsis"
                  name="synopsis"
                  placeholder="synopsis value stored in database"
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
