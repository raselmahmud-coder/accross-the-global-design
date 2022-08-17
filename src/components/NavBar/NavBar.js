import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import arrow from "../../assets/arrow-bottom.png";
import Navbar from "react-bootstrap/Navbar";
import HeroSection from "../HeroSection/HeroSection";

const NavBar = () => {
  return (
    <>
    <Navbar bg="" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="#home">
          <div>
            <img src={logo} alt="" />
          </div>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-6">
                <p
                  className="mt-md-2 px-4 py-2 text-center"
                  style={{ backgroundColor: "#F2F2F2", borderRadius: "21px" }}>
                  <img src={search} alt="" className="me-3" />
                  Search for your favorite groups in ATG
                </p>
              </div>
              <div className="col-4">
                <p className="mt-md-3 text-center" style={{ fontSize:'16px',lineHeight:'21px', fontWeight:'500'}}>
                  Create account.{" "}
                  <span style={{ color: "#2F6CE5" , }}>It’s free!</span>
                  <img src={arrow} alt="" />
                </p>
              </div>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      <HeroSection/>
    </>
  );
};
export default NavBar;
