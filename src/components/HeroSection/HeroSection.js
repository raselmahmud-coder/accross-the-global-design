import { Nav } from "react-bootstrap";
import arrow from "../../assets/arrow-bottom.png";
import group from "../../assets/group.png";
import location from "../../assets/location-icon.png";
import pen from "../../assets/pen-icon.png";
import cross from "../../assets/cross.png";
import profile4 from "../../assets/profile4.png";
import profile3 from "../../assets/profile3.png";
import profile2 from "../../assets/profile2.png";
import profile1 from "../../assets/profile1.png";
import cover1 from "../../assets/post-img1.png";
import cover2 from "../../assets/post-img2.png";
import cover3 from "../../assets/post-image3.png";
import bag from "../../assets/bag.png";
import arrowRight from "../../assets/arrow-right.png";
import calenderIcon from "../../assets/calender-icon.png";
import article from "../../assets/article.png";
import education from "../../assets/education-icon.png";
import meetup from "../../assets/meetup.png";
import job from "../../assets/job-icon.png";
import arrowLeft from "../../assets/arrow_back.png";
import androidPostIcon from "../../assets/androidPen.png";
import alertIcon from "../../assets/alert-icon.png";
import mobileCover from "../../assets/mobile-cover-min.png";
import ArticlePosts from "../Posts/ArticlePosts";
import JobPosts from "../Posts/JobPosts";
import { useState } from "react";
import RecommendedGroup from "../RecommendedGroup/RecommendedGroup";
import customSpace from "./hero.module.css";
const HeroSection = () => {
  const [userLogIn, setUserLogIn] = useState(true);
  const customStyles = {
    fontDesign: {
      fontSize: "15px",
      fontWeight: "500",
      lineHeight: "20px",
    },
    customPadding: {
      padding: "0px 64px",
    },
    customBtn: {
      color: "#6A6A6B",
    },
  };

  return (
    <>
      <section
        className="img-fluid text-white"
        style={{
          height: "340px",
        }}>
        <img
          src={
            "https://raw.githubusercontent.com/raselmahmud22/fakeData/main/coverimg.png"
          }
          className="d-lg-block d-none img-fluid"
          alt=""
        />
        <img
          src={mobileCover}
          className="img-fluid d-lg-none d-block position-absolute "
          style={{ width: "100%" }}
          alt=""
        />
        <div
          className="position-relative px-4 d-lg-none d-flex justify-content-between"
          style={{ top: "20px" }}>
          <img
            src={arrowLeft}
            style={{ width: "24px", height: "24px" }}
            alt=""
          />
          <button className="btn btn-outline-light">
            {userLogIn ? "Leave Group" : "Join Group"}
          </button>
        </div>
        <div
          className={`${customSpace.customSpace} position-relative text-white ps-5 ps-md-0 ps-lg-0`}>
          <h2>Computer Engineering</h2>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </section>

      <section className="container-lg container-sm px-lg-5">
        <div className="row" style={{ marginTop: "47px" }}>
          <div className="col-md-8 d-none d-lg-block">
            <Nav
              activeKey="/"
              onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
              <Nav.Item>
                <Nav.Link style={customStyles.customActive} href="/">
                  All Posts(32)
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Article</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Event</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3">Education</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3">Job</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className="d-lg-none d-md-none d-flex justify-content-between align-items-center mb-3">
            <h6>Posts(368)</h6>
            <button className="btn btn-light">Filter: All</button>
          </div>
          <div className="col-md-4 d-flex justify-content-end d-none d-lg-block">
            <button
              className="btn btn-light me-2"
              style={customStyles.fontDesign}>
              Write a post
              <img src={arrow} alt="" />
            </button>
            <button
              className={`btn ${
                userLogIn ? "btn-outline-dark" : "btn-primary"
              }`}
              style={customStyles.fontDesign}>
              <img
                src={userLogIn ? arrowRight : group}
                className="me-2"
                alt=""
              />
              {userLogIn ? "Leave Group" : "Join Group"}
            </button>
          </div>
        </div>
        <hr className="d-none d-lg-block mb-4" />

        <div className="row">
          <div className="col-md-8 pe-lg-5">
            <ArticlePosts
              coverImg={cover1}
              categoryImg={article}
              title={
                "What if famous brands had regular fonts? Meet RegulaBrands!"
              }
              description={
                "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
              }
              profile={profile4}
              name={"Sarthak Kamra"}
            />
            <ArticlePosts
              coverImg={cover2}
              categoryImg={education}
              title={
                "Tax Benefits for Investment under National Pension Scheme launched by Government"
              }
              description={
                "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
              }
              profile={profile3}
              name={"Sarah West"}
            />

            <JobPosts
              coverImg={cover3}
              categoryImg={meetup}
              title={"Finance & Investment Elite Social Mixer @Lujiazui"}
              date={"Fri, 12 Oct, 2018"}
              icon={calenderIcon}
              location={"Ahmedabad, India"}
              button={"Visit Website"}
              profile={profile2}
              name={"Ronal Jones"}
              color={"#E56135"}
            />
            <JobPosts
              coverImg={""}
              categoryImg={job}
              icon={bag}
              title={"Software Developer"}
              date={"Innovaccer Analytics Private Ltd."}
              location={"Noida, India"}
              button={"Apply on Timesjobs"}
              profile={profile1}
              name={"Ronal Jones"}
              color={"#02B875"}
            />
          </div>
          <div className="col-md-4 ps-5 d-none d-lg-block">
            <div
              className="d-flex justify-content-between"
              style={{
                borderBottom: "1px solid gray",
                marginBottom: "32px",
              }}>
              <p>
                <img
                  src={location}
                  alt=""
                  style={{ width: "20px", height: "20px", marginRight: "4px" }}
                  className="img-fluid"
                />
                {userLogIn ? "|Enter your location" : "Noida, India"}
              </p>

              <img
                src={userLogIn ? cross : pen}
                role="button"
                style={{ width: "15px", height: "15px", marginTop: "2px" }}
                alt=""
              />
            </div>
            <img src={alertIcon} alt="" className="d-none d-lg-block"/>
            <div className="d-none d-lg-block">

            {userLogIn && <RecommendedGroup />}
            </div>
          </div>
        </div>
      </section>
      {userLogIn && (
        <img
          role="button"
          src={androidPostIcon}
          style={{ width: "54px", height: "54px", bottom: "0px", right: "0px" }}
          className="d-lg-none position-fixed"
          alt=""
        />
      )}
    </>
  );
};

export default HeroSection;
