import axios from "axios";
import React, { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { ClipLoader } from "react-spinners";
import PostBox from "../Post/PostBox";

const ProfileComp = () => {
  const [postdata, setPostdata] = useState("");
  const [userId, setUserId] = useState();
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    setUserId(userId);
    fetchPosts();
  }, []);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!postdata) return;
    await axios.post("/api/post", { author: userId, images, postdata });
    setPostdata("");
    setImages([]);
    fetchPosts();
  };
  const fetchPosts = () => {
    axios.get("/api/post").then((response) => {
      setPosts(response.data.posts);
    });
  };
  const uploadImages = async (ev) => {
    const files = ev.target?.files;
    if (files?.length > 0) {
      setIsUploading(true);
      const data = new FormData();
      for (const file of files) {
        data.append("file", file);
      }
      const res = await axios.post("/api/upload", data);
      setImages((oldImages) => {
        return [...oldImages, ...res.data.links];
      });
      setIsUploading(false);
    }
  };
  const deletePhoto = (index) => {
    setImages((prev) => {
      return [...prev].filter((p, i) => {
        return i !== index;
      });
    });
  };
  function updateImagesOrder(images) {
    setImages(images);
  }
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
            className=" tw-p-1 lg:tw-w-2/3 lg:tw-mx-auto  tw-bg-transparent focus:tw-outline-none tw-resize-none tw-text-white border-primary border-2 tw-rounded-lg"
            placeholder="What's Happening"
            value={postdata}
            onChange={(ev) => setPostdata(ev.target.value)}
          />
          <div className="lg:tw-ml-40 tw-flex tw-items-center tw-gap-4 tw-flex-wrap">
            {isUploading && (
              <div className="h-24  flex items-center ">
                <ClipLoader color="#36cbd6" />
              </div>
            )}
            <div className="tw-mb-2 tw-flex tw-flex-wrap tw-gap-2">
              <ReactSortable
                list={images}
                setList={updateImagesOrder}
                className="tw-flex tw-flex-wrap tw-gap-1">
                {!!images.length &&
                  images.map((link, index) => (
                    <div
                      key={link}
                      className="tw-h-28 tw-mt-5 tw-bg-black tw-p-4 tw-shadow-sm tw-rounded-sm border border-gray-200 ">
                      <img src={link} alt="" className="tw-h-20" />
                      <div className="tw-float-right">
                        <button
                          className="btn btn-danger tw-p-0 tw-rounded-full tw-h-6 tw-w-6"
                          onClick={() => deletePhoto(index)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="tw-h-5 tw-flex tw-w-full">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
              </ReactSortable>
            </div>
            <label className="tw-w-20 tw-h-8 tw-mt-3 tw-flex tw-justify-center tw-items-center tw-text-md tw-text-white tw-gap-1 tw-rounded-lg   tw-cursor-pointer tw-bg-darkblue ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="tw-w-4 tw-h-4 ">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                />
              </svg>
              <div className=""></div>
              <input type="file" className="tw-hidden" onChange={uploadImages} />
            </label>
            <label
              className="tw-bg-darkblue tw-mt-3 tw-text-white tw-px-5 tw-py-1 lg:tw-mr-44 tw-cursor-pointer tw-rounded-lg "
              onClick={(ev) => handleSubmit(ev)}>
              Post
            </label>
          </div>

          {posts.length > 0 && posts.map((post) => <PostBox post={post} key={post._id} />)}
        </div>
      </div>
    </div>
  );
};

export default ProfileComp;
