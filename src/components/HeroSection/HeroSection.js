import { Nav } from "react-bootstrap";
import arrow from "../../assets/arrow-bottom.png";
import group from "../../assets/group.png";
import location from "../../assets/location-icon.png";
import pen from "../../assets/pen-icon.png";
import cross from "../../assets/cross.png";
import profile4 from "../../assets/profile4.png";
import arrowRight from "../../assets/arrow-right.png";
import article from "../../assets/article.png";
import arrowLeft from "../../assets/arrow_back.png";
import androidPostIcon from "../../assets/androidPen.png";
import alertIcon from "../../assets/alert-icon.png";
import mobileCover from "../../assets/mobile-cover-min.png";
import ArticlePosts from "../Posts/ArticlePosts";
import { useEffect, useState } from "react";
import RecommendedGroup from "../RecommendedGroup/RecommendedGroup";
import customSpace from "./hero.module.css";
import RegistrationModal from "../NavBar/RegistrationModal";
import { toast } from "react-toastify";
import PostModal from "../Posts/PostModal";
// custom style css
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
const HeroSection = () => {
  const [userLogIn, setUserLogIn] = useState(false);
  const [modalShowReg, setModalShowReg] = useState(false);
  const token = localStorage.getItem("access_token");
  const [modalShowPost, setModalShowPost] = useState(false);
  const [reFetch, setReFetch] = useState("");
  const [AllPost, setAllPost] = useState([]);
  // console.log(AllPost);
  const handleShowPost = () => {
    if (token) {
      
      setModalShowPost(true);
    } else {
      toast.error("You need to login first", {
        toastId: "token",
      });
    }
  };

  useEffect(() => {
    if (token) {
      setUserLogIn(true);
    }
  }, [token]);
  useEffect(() => {
    fetch(`http://localhost:5000/user-post`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAllPost(data.result);
        setReFetch("");
      });
  }, [reFetch]);

  const handleRegis = () => {
    setModalShowReg(true);
  };

  return (
    <>
      <PostModal setReFetch={setReFetch} show={modalShowPost} onHide={() => setModalShowPost(false)} />

      <RegistrationModal
        show={modalShowReg}
        setModalShowReg={setModalShowReg}
        onHideReg={() => setModalShowReg(false)}
      />
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
          {!userLogIn ? (
            <button onClick={handleRegis} className="btn btn-outline-light">
              Join Group
            </button>
          ) : (
            <button className="btn btn-outline-light">Leave Group</button>
          )}
        </div>
        <div
          className={`${customSpace.customSpace} position-relative text-white ps-5 ps-md-0 ps-lg-0`}>
          <h2>Computer Engineering</h2>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </section>

      <section className="container-lg container-sm px-lg-5">
        <div className="row pt-lg-5" style={{ marginTop: "47px" }}>
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
              onClick={handleShowPost}
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
            {AllPost.map((post) => (
              <ArticlePosts
                key={post._id}
                currentLike={post?.like}
                currentComment={post?.comment}
                setReFetch={setReFetch}
                postId={post._id}
                coverImg={post.imgUrl}
                categoryImg={article}
                title={post.title}
                description={post.description}
                profile={profile4}
                name={"Sarthak Kamra"}
              />
            ))}

            {/*  <JobPosts
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
            /> */}
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
            <img src={alertIcon} alt="" className="d-none d-lg-block" />
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
