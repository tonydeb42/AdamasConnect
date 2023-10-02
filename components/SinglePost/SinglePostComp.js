import React from "react";
import PostBox from "../Post/PostBox";

const SinglePostComp = ({ post }) => {
  return (
    <div
      className="container-fluid "
      style={{ height: "100%", width: "100%", backgroundColor: "black" }}>
      <div className="text-center position-relative " style={{ top: "35px", color: "white" }}>
        <br />
        <PostBox post={post} />
      </div>
    </div>
  );
};

export default SinglePostComp;
