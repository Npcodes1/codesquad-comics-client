import React from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const handleCreateForm = (e) => {
    //prevent default behavior of form
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

    const body = {
      title: e.target.title.value,
      author: e.target.author.value,
      publisher: e.target.publisher.value,
      genre: e.target.genre.value,
      pages: e.target.pages.value,
      rating: e.target.rating.value,
      synopsis: e.target.synopsis.value,
    };

    console.log(body);

    fetch(`http://localhost:8080/api/books/create/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.statusCode === 200) {
          navigate("/admin");
        } else {
          throw new Error(result.error.message);
        }
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <main className="main-container bg-gradient">
        <section className="comics-container">
          <form className="form" onSubmit={handleCreateForm}>
            <h1 className="h1-title">CREATE NEW COMIC</h1>
            <div className="form-fields">
              <div className="form-details">
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title"
                  required
                />
              </div>

              <div className="form-details">
                <label htmlFor="author">Author:</label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  placeholder="Author"
                  required
                />
              </div>

              <div className="form-details">
                <label htmlFor="publisher">Publisher:</label>
                <select name="publisher" id="publisher" required>
                  <option value="select" selected disabled>
                    Select
                  </option>
                  <option value="boom-box">BOOM! Box</option>
                  <option value="dc-comics">DC Comics</option>
                  <option value="harry-n-abrams">Harry N. Abrams</option>
                  <option value="icon-books">Icon Books</option>
                  <option value="image-comics">Image Comics</option>
                  <option value="marvel">Marvel</option>
                  <option value="simon-schuster">Simon & Schuster</option>
                  <option value="top-shelf-productions">
                    Top Shelf Productions
                  </option>
                  <option value="viz-media">VIZ Media LLC</option>
                </select>
              </div>

              <div className="form-details">
                <label htmlFor="genre">Genre:</label>
                <input
                  type="text"
                  id="genre"
                  name="genre"
                  placeholder="Genre"
                  required
                />
              </div>

              <div className="form-details">
                <label htmlFor="pages">Number of pages:</label>
                <input
                  type="text"
                  id="pages"
                  name="pages"
                  placeholder="Number of pages"
                  required
                />
              </div>

              <div className="form-details">
                <label htmlFor="rating">Rating:</label>
                <input
                  type="number"
                  id="rating"
                  name="rating"
                  min="1"
                  max="5"
                  placeholder="number (0-5)"
                  required
                />
              </div>

              <div className="form-details">
                <label htmlFor="synopsis">Synopsis:</label>
                <textarea
                  id="synopsis"
                  name="synopsis"
                  placeholder="Synopsis"
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

export default Create;
