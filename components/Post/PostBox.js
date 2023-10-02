import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "../../assets/connect_logo.png";
import Image from "next/image";

export default function PostBox({ post }) {
  //to fix the hydration error
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  //to fix hydration error

  return (
    <Link
      className="tw-flex  tw-flex-col  tw-px-10 tw-py-5  lg:tw-mx-20 tw-mt-5 tw-text-white border tw-no-underline "
      href={`/status/${post?.author._id}/${post?._id}`}>
      <div className="tw-flex tw-gap-3">
        <div className="tw-rounded-full border tw-w-12 tw-h-12 tw-overflow-hidden">
          <Image src={logo} alt="adamas_connect_logo" style={{ height: "50px", width: "45px" }} />
        </div>
        <div className="tw-flex tw-flex-col">
          <Link
            href={`/user/${post?.author?._id}`}
            className="tw-text-white tw-font-bold tw-no-underline hover:tw-underline">
            <span>{post?.author?.name}</span>
          </Link>

          <div>{post?.postdata}</div>
        </div>
      </div>
    </Link>
  );
}
