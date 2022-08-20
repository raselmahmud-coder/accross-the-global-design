import { Button, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import arrow from "../../assets/arrow-bottom.png";
import Navbar from "react-bootstrap/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import { useEffect, useState } from "react";
import profile1 from "../../assets/profile1.png";
import RegistrationModal from "./RegistrationModal";
import Dropdown from "react-bootstrap/Dropdown";

const HomePage = () => {
  const [userLogIn, setUserLogIn] = useState(false);
  const [modalShowReg, setModalShowReg] = useState(false);
  const token = localStorage.getItem("access_token");
  useEffect(() => {
    if (token) {
      setUserLogIn(true);
    }
  }, [token]);

  const handleRegistration = () => {
    setModalShowReg(true);
  };
  const handleLogOut = () => {
    localStorage.removeItem("access_token");
    window.location.reload();
  };
  return (
    <>
      <RegistrationModal
        show={modalShowReg}
        setModalShowReg={setModalShowReg}
        onHideReg={() => setModalShowReg(false)}
      />
      <Navbar expand="lg" className="d-md-block d-none">
        <Container>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <img src={logo} alt="" className="mt-md-2" />
              </div>
              <div className="col-md-4">
                <p
                  className="mt-md-2 px-4 py-2 text-center"
                  style={{
                    backgroundColor: "#F2F2F2",
                    borderRadius: "21px",
                    fontSize: "14px",
                  }}>
                  <img src={search} alt="" className="me-3" />
                  Search for your favorite groups in ATG
                </p>
              </div>
              <div className="col-md-4">
                {userLogIn ? (
                  <>
                    <div className="d-flex justify-content-end">
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="light"
                          id="dropdown-basic"
                          className="mt-lg-1 text-center"
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
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Button
                            onClick={handleLogOut}
                            className="w-100"
                            variant="light">
                            Log Out
                          </Button>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </>
                ) : (
                  <p
                    onClick={handleRegistration}
                    className="mt-md-3 text-center"
                    style={{
                      fontSize: "16px",
                      lineHeight: "21px",
                      fontWeight: "500",
                      cursor: "pointer",
                    }}>
                    Create account{" "}
                    <span style={{ color: "#2F6CE5" }}>It's free!</span>
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
export default HomePage;
