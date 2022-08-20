import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import crossIcon from "../../assets/cross-icon.png";
import eye from "../../assets/eye.png";
import fbIcon from "../../assets/fb-icon.png";
import googleIcon from "../../assets/google-icon.png";
import registrationIcon from "../../assets/registration-cover.png";
import LoginModal from "./LoginModal";

function RegistrationModal(props) {
  const [modalShow, setModalShow] = useState(false);

  const handleSignIn = () => {
    props.onHideReg();
    setModalShow(true);
  };
  return (
    <>
      <LoginModal show={modalShow} setModalShowReg={props.setModalShowReg} onHide={() => setModalShow(false)} />
      <Modal
        size="lg"
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ backgroundColor: "#EFFFF4", borderRadius: "10px" }}>
          <h4
            id="contained-modal-title-vcenter"
            className="text-center py-lg-3 m-0"
            style={{
              backgroundColor: "#EFFFF4",
              color: "#008A45",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "16px",
              textAlign: "center",
            }}>
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </h4>

          <img
            src={crossIcon}
            alt="cross"
            className=""
            style={{
              cursor: "pointer",
              position: "absolute",
              right: "-24px",
              top: "-20px",
            }}
            onClick={props.onHideReg}
          />
        </div>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <div className="d-flex justify-content-between align-items-center">
                <h2
                  className="py-lg-3"
                  style={{
                    fontWeight: "700",
                    fontSize: "24px",
                    lineHeight: "31px",
                  }}>
                  Create Account
                </h2>
                <p
                  style={{
                    fontWeight: "400",
                    fontSize: "13px",
                    lineHeight: "17px",
                    color: "#3D3D3D",
                  }}>
                  Already have an account?{" "}
                  <span
                    onClick={handleSignIn}
                    style={{ color: "#2F6CE5", cursor: "pointer" }}>
                    Sign In
                  </span>
                </p>
              </div>
            </Row>
            <Row className="mb-3">
              <Col xs={12} md={6}>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      className="py-2"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      className="py-2"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      className="py-2"
                    />
                    <img
                      src={eye}
                      alt="cross"
                      className="position-relative"
                      style={{
                        cursor: "pointer",
                        top: "-34px",
                        left: "334px",
                      }}
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 rounded-pill mt-4">
                    Create Account
                  </Button>
                </Form>
                <div>
                  <Button className="w-100 rounded-pill bg-light border-secondary text-dark mt-4 mb-3">
                    {" "}
                    <img src={fbIcon} alt="" /> Sign up with Facebook
                  </Button>
                  <Button className="w-100 rounded-pill bg-light border-secondary text-dark">
                    {" "}
                    <img src={googleIcon} alt="" /> Sign up with Google
                  </Button>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <img
                  src={registrationIcon}
                  alt=""
                  className="img-fluid w-100"
                />
                <footer
                  style={{
                    fontWeight: "400",
                    fontSize: "11px",
                    lineHeight: "16px",
                    letterSpacing: "-0.008em",
                    color: "#000000",
                  }}>
                  By signing up, you agree to our Terms & conditions, Privacy
                  policy
                </footer>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RegistrationModal;
