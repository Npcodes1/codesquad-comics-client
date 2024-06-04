import React, { useState, useEffect } from "react";
import booksData from "../data/books";

const Admin = () => {
  // useState to hold data for "books"
  const [books, setBooks] = useState([]);

  // useEffect to use the setter function for books and set it to booksData imported from the book.js file. Only render once.
  useEffect(() => {
    setBooks(booksData);
  }, []);

  return (
    <div>
      <main className="main-container bg-gradient">
        <section className="comics-container">
          <h1 className="h1-title admin">ADMIN PAGE</h1>
          <button className="btn" type="submit">
            Add New Comic
          </button>

          <div className="table-container">
            <table className="table">
              <thead className="table-heading">
                <tr>
                  <th>COMIC TITLE</th>
                  <th>EDIT</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {books.map((book) => {
                  return (
                    <tr className="table-row" key={book.id}>
                      <td>{book.title}</td>
                      <td>
                        <button className="btn btn-edit">EDIT</button>
                      </td>
                      <td>
                        <button className="btn btn-delete">DELETE</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Admin;
