import React from "react";

const Update = () => {
  return (
    <div>
      <main className="main-container bg-gradient">
        <section className="comics-container">
          <form className="form" action="#">
            <h1 className="h1-title">UPDATE COMIC</h1>
            <div className="form-fields">
              <div className="form-details">
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value="title value stored in the database"
                />
              </div>

              <div className="form-details">
                <label htmlFor="author">Author:</label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value="author value stored in the database"
                />
              </div>

              <div className="form-details">
                <label htmlFor="publisher">Publisher:</label>
                <select name="publisher" id="publisher">
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
                />
              </div>

              <div className="form-details">
                <label htmlFor="pages">Number of pages:</label>
                <input
                  type="text"
                  id="pages"
                  name="pages"
                  value="pages stored in database"
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
                />
              </div>

              <div className="form-details">
                <label htmlFor="synopsis">Synopsis:</label>
                <textarea
                  id="synopsis"
                  name="synopsis"
                  placeholder="synopsis value stored in database"
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
