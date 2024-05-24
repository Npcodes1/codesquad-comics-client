import React from "react";

const Admin = () => {
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
                <tr className="table-row">
                  <td>Batman: The Dark Knight Returns</td>
                  <td>
                    <button className="btn btn-edit">EDIT</button>
                  </td>
                  <td>
                    <button className="btn btn-delete">DELETE</button>
                  </td>
                </tr>
                <tr className="table-row">
                  <td>Black Panther: A Nation Under Our Feet Book 1</td>
                  <td>
                    <button className="btn btn-edit">EDIT</button>
                  </td>
                  <td>
                    <button className="btn btn-delete">DELETE</button>
                  </td>
                </tr>
                <tr className="table-row">
                  <td>Fun Home: A Family Tragicomic</td>
                  <td>
                    <button className="btn btn-edit">EDIT</button>
                  </td>
                  <td>
                    <button className="btn btn-delete">DELETE</button>
                  </td>
                </tr>
                <tr className="table-row">
                  <td>Hunter X Hunter Vol. 1</td>
                  <td>
                    <button className="btn btn-edit">EDIT</button>
                  </td>
                  <td>
                    <button className="btn btn-delete">DELETE</button>
                  </td>
                </tr>
                <tr className="table-row">
                  <td>Lumberjanes Vol. 1</td>
                  <td>
                    <button className="btn btn-edit">EDIT</button>
                  </td>
                  <td>
                    <button className="btn btn-delete">DELETE</button>
                  </td>
                </tr>
                <tr className="table-row">
                  <td>March: Book One</td>
                  <td>
                    <button className="btn btn-edit">EDIT</button>
                  </td>
                  <td>
                    <button className="btn btn-delete">DELETE</button>
                  </td>
                </tr>
                <tr className="table-row">
                  <td>One Piece, Vol. 1: Romance Dawn</td>
                  <td>
                    <button className="btn btn-edit">EDIT</button>
                  </td>
                  <td>
                    <button className="btn btn-delete">DELETE</button>
                  </td>
                </tr>
                <tr className="table-row">
                  <td>Parable of the Sower</td>
                  <td>
                    <button className="btn btn-edit">EDIT</button>
                  </td>
                  <td>
                    <button className="btn btn-delete">DELETE</button>
                  </td>
                </tr>
                <tr className="table-row">
                  <td>Queer: A Graphic History</td>
                  <td>
                    <button className="btn btn-edit">EDIT</button>
                  </td>
                  <td>
                    <button className="btn btn-delete">DELETE</button>
                  </td>
                </tr>
                <tr className="table-row">
                  <td>The Walking Dead, Vol. 1: Days Gone Bye</td>
                  <td>
                    <button className="btn btn-edit">EDIT</button>
                  </td>
                  <td>
                    <button className="btn btn-delete">DELETE</button>
                  </td>
                </tr>
                <tr className="table-row">
                  <td>Wake: The Hidden History of Women-Led Slave Revolts</td>
                  <td>
                    <button className="btn btn-edit">EDIT</button>
                  </td>
                  <td>
                    <button className="btn btn-delete">DELETE</button>
                  </td>
                </tr>
                <tr className="table-row">
                  <td>Watchmen</td>
                  <td>
                    <button className="btn btn-edit">EDIT</button>
                  </td>
                  <td>
                    <button className="btn btn-delete">DELETE</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Admin;
