import { deleteCookie } from "cookies-next";
import "font-awesome/css/font-awesome.min.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import logo from "../../assets/connect_logo.png";
import NavbarContext from "../../context/NavbarContext";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { activePage, setActivePage } = useContext(NavbarContext);

  const active = {
    backgroundColor: "#0E21A0",
  };
  const router = useRouter();
  const logout = () => {
    deleteCookie("token");
    router.push("/verify");
  };
  return (
    <div
      className={`d-flex flex-column justify-content-between col-auto min-vh-100`}
      style={{ backgroundColor: "black" }}>
      <div className="mt-4">
        <Link
          className="text-white d-none d-sm-inline text-decoration-none d-flex align-items-center ms-4"
          role="button"
          href="/home">
          <center>
            <Image src={logo} style={{ height: "120px", width: "120px" }}></Image>
          </center>
        </Link>
        <hr className="text-white d-none d-sm-block" />
        <ul className="nav nav-pills flex-column mt-2 mt-sm-0" id="menu">
          <li className="nav-item">
            <Link
              href="/home"
              className="nav-link text-white text-center text-sm-start"
              style={activePage === "profile" ? active : null}
              onClick={() => {
                setActivePage("profile");
              }}>
              <i className={`fa fa-home ${styles.icon}`}></i>
              <span className="ms-2 d-none d-sm-inline fw-bold">Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/messages"
              className="nav-link text-white text-center text-sm-start mt-3"
              style={activePage === "messages" ? active : null}
              onClick={() => {
                setActivePage("messages");
              }}>
              <i className={`fa fa-inbox ${styles.icon}`}></i>
              <span className="ms-2 d-none d-sm-inline fw-bold">Messages</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/assignments"
              className="nav-link text-white text-center text-sm-start mt-3"
              style={activePage === "assignments" ? active : null}
              onClick={() => {
                setActivePage("assignments");
              }}>
              <i className={`fa fa-sticky-note ${styles.icon}`}></i>
              <span className="ms-2 d-none d-sm-inline fw-bold">Assignments</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/bot"
              className="nav-link text-white text-center text-sm-start mt-3"
              style={activePage === "bot" ? active : null}
              onClick={() => {
                setActivePage("bot");
              }}>
              <i className={`fa fa-android ${styles.icon}`}></i>
              <span className="ms-2 d-none d-sm-inline fw-bold">CodeSage</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/report"
              className="nav-link text-white text-center text-sm-start mt-3"
              style={activePage === "report" ? active : null}
              onClick={() => {
                setActivePage("report");
              }}>
              <i className={`fa fa-solid fa-exclamation-circle ${styles.icon}`}></i>
              <span className="ms-2 d-none d-sm-inline fw-bold">Report</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/feedback"
              className="nav-link text-white text-center text-sm-start mt-3"
              style={activePage === "feedback" ? active : null}
              onClick={() => {
                setActivePage("feedback");
              }}>
              <i className={`fa fa-solid fa-comment ${styles.icon}`}></i>
              <span className="ms-2 d-none d-sm-inline fw-bold">Feedback</span>
            </Link>
          </li>
          <li className="nav-item">
            <button
              className="nav-link text-white text-center text-sm-start mt-3"
              style={activePage === "feedback" ? active : null}
              onClick={() => {
                logout();
              }}>
              <i className={`fa fa-solid fa-sign-out ${styles.icon}`}></i>
              <span className="ms-2 d-none d-sm-inline fw-bold">Log out</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
