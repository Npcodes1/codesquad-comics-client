import React from "react";

const Create = () => {
  return (
    <div>
      <main className="main-container bg-gradient">
        <section className="comics-container">
          <form className="form" action="#">
            <h1 className="h1-title">CREATE NEW COMIC</h1>
            <div className="form-fields">
              <div className="form-details">
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title"
                />
              </div>

              <div className="form-details">
                <label htmlFor="author">Author:</label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  placeholder="Author"
                />
              </div>

              <div className="form-details">
                <label htmlFor="publisher">Publisher:</label>
                <select name="publisher" id="publisher">
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
                />
              </div>

              <div className="form-details">
                <label htmlFor="pages">Number of pages:</label>
                <input
                  type="text"
                  id="pages"
                  name="pages"
                  placeholder="Number of pages"
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
                />
              </div>

              <div className="form-details">
                <label htmlFor="synopsis">Synopsis:</label>
                <textarea
                  id="synopsis"
                  name="synopsis"
                  placeholder="Synopsis"
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
