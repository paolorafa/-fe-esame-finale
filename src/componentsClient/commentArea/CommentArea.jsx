import React from "react";


const CommentArea = ({ comment, _id }) => {
  // const handleDeleteClick = () => {
  //   onDeleteComment();
  // };

  return (
    <>
      <div className="container d-flex justify-content-between my-scroll  ">
        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th scope="col">Autore</th>
              <th scope="col">Commento</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{_id}</td>
              <td>{comment}</td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CommentArea;