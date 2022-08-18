import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import arrow from "../../assets/arrow-bottom.png";
import Navbar from "react-bootstrap/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import { useState } from "react";
import profile1 from "../../assets/profile1.png";

const NavBar = () => {
  const [userLogIn, setUserLogIn] = useState(true);
  return (
    <>
      <Navbar expand="lg" className="d-md-block d-none">
        <Container>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <img src={logo} alt="" className="mt-md-2" />
              </div>
              <div className="col-md-4">
                <p
                  className="mt-md-2 px-4 py-2 text-center h6"
                  style={{
                    backgroundColor: "#F2F2F2",
                    borderRadius: "21px",
                  }}>
                  <img src={search} alt="" className="me-3" />
                  Search for your favorite groups in ATG
                </p>
              </div>
              <div className="col-md-4">
                {userLogIn ? (
                  <p
                    className="mt-md-2 text-center"
                    style={{
                      fontSize: "14px",
                      lineHeight: "18px",
                      fontWeight: "400",
                      color: "black",
                    }}>
                    <img
                      src={profile1}
                      style={{
                        width: "36px",
                        height: "36px",
                        marginRight: "4px",
                      }}
                      alt=""
                    />
                    Siddharth Goyal
                    <img src={arrow} style={{ marginLeft: "4px" }} alt="" />
                  </p>
                ) : (
                  <p
                    className="mt-md-3 text-center"
                    style={{
                      fontSize: "16px",
                      lineHeight: "21px",
                      fontWeight: "500",
                    }}>
                    Create account.
                    <span style={{ color: "#2F6CE5" }}>It’s free!</span>
                    <img src={arrow} alt="" />
                  </p>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Navbar>
      <HeroSection />
    </>
  );
};
export default NavBar;
