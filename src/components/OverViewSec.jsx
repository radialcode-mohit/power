import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import downarrow from "../assets/images/svg/dropdownarriw.svg";
import bigimg from "../assets/images/img/lake.png";
import nature2 from "../assets/images/img/nature2.jpg";
import nature3 from "../assets/images/img/nature3.jpg";
import small1 from "../assets//images/img/small1.png";
import small2 from "../assets//images/img/small2.png";
import small3 from "../assets//images/img/small3.png";
import rightdots from "../assets/images/img/sec3rightdots.png";
import leftdots from "../assets/images/img/sec3leftdots.png";
const OverViewSec = () => {
  const [first, setfirst] = useState(0);
  return (
    <section className="py-xxl-5 position-relative overflow_x_hiden">
      <img
        src={rightdots}
        alt="rightdots"
        className=" position-absolute sec3r_right_dots d-none d-xxl-block"
      />
      <img
        src={leftdots}
        alt="leftdots"
        className=" position-absolute sec3r_left_dots d-none d-xxl-block"
      />
      <Container className="py-xl-5">
        <Row className="py-5">
          <Col lg={6}>
            <div>
              <span className=" ff_comic fs_md">OVERVIEW</span>
              <ul className="ps-4 pe-4">
                <li className="dots_li ff_callibary fw-normal fs_sm opac_7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li className="dots_li ff_callibary fw-normal fs_sm opac_7">
                  Commodo venenatis nec enim nisi id. Vestibulum interdum
                  dictumst rhoncus ultrices amet amet.
                </li>
                <li className="dots_li ff_callibary fw-normal fs_sm opac_7">
                  Tellus adipiscing augue curabitur leo, pretium habitant turpis
                  quis.
                </li>
                <li className="dots_li ff_callibary fw-normal fs_sm opac_7">
                  Quam mattis senectus odio mattis gravida gravida sollicitudin
                  commodo. Cursus faucibus ut egestas in metus.
                </li>
                <li className="dots_li ff_callibary fw-normal fs_sm opac_7">
                  Consequat, suspendisse duis eget purus ornare.
                </li>
              </ul>
              <div className="max_w_445 mt-xl-5 pt-1 mx_auto_max_lg">
                <div>
                  <img
                    src={bigimg}
                    alt="bigimg"
                    className={first === 0 ? "d-block  w-100" : "d-none w-100"}
                  />
                  <img
                    src={nature2}
                    alt="bigimg"
                    className={
                      first === 1
                        ? "d-block max_h_315 rounded-3 w-100"
                        : "d-none w-100"
                    }
                  />
                  <img
                    src={nature3}
                    alt="bigimg"
                    className={
                      first === 2
                        ? "min-h_315  d-block rounded-3 w-100"
                        : "min-h_315  d-none w-100"
                    }
                  />
                </div>
                <div className="text-center mt-md-4 pt-3">
                  <div className="small_imgs_linear_bg d-inline-block p_15_37">
                    <img
                      src={small1}
                      onClick={() => {
                        setfirst(2);
                      }}
                      alt="small1"
                      className={
                        first === 2
                          ? "trans_scale transition cur_poi"
                          : " cur_poi"
                      }
                    />
                    <img
                      src={small2}
                      onClick={() => {
                        setfirst(1);
                      }}
                      alt="small2"
                      className={
                        first === 1
                          ? "trans_scale transition mx-3 cur_poi"
                          : "mx-3 cur_poi"
                      }
                    />
                    <img
                      src={small3}
                      onClick={() => {
                        setfirst(0);
                      }}
                      alt="small3"
                      className={
                        first === 0
                          ? "max_w_51 trans_scale transition cur_poi"
                          : "max_w_51  cur_poi"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} className="pt-3 pt-md-5 pt-lg-0 ">
            <div className="sec3_linear_green p-4">
              <p className=" ff_comic fs_md text-white mb-3 mb-md-5 text-center text-lg-start">
                Platte River Sold Out? <br /> We can get you a reservation!
              </p>
              <div className="sec3_blur_div pt-4 ">
                <p className=" ff_comic fs_lg text-white text-center text-lg-end pe-lg-5 pt-2">
                  GET STARTED HERE
                </p>
                <div className="max_w_80 ms-lg-4 mx_12">
                  {/* ca  */}
                  <Row className=" align-items-center pt-4">
                    <Col lg={3} className="pe_12px  pe-xxl-3">
                      <div className="bg_select_option pe-2 pe-xl-4 cur_poi">
                        <select
                          name=""
                          className=" bg-transparent p_ca_select arrow styled-select w100_max cur_poi"
                          id=""
                        >
                          <option value="" className="bg-transparent border-0">
                            CA
                          </option>
                          <img src={downarrow} alt="downarrow" />
                        </select>
                      </div>
                    </Col>
                    <Col lg={9} className="mt-3 mt-lg-0">
                      <div className="bg_select_option pe-2 pe-xl-4 cur_poi">
                        <select
                          name=""
                          className=" bg-transparent p_ca_select arrow styled-select w100_max cur_poi"
                          id=""
                        >
                          <option value="" className="bg-transparent border-0">
                            Doheny State Beach
                          </option>
                          <img src={downarrow} alt="downarrow" />
                        </select>
                      </div>
                    </Col>
                  </Row>
                  {/* site type  */}
                  <Row className=" align-items-center pt-4">
                    <Col lg={3}>
                      <p className="mb-0 ff_callibary fw_700 fs_sm text-white">
                        Site Type:
                      </p>
                    </Col>
                    <Col lg={9}>
                      <Row>
                        <Col lg={7} className="mt-3 mt-lg-0">
                          <div className="bg_select_option pe-2 pe-xl-4 cur_poi">
                            <select
                              name=""
                              className=" bg-transparent p_ca_select arrow styled-select w100_max cur_poi"
                              id=""
                            >
                              <option
                                value=""
                                className="bg-transparent border-0"
                              >
                                RV
                              </option>
                              <img src={downarrow} alt="downarrow" />
                            </select>
                          </div>
                        </Col>
                        <Col lg={5} className="ps-lg-2 mt-3 mt-lg-0">
                          <div className="bg_select_option pe-2 pe-xl-4 cur_poi">
                            <select
                              name=""
                              className=" bg-transparent p_ca_select arrow styled-select w100_max cur_poi"
                              id=""
                            >
                              <option
                                value=""
                                className="bg-transparent border-0"
                              >
                                10 ft.
                              </option>
                              <img src={downarrow} alt="downarrow" />
                            </select>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  {/* Number in your party: */}
                  <Row className=" align-items-center pt-4">
                    <Col lg={5}>
                      <p className="mb-0 ff_callibary fw_700 fs_sm text-white">
                        Number in your party:
                      </p>
                    </Col>
                    <Col lg={7} className="mt-3 mt-lg-0">
                      <Row className=" justify-content-end">
                        <Col lg={6} className="ps-lg-0">
                          <div className="bg_select_option pe-2 pe-xl-4 cur_poi">
                            <select
                              name=""
                              className=" bg-transparent p_ca_select arrow styled-select w100_max cur_poi"
                              id=""
                            >
                              <option
                                value=""
                                className="bg-transparent border-0"
                              >
                                01
                              </option>
                              <img src={downarrow} alt="downarrow" />
                            </select>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  {/* Check in Date: */}
                  <Row className=" align-items-center pt-4">
                    <Col lg={4}>
                      <p className="mb-0 ff_callibary fw_700 fs_sm text-white">
                        Check in Date:
                      </p>
                    </Col>
                    <Col lg={8} className="mt-3 mt-lg-0">
                      <Row className=" justify-content-end">
                        <Col lg={12} className="">
                          <div className="bg_select_option pe-2 pe-xl-4 cur_poi">
                            <select
                              name=""
                              className=" bg-transparent p_ca_select arrow styled-select w100_max cur_poi"
                              id=""
                            >
                              <option
                                value=""
                                className="bg-transparent border-0"
                              >
                                Friday,May 13/2022
                              </option>
                              <img src={downarrow} alt="downarrow" />
                            </select>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  {/* Check Out Date:*/}
                  <Row className=" align-items-center pt-4">
                    <Col lg={4}>
                      <p className="mb-0 ff_callibary fw_700 fs_sm text-white">
                        Check Out Date:
                      </p>
                    </Col>
                    <Col lg={8} className="mt-3 mt-lg-0">
                      <Row className=" justify-content-end">
                        <Col lg={12} className="">
                          <div className="bg_select_option pe-2 pe-xl-4 cur_poi">
                            <select
                              name=""
                              className=" bg-transparent p_ca_select arrow styled-select w100_max cur_poi"
                              id=""
                            >
                              <option
                                value=""
                                className="bg-transparent border-0"
                              >
                                Sunday,May 15/2022
                              </option>
                              <img src={downarrow} alt="downarrow" />
                            </select>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <div className="text-center pt-5 pb-4">
                    <button className="bg_btn_green transition ff_comic fs_sm text-white bg_transparent_hover br_30 p_10_28 border_2px_green">
                      Continue to Step 2
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OverViewSec;
