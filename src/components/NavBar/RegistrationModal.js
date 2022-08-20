import axios from "axios";
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
import customStyle from "./RegistrationModal.module.css";
import { toast } from "react-toastify";
function RegistrationModal(props) {
  const [modalShow, setModalShow] = useState(false);
  const [simpleSpinner, setSimpleSpinner] = useState(false);

  const handleSignIn = () => {
    props.onHideReg();
    setModalShow(true);
  };
  const handleForm = async (e) => {
    setSimpleSpinner(true);
    e.preventDefault();
    const userName = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const response = await axios.post(`http://localhost:5000/registration`, {
      userName,
      email,
      password,
    });
    setSimpleSpinner(false);
    props.onHideReg();
    if (response.data.status === 200) {
      toast.success("User was created", {
        toastId: "regis",
      });
    } else {
      toast.error("there was a problem", {
        toastId: "regis-err",
      });
    }
  };
  return (
    <>
      <LoginModal
        show={modalShow}
        setModalShowReg={props.setModalShowReg}
        onHide={() => setModalShow(false)}
      />
      <Modal
        centered
        className={customStyle.modalPosition}
        size="lg"
        {...props}
        aria-labelledby="contained-modal-title-vcenter">
        <div className={customStyle.topHeader}>
          <h4
            id="contained-modal-title-vcenter"
            className="text-center pt-lg-3 m-0 d-none d-lg-block"
            style={{
              backgroundColor: "#EFFFF4",
              color: "#008A45",
              fontWeight: "500",
              fontSize: "14px",
              lineHeight: "16px",
              textAlign: "center",
              borderRadius: "inherit",
            }}>
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </h4>

          <img
            src={crossIcon}
            alt="cross"
            className={customStyle.crossIcon}
            onClick={props.onHideReg}
          />
        </div>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <div className="d-flex justify-content-between align-items-center">
                <h2
                  className="pb-lg-3 pb-2"
                  style={{
                    fontWeight: "700",
                    fontSize: "24px",
                    lineHeight: "31px",
                  }}>
                  Create Account
                </h2>
                <p
                  className="d-none d-lg-block"
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
                <Form onSubmit={handleForm}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      name="username"
                      type="text"
                      placeholder="Username"
                      className="py-2"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="py-2"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      name="password"
                      type="password"
                      placeholder="Password"
                      className="py-2"
                    />
                    <img
                      src={eye}
                      alt="cross"
                      className={customStyle.eyeStyle + " position-relative"}
                    />
                  </Form.Group>
                  <div className="d-flex align-items-center justify-content-between">
                    <Button
                      disabled={simpleSpinner}
                      variant="primary"
                      type="submit"
                      className={
                        customStyle.createBtn + " rounded-pill mt-lg-4"
                      }>
                      {simpleSpinner ? "Loading..." : "Create Account"}
                    </Button>
                    <Button
                      onClick={handleSignIn}
                      variant="light"
                      className="d-lg-none rounded-pill d-md-none text-dark mt-lg-4">
                      or, Sign In
                    </Button>
                  </div>
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
                  className="img-fluid w-100 d-none d-lg-block"
                />
                <footer
                  className="text-center mt-lg-0 mt-3"
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
