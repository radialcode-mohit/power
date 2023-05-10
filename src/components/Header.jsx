import React from "react";
import MyNav from "./MyNav";
import yellowstar from "../assets/images/svg/yellowstar.svg";
import whitestar from "../assets/images/svg/whitestar.svg";
import dogimg from "../assets/images/svg/dog.svg";
import showerimg from "../assets/images/svg/shower.svg";
import crosss from "../assets/images/svg/crosss.svg";
import topdots from "../assets/images/img/rightdots.png";
import bottomdots from "../assets/images/img/leftdot.png";
import { Col, Row } from "react-bootstrap";
const Header = () => {
  return (
    <section className="bg_header ">
      <MyNav />
      <div className="my_container mt-4 mt-lg-5  min_vh_">
        <div className="green_div mx-auto position-relative">
          <img
            src={topdots}
            alt=""
            className=" position-absolute topdots_pos d-none d-lg-block"
          />
          <img
            src={bottomdots}
            alt=""
            className=" position-absolute botom_dots d-none d-lg-block"
          />
          <div className="blurdiv pt-5 pb-4">
            <div className="text-center">
              <h1 className="text-uppercase ff_comic fs_md text-white">
                Platte River Campground
              </h1>
              <p className="mb-0 ff_callibary fw-normal fs_sm clr_fff_opac mt-3 pt-1">
                Among Top 50 campgrounds in California
              </p>
              <div className="d-flex justify-content-center pt-1">
                {/* <img src={yellowstar} alt="yellowstar" />
                <img src={yellowstar} alt="yellowstar" />
                <img src={yellowstar} alt="yellowstar" />
                <img src={yellowstar} alt="yellowstar" />
                <img src={whitestar} alt="whitestar" /> */}
                <span class="rate">
                  <i>★</i>
                  <i>★</i>
                  <i>★</i>
                  <i>★</i>
                  <i>★</i>
                </span>
              </div>
              <p className="mb-0 ff_callibary fw-normal fs_sm clr_fff_opac pt-3">
                5685 Lake Michigan Rd, Honor, MI 49640, United States <br />{" "}
                Contact: +1 231 326 5134 <br /> www.example.com
              </p>
            </div>
            <div className="max_w_300px mx-auto">
              {" "}
              <Row className=" justify-content-center pt-4">
                <Col xs={6} md={4} className=" mt-4 mt-sm-0">
                  <div className="px-2 me-md-4 ms-md-2">
                    {" "}
                    <div className=" crlces mx-auto  d-flex flex-column justify-content-center align-items-center">
                      <p className=" ff_callibary fw_700 fs_sm text-white mb-0">
                        All year
                      </p>
                      <p className=" ff_callibary fw_400 fs_sm clr_fff_opac8 mb-0">
                        Season
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs={6} md={4} className=" mt-4 mt-sm-0">
                  <div className="px-2 me-md-4 ms-md-2">
                    {" "}
                    <div className=" crlces mx-auto  d-flex flex-column justify-content-center align-items-center">
                      <p className=" ff_callibary fw_700 fs_sm text-white mb-0">
                        174
                      </p>
                      <p className=" ff_callibary fw_400 fs_sm clr_fff_opac8 mb-0">
                        Total Sites
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs={6} md={4} className=" mt-4 mt-md-0">
                  <div className="px-2 me-md-4 ms-md-2">
                    {" "}
                    <div className=" crlces mx-auto  d-flex flex-column justify-content-center align-items-center">
                      <p className=" ff_callibary fw_700 fs_sm text-white mb-0">
                        45
                      </p>
                      <p className=" ff_callibary fw_400 fs_sm clr_fff_opac8 mb-0">
                        Nightly cost
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs={6} md={4} className=" mt-4">
                  <div className="px-2 me-md-4 ms-md-2">
                    {" "}
                    <div className=" crlces mx-auto  d-flex flex-column justify-content-center align-items-center">
                      <div className=" position-relative">
                        <img src={dogimg} alt="dog" />
                        <img
                          src={crosss}
                          alt=""
                          className="cross_pos position-absolute"
                        />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={6} md={4} className=" mt-4">
                  <div className="px-2 me-md-4 ms-md-2">
                    {" "}
                    <div className=" crlces mx-auto  d-flex flex-column justify-content-center align-items-center">
                      <div className=" position-relative">
                        <img src={showerimg} alt="showerimg" />{" "}
                        <img
                          src={crosss}
                          alt=""
                          className="cross_pos position-absolute"
                        />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={6} md={4} className=" mt-4">
                  <div className="px-2  me-md-4 ms-md-2">
                    {" "}
                    <div className="py-4 crlces mx-auto  d-flex flex-column justify-content-center align-items-center">
                      <p className=" ff_callibary fw_700 fs_sm text-white mb-0">
                        RV/Trailers
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-5 d-xl-none"></div>
      <div className="pb-5 d-xl-none"></div>
      {/* <div className="pb-5"></div> */}
    </section>
  );
};

export default Header;
