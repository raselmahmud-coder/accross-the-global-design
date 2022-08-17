import { Nav } from "react-bootstrap";
import arrow from "../../assets/arrow-bottom.png";
import group from "../../assets/group.png";
import location from "../../assets/location-icon.png";
import pen from "../../assets/pen-icon.png";
import profile4 from "../../assets/profile4.png";
import profile3 from "../../assets/profile3.png";
import profile2 from "../../assets/profile2.png";
import cover1 from "../../assets/post-img1.png";
import cover2 from "../../assets/post-img2.png";
import cover3 from "../../assets/post-image3.png";
import article from "../../assets/article.png";
import education from "../../assets/education-icon.png";
import alertIcon from "../../assets/alert-icon.png";
import ArticlePosts from "../Posts/ArticlePosts";
import JobPosts from "../Posts/JobPosts";

const HeroSection = () => {
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
            <button className="btn btn-primary" style={customStyles.fontDesign}>
              <img src={group} className="me-2" alt="" />
              Join Group
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
              categoryImg={education}
              title={
                "Tax Benefits for Investment under National Pension Scheme launched by Government"
              }
              description={
                "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
              }
              profile={profile2}
              name={"Ronal Jones"}
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
                  style={{ width: "20px", height: "20px" }}
                  className="img-fluid"
                />
                Noida, India
              </p>

              <img
                src={pen}
                role="button"
                style={{ width: "20px", height: "20px" }}
                alt=""
              />
            </div>
            <img src={alertIcon} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
