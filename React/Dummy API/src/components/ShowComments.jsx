import { MdDeleteOutline } from "react-icons/md";

function ShowComments({ comments, deleteComment }) {
  const handleDelete = (id) => {
    fetch(`https://dummyjson.com/comments/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(console.log);
    deleteComment(id);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Comments</h1>
      <ul>
        {comments.map((comment) => (
          <div key={comment.id} className="comments-div">
            <MdDeleteOutline
              style={{ float: "right" }}
              onClick={() => handleDelete(comment.id)}
            />
            <h4>By: {comment.user.fullName}</h4>

            <h6>{comment.body}</h6>
          </div>
        ))}
      </ul>
    </>
  );
}

export default ShowComments;
