import axios from "axios";
import React, { useEffect, useState } from "react";
import PostBox from "../Post/PostBox";

const ProfileComp = () => {
  const [postdata, setPostdata] = useState("");
  const [userId, setUserId] = useState();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    setUserId(userId);
    fetchPosts();
  }, []);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    await axios.post("/api/post", { author: userId, postdata });
    setPostdata("");
    fetchPosts();
  };
  const fetchPosts = () => {
    axios.get("/api/post").then((response) => {
      setPosts(response.data.posts);
    });
  };
  return (
    <div
      className="container-fluid  "
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "black",
        borderRight: "2px silver solid",
      }}>
      <h1 className="text-center text-white tw-mt-5">Dashboard</h1>
      <div className="tw-flex  tw-flex-col tw-w-full tw-mt-6 tw-px-5 lg:tw-mx-auto">
        <div className="tw-flex  tw-flex-col tw-w-full lg:tw-mx-auto ">
          <textarea
            className=" tw-p-1 lg:tw-w-2/3 lg:tw-mx-auto  tw-bg-transparent focus:tw-outline-none  tw-resize-none tw-text-white"
            placeholder="What's Happening"
            value={postdata}
            onChange={(ev) => setPostdata(ev.target.value)}
          />
          <div className="lg:tw-ml-44 ">
            <button
              className="tw-bg-twitterBlue tw-mt-3 tw-text-white tw-px-5 tw-py-1 lg:tw-mr-44 tw-rounded-lg "
              onClick={(ev) => handleSubmit(ev)}>
              Post
            </button>
          </div>

          {posts.length > 0 && posts.map((post) => <PostBox post={post} />)}
        </div>
      </div>
    </div>
  );
};

export default ProfileComp;
