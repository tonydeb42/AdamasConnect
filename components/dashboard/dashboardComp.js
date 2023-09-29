import React from "react";

const ProfileComp = () => {
  return (
    <div
      className="container-fluid  "
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "black",
        borderRight: "2px silver solid",
      }}>
      <h1 className="text-center  text-white tw-mt-5">Dashboard</h1>
      <div>
        <div className="tw-flex  tw-flex-col tw-items-end">
          <textarea
            className="tw-w-full tw-p-1 lg:tw-w-2/3 lg:tw-mx-auto  tw-bg-transparent focus:tw-outline-none  tw-resize-none tw-text-white"
            placeholder="What's Happening"
          />
          <div className="">
            <button className="tw-bg-twitterBlue tw-text-white tw-px-5 tw-py-1 lg:tw-mr-44 tw-rounded-full ">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComp;
