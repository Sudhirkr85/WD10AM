import { use, useEffect, useRef, useState } from "react";
import "./App.css";
import ShowComments from "./components/ShowComments";

function App() {
  const [comments, setComments] = useState([]);
  const commentRef = useRef(null);
  const userIdRef = useRef(null);
  const postIdRef = useRef(null);

  function deleteComment(id){
    const remainingComments = comments.filter(comment => comment.id !== id);
    setComments(remainingComments);
  }


  useEffect(() => {
    fetch("https://dummyjson.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data.comments));
  }, []);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const comment = commentRef.current.value;
    const userId = userIdRef.current.value;
    const postId = postIdRef.current.value;

    const res = await fetch("https://dummyjson.com/comments/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        body: comment,
        postId: postId,
        userId: userId,
      }),
    });
    const newComment = await res.json();
    setComments([newComment, ...comments]);

    // fetch("https://dummyjson.com/comments/add", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     body: comment,
    //     postId: postId,
    //     userId: userId,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((newComment) => setComments([newComment, ...comments]));
  };

  return (
    <>
      <div className="Add-Comment">
        <form onSubmit={handleOnSubmit}>
          <input type="text" placeholder="Add Comment" ref={commentRef} />
          <input type="text" placeholder="User ID" ref={userIdRef} />
          <input type="text" placeholder="Post ID" ref={postIdRef} />
          <button type="submit">Add Comment</button>
        </form>
      </div>

      <ShowComments comments={comments} deleteComment={deleteComment} />
    </>
  );
}

export default App;
