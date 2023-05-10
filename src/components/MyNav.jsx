import React, { useState } from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/images/svg/logo.svg";
import close from "../assets/images/svg/close.svg";
const MyNav = () => {
  const [first, setfirst] = useState(false);
  const [second, setsecond] = useState(0);
  return (
    <nav className="bg_green">
      <div className="my_container">
        <div className="d-flex justify-content-between align-items-center ">
          <a href="#" className="me-lg-5 pe-lg-5">
            <img src={logo} alt="logo" />
          </a>
          <ul
            className={
              first
                ? "z_index_500 d-flex mb-0 ps-0 ms-lg-5 ps-lg-5 flex-column flex-lg-row justify-content-center align-items-center mobileiew left_0"
                : "z_index_500 d-flex mb-0 ps-0 ms-lg-5 ps-lg-5 flex-column flex-lg-row justify-content-center align-items-center mobileiew left_100 "
            }
          >
            <li className=" mt-4 mt-lg-0  white_before ms-lg-5">
              <a
                href="#"
                className=" pt-lg-5 hover_underline ff_comic fs_sm text-white"
              >
                HOME
              </a>
            </li>
            <li className=" mt-4 mt-lg-0 ms-lg-3 ps-lg-1 white_before2">
              <a
                href="#"
                className=" pt-lg-5 hover_underline2 ff_comic fs_sm text-white text-uppercase"
              >
                Campgrounds
              </a>
            </li>
            <li className=" mt-4 mt-lg-0 ms-lg-3 ps-lg-1 white_before3">
              <a
                href="#"
                className=" pt-lg-5 hover_underline3 ff_comic fs_sm text-white"
              >
                About us
              </a>
            </li>
            <li className=" mt-4 mt-lg-0 ms-lg-3 ps-lg-1 white_before4">
              <a
                href="#"
                className=" pt-lg-5 hover_underline4 ff_comic fs_sm text-white"
              >
                Contact
              </a>
            </li>{" "}
            <button className=" mt-4 mt-lg-0 d-lg-none ff_comic fs_sm text-white bg-transparent br_30 p_10_28 border_2px_green">
              Sign Up
            </button>
            <button className=" mt-4 mt-lg-0 d-lg-none ff_comic fs_sm text-white ms-lg-4 bg_btn_green br_30 p_10_28 border_2px_green ">
              Log in
            </button>
            <img
              src={close}
              alt="close"
              className="max_32 d-lg-none position-absolute close_img_pos"
              onClick={() => {
                setfirst(false);
              }}
            />
          </ul>
          <ul className="d-flex btns mb-0 ps-0 d-none d-lg-flex">
            <button className="hover_bg_btn_green transition ff_comic fs_sm text-white bg-transparent br_30 p_10_28 border_2px_green">
              Sign Up
            </button>
            <button className="hover_bg_btn_green transition  ff_comic fs_sm text-white ms-4 bg_btn_green br_30 p_10_28 border_2px_green ">
              Log in
            </button>
          </ul>
          <a
            href="#"
            className="nav_container d-lg-none"
            onClick={() => {
              setfirst(true);
            }}
          >
            <span className="navicon"></span>
            <span className="navicon mt-2"></span>
            <span className="navicon mt-2"></span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default MyNav;
