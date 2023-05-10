import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import choosefile from "../assets/images/svg/choosefile.svg";
import downarrow from "../assets/images/svg/dropdownarriw.svg";
import smallpersonimg from "../assets/images/svg/smallperosnimg.svg";
import sectionupper from "../assets/images/svg/sectionupper.svg";
import sectionbtm from "../assets/images/svg/sectionbottom.svg";
import input_upper from "../assets/images/svg/uppercurve.svg";
import input_btm from "../assets/images/svg/bottomcruve.svg";
import leftupperdots from "../assets/images/img/upperleftdots.png";
import centerrightdots from "../assets/images/img/rightcenterdots.png";
import leftbtmdots from "../assets/images/img/leftbtmdots.png";
import rghtbtmdots from "../assets/images/img/rightbtmdots.png";
const ReviewSec = () => {
  return (
    <>
      <div className="section _upper bg_darkgre en">
        <img
          src={sectionupper}
          alt="sectionupper"
          className="w-100 mb_minus_4 "
        />
      </div>
      <section className="sec2_bg_linear position-relative py-lg-5">
        <img
          src={leftupperdots}
          alt="leftupperdots"
          className="start-0 position-absolute leftupperdots d-none d-xxl-block"
        />
        <img
          src={centerrightdots}
          alt="centerrightdots"
          className=" position-absolute centerrightdots d-none d-xxl-block"
        />
        <img
          src={leftbtmdots}
          alt="leftbtmdots"
          className=" position-absolute leftbtmdots d-none d-xxl-block"
        />
        <img
          src={rghtbtmdots}
          alt="rghtbtmdots"
          className=" position-absolute rghtbtmdots d-none d-xxl-block"
        />
        <Container className="py-5">
          <Row className="">
            <Col lg={4} className="d-none d-lg-block"></Col>
            {/* blur div  -------------------------------------------- */}
            <Col lg={4} className="position_absolute start-0">
              <div className="bg_sec2blur_div_rating pt-3 pb-3">
                <div className="max_w_330 me-lg-5 px-5 px-lg-0">
                  <p className=" ff_comic fs_lg text-center text-lg-start text-white ">
                    Ratings Summary
                  </p>
                  <div>
                    <div className="d-flex align-items-center  justify-content-between pt-3 ">
                      <p className=" ff_callibary fw-normal fs_sm text-white mb-0 ">
                        Overall Rating
                      </p>
                      <span class="rate ms-5">
                        <i>★</i>
                        <i>★</i>
                        <i>★</i>
                        <i>★</i>
                        <i>★</i>
                      </span>
                    </div>
                    <div className="d-flex align-items-center  justify-content-between pt-3 ">
                      <p className=" ff_callibary fw-normal fs_sm text-white mb-0 ">
                        Access
                      </p>
                      <span class="rate ms-5">
                        <i>★</i>
                        <i>★</i>
                        <i>★</i>
                        <i>★</i>
                        <i>★</i>
                      </span>
                    </div>
                    <div className="d-flex align-items-center  justify-content-between pt-3 ">
                      <p className=" ff_callibary fw-normal fs_sm text-white mb-0 ">
                        Location
                      </p>
                      <span class="rate ms-5">
                        <i>★</i>
                        <i>★</i>
                        <i>★</i>
                        <i>★</i>
                        <i>★</i>
                      </span>
                    </div>
                    <div className="d-flex align-items-center  justify-content-between pt-3 ">
                      <p className=" ff_callibary fw-normal fs_sm text-white mb-0 ">
                        Cleanlines
                      </p>
                      <span class="rate ms-5">
                        <i>★</i>
                        <i>★</i>
                        <i>★</i>
                        <i>★</i>
                        <i>★</i>
                      </span>
                    </div>
                    <div className="d-flex align-items-center  justify-content-between pt-3 ">
                      <p className=" ff_callibary fw-normal fs_sm text-white mb-0 ">
                        Site Quality
                      </p>
                      <span class="rate ms-5">
                        <i>★</i>
                        <i>★</i>
                        <i>★</i>
                        <i>★</i>
                        <i>★</i>
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between pt-3 ">
                      <p className=" ff_callibary fw-normal fs_sm text-white mb-0 ">
                        Noise
                      </p>
                      <span class="rate ms-5">
                        <i>★</i>
                        <i>★</i>
                        <i>★</i>
                        <i>★</i>
                        <i>★</i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <div className="pt-xxl-2">
                <Row className="pt-xxl-4 ">
                  {/* select option div -------------------------------------- */}
                  <Col lg={7}>
                    <div>
                      <p className=" ff_callibary fw-normal fs_sm text-white">
                        Filter By
                      </p>
                      <div className="d-flex flex_column_maxw justify-content-between justify-content-lg-start">
                        <div className="bg_select_option pe_25px cur_poi">
                          <select
                            name=""
                            className=" bg-transparent py_19 arrow styled-select w100_max cur_poi"
                            id=""
                          >
                            <option
                              value=""
                              className="bg-transparent border-0"
                            >
                              Traveler Type
                            </option>
                            <img src={downarrow} alt="downarrow" />
                          </select>
                        </div>
                        <div className="bg_select_option ms_max_0 cur_poi  pe_25px mt_5">
                          <select
                            name=""
                            className=" bg-transparent py_19 arrow styled-select w100_max cur_poi"
                            id=""
                          >
                            <option
                              value=""
                              className="bg-transparent border-0"
                            >
                              Traveler Frequency
                            </option>
                            <img src={downarrow} alt="downarrow" />
                          </select>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={5} xxl={4} className="mt-4 mt-lg-0">
                    <div className="ps-xxl-5">
                      <p className=" ff_callibary fw-normal fs_sm text-white">
                        Sort By
                      </p>
                      <div className="bg_select_option cur_poi pe_25px">
                        <select
                          name=""
                          className="w_88 bg-transparent py_19 arrow styled-select w100_max pe-2 cur_poi"
                          id=""
                        >
                          <option value="" className="bg-transparent border-0">
                            Newest - default
                          </option>
                          <img src={downarrow} alt="downarrow" />
                        </select>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <Row className="pt-4 pt-xxl-5 justify-content-between justify-content-xxl-start">
                <Col lg={2} className="text-center">
                  <div className="small_img_blur_div p-1 max_w_233_mx_auto">
                    <img src={smallpersonimg} alt="" className="w-100" />
                  </div>
                  <p className="  ff_callibary  fw_700 fs_sm text-white mb-0">
                    Snoopinaround
                  </p>
                  <p className="  ff_callibary   fw-normal fs_sm clr_fff_opac mb-1">
                    Geneseo,IL
                  </p>
                  <p className="  ff_callibary   fw-normal fs_sm clr_fff_opac mb-1">
                    Ram 2500
                  </p>
                  <p className="  ff_callibary   fw-normal fs_sm clr_fff_opac">
                    21 reviews
                  </p>
                </Col>
                <Col lg={9}>
                  <div className="pt-3">
                    <p className="  ff_callibary  fw_700 fs_sm text-white mb-0">
                      Outstanding Campground
                    </p>
                    <p className="  ff_callibary   fw-normal fs_sm clr_fff_opac mb-1">
                      Reviewed 10/24/2021
                    </p>
                    <div className="d-flex align-items-center mt-2">
                      <p className=" ff_callibary fw-normal fs_sm text-white mb-0 ">
                        Overall Rating
                      </p>
                      <span class="rate ms-3">
                        <i>★</i>
                        <i>★</i>
                        <i>★</i>
                        <i>★</i>
                        <i>★</i>
                      </span>
                    </div>
                    <p className="  ff_callibary mt-3 mb-0 pt-1  fw-normal fs_sm clr_fff_opac pe-xxl-5">
                      The government campgrounds are the best and this one is no
                      exception. We stayed in loop #1 with electricity. Spacious
                      and private sites with fire rings and picnic tables. The
                      only noise was from acorns falling on rv’s. There is a
                      walking trail (Dog friendly but no bikes) to the beach
                      from the campground. Bicyclists can take a short
                    </p>
                  </div>
                </Col>
                <div className="mt-4  btns mb-0 ps-0  d-flex">
                  <button className="hover_bg_btn_green transition  ff_comic fs_sm text-white  bg_btn_green br_30 p_10_28 border_2px_green ">
                    MEMBER
                  </button>
                  <div className="ms-2">
                    <button className="hover_bg_btn_green transition ff_comic fs_sm text-white ms-4 bg-transparent br_30 p_10_28 border_2px_green">
                      HELPFUL
                    </button>
                  </div>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
        <div className="pb-xl-5"></div>
        <div className="pb-xl-5"></div>
        <div className="pb-xl-5"></div>

        <Container>
          <div className="bg_upper_cu rve">
            {" "}
            <img
              src={input_upper}
              alt="input_upper"
              className="w-100 mb_minus_4 "
            />
          </div>

          <div className="bg_darkgreen pb-5">
            <p className=" text-white text-uppercase  ff_comic fs_md text-center">
              Your comment/rating/review;
            </p>
            <div className="max_w_908 mx-auto blur_div_second mt-5">
              <div className="max_w_639 mx-auto px-2">
                <p className=" ff_callibary fw_700 pt-4 text-center text-white fs_lg">
                  Your Rating
                </p>
                <div className="text-center">
                  <span class="rate ">
                    <i>★</i>
                    <i>★</i>
                    <i>★</i>
                    <i>★</i>
                    <i>★</i>
                  </span>
                </div>
                <div className="py-5">
                  <input
                    type="text"
                    placeholder="Name"
                    className=" ff_callibary fw-normal fs_xl clr_fff_opac blurdiv w-100 py-3 px_40"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="mt-3  ff_callibary fw-normal fs_xl clr_fff_opac blurdiv w-100 py-3 px_40"
                  />
                  <textarea
                    placeholder="Review"
                    className="w-100 mt-3  ff_callibary fw-normal fs_xl clr_fff_opac blurdiv w-100 py-3 px_40"
                    rows={5}
                  ></textarea>
                  <p className=" ff_callibary fw-normal fs_sm clr_fff_opac mt-3 pt-1">
                    Your email address will not be published. Required fields
                    marked
                  </p>
                  <ul className="d-flex btns mb-0 ps-0">
                    <button className="hover_bg_btn_green transition  ff_comic fs_sm text-white  bg_btn_green br_30 p_10_28 border_2px_green ">
                      Post Review
                    </button>
                    <form>
                      <label>
                        <input
                          type="file"
                          id="file"
                          name="file"
                          className="d-none"
                        />
                        <button className="hover_bg_btn_green transition ff_comic ms-4 fs_sm text-white bg-transparent br_30 p_10_28 border_2px_green">
                          <img
                            src={choosefile}
                            alt="choosefile"
                            className="me-2"
                          />
                          Choose file
                        </button>
                      </label>
                    </form>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bg_bottom_c urve">
            {" "}
            <img
              src={input_btm}
              alt="input_btm"
              className="w-100 mt_minus_4 "
            />{" "}
          </div>
          <div className="pb-xl-5"></div>
          <div className="pb-xl-5"></div>
          <div className="pb-xl-5"></div>
        </Container>
      </section>
      <div className="section_ bottom">
        {" "}
        <img src={sectionbtm} alt="sectionbtm" className="w-100 mt_minus_4 " />
      </div>
    </>
  );
};

export default ReviewSec;
