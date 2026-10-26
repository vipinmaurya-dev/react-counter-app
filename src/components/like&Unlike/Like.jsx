import { useState } from "react";
import "./Like.css";

function Like() {
  const [like, setLike] = useState(false);

  return (
    <>
      <div className="like-container">
        <div>Like</div>
        <h2>{like ? "💖" : "🤍"}</h2>
        <button onClick={() => setLike(!like)}>
          {like ? "Unlike" : "Like"}
        </button>
      </div>
    </>
  );
}

export default Like;
