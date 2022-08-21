import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import registrationIcon from "../../assets/registration-cover.png";
import customStyle from "../NavBar/RegistrationModal.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const [simpleSpinner, setSimpleSpinner] = useState(false);
  const navigate = useNavigate();

  const handleForgetPass = async (e) => {
    setSimpleSpinner(true);
    e.preventDefault();
    const userName = e.target.username.value;
    const email = e.target.email.value;
    const newPassword = e.target.newPassword.value;
    console.log(userName, email);
    const response = await axios.post(`http://localhost:5000/forget-password`, {
      userName,
        email,
      newPassword
    });

    setSimpleSpinner(false);
    if (response.data.status === 200) {
     toast.success("you have update the password", {
        toastId: "forget",
      });
      navigate("/", {
        replace: true,
      });
    } else {
      toast.error("Mismatch the given information", {
        toastId: "error",
      });
    }
  };
  const handleNavigate = () => {
    navigate("/", { replace: true });
  };
  return (
    <>
      <Container className="w-75 mx-auto mt-lg-5">
        <Row>
          <div className="d-flex justify-content-between align-items-center">
            <h2
              className="pb-lg-3 pb-2"
              style={{
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "31px",
              }}>
              Forget Password
            </h2>
            <p className="d-none d-lg-block">
              Are you sure want to forget password?{" "}
              <span onClick={handleNavigate} className="btn">
                Back
              </span>
            </p>
          </div>
        </Row>
        <Row className="mb-3">
          <Col xs={12} md={6}>
            <Form onSubmit={handleForgetPass}>
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
                  name="newPassword"
                  type="password"
                  placeholder="New Password"
                  className="py-2"
                />
               {/*  <img
                  src={eye}
                  alt="eye"
                  className={customStyle.eyeStyle + " position-relative"}
                /> */}
              </Form.Group>
              <div className="d-flex align-items-center justify-content-between">
                <Button
                  disabled={simpleSpinner}
                  variant={simpleSpinner ? "secondary" : "primary"}
                  type="submit"
                  className={customStyle.createBtn + " rounded-pill mt-lg-4"}>
                  {simpleSpinner ? "Loading..." : "Sign In"}
                </Button>
              </div>
            </Form>
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
    </>
  );
};

export default ForgetPassword;
