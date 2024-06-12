import React, { useState, useEffect } from "react";
// import booksData from "../data/books";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:8080";

const Admin = () => {
  const navigate = useNavigate();
  // useState to hold data for "books"
  const [books, setBooks] = useState([]);

  // useEffect to use the setter function for books and set it to booksData imported from the book.js file. Only render once.
  useEffect(() => {
    fetch(`${url}/api/books`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setBooks(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDeleteBook = (bookId) => {
    fetch(`${url}/api/books/delete/${bookId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const handleEditBook = (bookId) => {
    navigate("/update");

    // fetch(`http://localhost:8080/api/books/edit/${bookId}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((result) => {
    //     if (result.statusCode === 200) {
    //       console.log(result, "Edited!");
    //     } else {
    //       throw new Error(result.error.message);
    //     }
    //   })
    //   .catch((error) => console.log(error));
  };

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
                        <button
                          className="btn btn-edit"
                          onClick={() => handleEditBook(book.id)}
                        >
                          EDIT
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-delete"
                          onClick={() => handleDeleteBook(book.id)}
                        >
                          DELETE
                        </button>
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
