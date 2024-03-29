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
import customStyle from "./RegistrationModal.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function LoginModal(props) {
  const [simpleSpinner, setSimpleSpinner] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = () => {
    props.setModalShowReg(true);
    props.onHide();
  };
  const handleLogin = async (e) => {
    setSimpleSpinner(true);
    e.preventDefault();
    const userName = e.target.username.value;
    const password = e.target.password.value;
    console.log(userName, password);
    const response = await axios.post(`http://localhost:5000/login`, {
      userName,
      password,
    });
    props.onHide();
    setSimpleSpinner(false);
    if (response.data.status === 200) {
      localStorage.setItem("access_token", JSON.stringify(response.data.token));
      window.location.reload();
    } else {
      toast.error("there was an error occured!");
    }
    // console.log("login", response.data.token);
  };
  const handleNavigate = () => {
    navigate("/forget-password", { replace: true });
  }
  return (
    <>
      <Modal
        className={customStyle.modalPositionLogin}
        size="lg"
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <div className={customStyle.topHeader}>
          <h4
            id="contained-modal-title-vcenter"
            className="text-center py-lg-3 m-0 d-none d-lg-block"
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
            computer engineering. Sign in now 🤘🏼
          </h4>

          <img
            src={crossIcon}
            alt="cross"
            className={customStyle.crossIconLogin}
            onClick={props.onHide}
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
                  Sign In
                </h2>
                <p
                  className="d-none d-lg-block"
                  style={{
                    fontWeight: "400",
                    fontSize: "13px",
                    lineHeight: "17px",
                    color: "#3D3D3D",
                  }}>
                  Don't have an account yet?{" "}
                  <span
                    onClick={handleSignUp}
                    style={{ color: "#2F6CE5", cursor: "pointer" }}>
                    Create new for free!
                  </span>
                </p>
              </div>
            </Row>
            <Row className="mb-3">
              <Col xs={12} md={6}>
                <Form onSubmit={handleLogin}>
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
                      name="password"
                      type="password"
                      placeholder="Password"
                      className="py-2"
                    />
                    <img
                      src={eye}
                      alt="eye"
                      className={customStyle.eyeStyle + " position-relative"}
                    />
                  </Form.Group>
                  <div className="d-flex align-items-center justify-content-between">
                    <Button
                      disabled={simpleSpinner}
                      variant={simpleSpinner ? "secondary" : "primary"}
                      type="submit"
                      className={
                        customStyle.createBtn + " rounded-pill mt-lg-4"
                      }>
                      {simpleSpinner ? "Loading..." : "Sign In"}
                    </Button>
                    <Button
                      onClick={handleSignUp}
                      variant="light"
                      className="d-lg-none rounded-pill d-md-none text-dark mt-lg-4">
                      or, Create Account
                    </Button>
                  </div>
                </Form>
                <div>
                  <Button className="w-100 rounded-pill bg-light border-secondary text-dark mt-4 mb-3">
                    {" "}
                    <img src={fbIcon} alt="" /> Sign in with Facebook
                  </Button>
                  <Button className="w-100 rounded-pill bg-light border-secondary text-dark">
                    {" "}
                    <img src={googleIcon} alt="" /> Sign in with Google
                  </Button>
                  <p
                    onClick={handleNavigate}
                    className="mt-3"
                    style={{
                      cursor: "pointer",
                      fontWeight: "500",
                      fontSize: "12px",
                      lineHeight: "16px",
                      textAlign: "center",
                      letterSpacing: "-0.008em",
                      color: "#000",
                    }}>
                    Forgot Password?
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <img
                  src={registrationIcon}
                  alt=""
                  className="img-fluid w-100 d-none d-lg-block"
                />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginModal;
