import React from "react";

export default function PostBox({ post }) {
  return (
    <div className="tw-flex  tw-flex-col  tw-px-10  lg:tw-mx-20 tw-mt-5 tw-text-white border">
      <div>{post.author.name}</div>
      <div>{post.postdata}</div>
    </div>
  );
}
