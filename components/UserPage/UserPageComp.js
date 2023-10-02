import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../assets/connect_logo.png";
import PostBox from "../Post/PostBox";

const UserPageComp = ({ id }) => {
  const [userInfo, setUserInfo] = useState();
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState();

  useEffect(() => {
    if (!id) return;
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    setUserId(userId);
    fetchUser();
    fetchPosts();
  }, []);

  async function fetchUser() {
    axios.get("/api/user/?id=" + id).then((response) => {
      setUserInfo(response.data.user);
    });
  }
  async function fetchPosts() {
    axios.get("/api/post/?author=" + id).then((response) => {
      setPosts(response.data.posts);
    });
  }
  console.log(userInfo);
  return (
    <div
      className="container-fluid tw-text-lg"
      style={{ height: "100%", width: "100%", backgroundColor: "black" }}>
      <div className=" position-relative" style={{ top: "35px", color: "white" }}>
        <br />

        <div className="tw-flex  tw-flex-col  tw-px-10 tw-py-5  lg:tw-mx-20 tw-mt-5 tw-text-white ">
          <div className="tw-flex tw-gap-3">
            <div className="tw-rounded-full border tw-w-24 tw-h-24 tw-overflow-hidden">
              <Image
                src={logo}
                alt="adamas_connect_logo"
                style={{ height: "90px", width: "95px" }}
              />
            </div>
            <div className="tw-flex tw-flex-col">
              <div className="tw-text-white ">
                <span>{userInfo?.name}</span>
              </div>

              {userInfo?.email}
              {userId === id && (
                <div>
                  <button className="btn btn-dark tw-mt-5">Edit Profile</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <div className="border"></div>
      {posts.length > 0 && posts.map((post) => <PostBox post={post} key={post._id} />)}
    </div>
  );
};

export default UserPageComp;
