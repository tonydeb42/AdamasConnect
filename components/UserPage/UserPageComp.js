import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../assets/connect_logo.png";

const UserPageComp = ({ id }) => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    if (!id) return;
    fetchUser();
  }, []);

  async function fetchUser() {
    axios.get("/api/user/?id=" + id).then((response) => {
      setUserInfo(response.data.user);
    });
  }
  console.log(userInfo);
  return (
    <div
      className="container-fluid tw-text-lg"
      style={{ height: "100%", width: "100%", backgroundColor: "black" }}>
      <div className=" position-relative" style={{ top: "35px", color: "white" }}>
        <br />

        <div className="tw-flex  tw-flex-col  tw-px-10 tw-py-5  lg:tw-mx-20 tw-mt-5 tw-text-white border ">
          <div className="tw-flex tw-gap-3">
            <div className="tw-rounded-full border tw-w-12 tw-h-12 tw-overflow-hidden">
              <Image
                src={logo}
                alt="adamas_connect_logo"
                style={{ height: "50px", width: "45px" }}
              />
            </div>
            <div className="tw-flex tw-flex-col">
              <div className="tw-text-white ">
                <span>{userInfo?.name}</span>
              </div>

              {userInfo?.email}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPageComp;
