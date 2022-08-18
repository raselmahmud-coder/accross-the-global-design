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
import alertIcon from "../../assets/alert-icon.png";
import ArticlePosts from "../Posts/ArticlePosts";
import JobPosts from "../Posts/JobPosts";
import { useState } from "react";
import RecommendedGroup from "../RecommendedGroup/RecommendedGroup";

const HeroSection = () => {
  const [userLogIn, setUserLogIn] = useState(true);
  const customStyles = {
    customSpace: { paddingTop: "250px", paddingLeft: "150px" },
    fontDesign: {
      fontSize: "15px",
      fontWeight: "500",
      lineHeight: "20px",
    },
    customPadding: {
      padding: "0px 64px",
    },
    customBtn: {
      color:'#6A6A6B'
    }
  };

  return (
    <>
      <section
        className="img-fluid text-white"
        style={{
          backgroundImage:
            "url(" +
            "https://raw.githubusercontent.com/raselmahmud22/fakeData/main/coverimg.png" +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "440px",
        }}>
        <div style={customStyles.customSpace}>
          <h2>Computer Engineering</h2>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </section>

      <section className="container" style={customStyles.customPadding}>
        <div className="row" style={{ marginTop: "47px" }}>
          <div className="col-md-8">
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
          <div className="col-md-4 d-flex justify-content-end">
            <button
              className="btn btn-light me-2"
              style={customStyles.fontDesign}>
              Write a post
              <img src={arrow} alt="" />
            </button>
            <button className={`btn ${userLogIn ? "btn-outline-dark" : 'btn-primary'}`} style={customStyles.fontDesign}>
              <img src={userLogIn ? arrowRight : group} className="me-2" alt="" />
              {userLogIn ? "Leave Group" : "Join Group"}
            </button>
          </div>
        </div>
        <hr className=" mb-4" />

        <div className="row">
          <div className="col-md-8 pe-5">
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
              title={
                "Finance & Investment Elite Social Mixer @Lujiazui"
              }
              date={
                'Fri, 12 Oct, 2018'
              }
              icon={calenderIcon}
              location={'Ahmedabad, India'}
              button={'Visit Website'}
              profile={profile2}
              name={"Ronal Jones"}
              color={'#E56135'}
              />
            <JobPosts
              coverImg={''}
              categoryImg={job}
              icon={bag}
              title={
                "Software Developer"
              }
              date={
                'Innovaccer Analytics Private Ltd.'
              }
              location={'Noida, India'}
              button={'Apply on Timesjobs'}
              profile={profile1}
              name={"Ronal Jones"}
              color={'#02B875'}
            />
          </div>
          <div className="col-md-4 ps-5">
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
                  style={{ width: "20px", height: "20px", marginRight:'4px'}}
                  className="img-fluid"
                />
                {userLogIn ? "|Enter your location":"Noida, India"}
              </p>

              <img
                src={userLogIn ? cross :pen}
                role="button"
                style={{ width: "15px", height: "15px", marginTop:'2px' }}
                alt=""
              />
            </div>
            <img src={alertIcon} alt="" />
            {userLogIn && <RecommendedGroup/>}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
