import { Nav } from "react-bootstrap";
import arrow from "../../assets/arrow-bottom.png";
import group from "../../assets/group.png";

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
                  <hr />
      </section>
    </>
  );
};

export default HeroSection;
