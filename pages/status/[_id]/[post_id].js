import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import SinglePostComp from "../../../components/SinglePost/SinglePostComp";

const SinglePost = () => {
  const router = useRouter();
  const { post_id } = router.query;
  const [post, setPost] = useState();
  useEffect(() => {
    if (!post_id) {
      return;
    }
    axios.get("/api/post/?id=" + post_id).then((response) => {
      setPost(response.data.post);
    });
  }, [post_id]);
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-auto"
          style={{ backgroundColor: "black", borderRight: "2px silver solid" }}>
          <Navbar />
        </div>
        <div className="col" style={{ padding: "0" }}>
          <SinglePostComp post={post} />
        </div>
      </div>
    </div>
  );
};

export default SinglePost;

export async function getServerSideProps(context) {
  const { req, res } = context;
  if (!req.cookies.token) {
    res.setHeader("location", "/verify");
    res.statusCode = 302;
  }
  return {
    props: {},
  };
}
