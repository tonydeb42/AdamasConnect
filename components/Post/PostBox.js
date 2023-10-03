import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "../../assets/connect_logo.png";

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
      className="tw-flex  tw-flex-col  tw-px-10 tw-py-5  lg:tw-mx-20 tw-mt-5 tw-text-white border-bottom tw-rounded-xl tw-no-underline "
      href={`/status/${post?.author._id}/${post?._id}`}>
      <div className="tw-flex tw-gap-6">
        <div className="tw-rounded-full border tw-w-12 tw-h-12 tw-overflow-hidden">
          <Image src={logo} alt="adamas_connect_logo" style={{ height: "50px", width: "45px" }} />
        </div>
        <div className="tw-flex tw-flex-col">
          <Link
            href={`/user/${post?.author?._id}`}
            className="tw-text-white tw-font-bold  tw-no-underline hover:tw-underline">
            <span>{post?.author?.name}</span>
          </Link>
          <div className="tw-flex tw-my-3 tw-gap-3">
            {post?.images?.length > 0 &&
              post?.images.map((img) => (
                <div className="" key={img}>
                  <img src={img} alt="" className="tw-h-60" />
                </div>
              ))}
          </div>
          <div>{post?.postdata}</div>
        </div>
      </div>
      <div className="tw-flex tw-items-center ">
        <Link href={"/home"} className="tw-no-underline">
          <div className="tw-flex hover:tw-text-red-400 hover:tw-scale-105 tw-text-red-200  tw-ml-14 tw-mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="tw-w-5 tw-h-5 tw-mr-1 tw-fill-inherit ">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <span>0</span>
          </div>
        </Link>

        <Link href={`/home`} className="tw-no-underline">
          <div className="tw-flex hover:tw-text-blue-400 hover:tw-scale-105 tw-ml-14 tw-mt-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="tw-w-5 tw-h-5 tw-mr-1 ">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
            <span>0</span>
          </div>
        </Link>
      </div>
    </Link>
  );
}
