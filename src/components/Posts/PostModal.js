import React, { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import crossIcon from "../../assets/cross-icon.png";
import registrationIcon from "../../assets/registration-cover.png";
import customStyle from "../NavBar/RegistrationModal.module.css";
import axios from "axios";
import { toast } from "react-toastify";
function PostModal(props) {
  const [simpleSpinner, setSimpleSpinner] = useState(false);
  const [image, setImage] = useState("");
  console.log(props);
  const handleSignUp = () => {
    // props.setModalShowReg(true);
    props.onHide();
  };
  const handlePost = async (e) => {
    setSimpleSpinner(true);
    e.preventDefault();
    const category = e.target.category.value;
    const title = e.target.title.value;
    const description = e.target.description.value;
    if (props.id && image) {
      const url = `https://api.imgbb.com/1/upload?key=2c53c27424338bf017f58a186ffe899d`;
      fetch(url, {
        method: "POST",
        body: image,
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.status === 200) {
            const imgUrl = result.data.url;
            fetch(`http://localhost:5000/user-post`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              body: JSON.stringify({
                category,
                title,
                description,
                imgUrl,
                id: props.id,
              }),
            })
              .then((res) => res.json())
              .then((data) => {
                props.setReFetch(true);
                setSimpleSpinner(false);
                props.onHide();
                if (data.status === 200) {
                  toast.success("you have post", {
                    toastId: "success",
                  });
                } else {
                  toast.error("there was an error", {
                    toastId: "error",
                  });
                }
              });
          } else {
            toast.error("there was an error", {
              toastId: "error",
            });
          }
        });
    } else if (props.id) {
      console.log("post is");
      fetch(`http://localhost:5000/user-post`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({
          category,
          title,
          description,
          id: props.id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setSimpleSpinner(false);
          props.setReFetch(true);
          props.onHide();
          if (data.status === 200) {
            toast.success("you have post", {
              toastId: "success",
            });
          } else {
            toast.error("there was an error", {
              toastId: "error",
            });
          }
        });
    } else {
      const url = `https://api.imgbb.com/1/upload?key=2c53c27424338bf017f58a186ffe899d`;
      fetch(url, {
        method: "POST",
        body: image,
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.status === 200) {
            const imgUrl = result.data.url;
            fetch(`http://localhost:5000/user-post`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              body: JSON.stringify({
                category,
                title,
                description,
                imgUrl,
              }),
            })
              .then((res) => res.json())
              .then((data) => {
               props.setReFetch(true);
                setSimpleSpinner(false);
                props.onHide();
                if (data.status === 200) {
                  toast.success("you have post", {
                    toastId: "success",
                  });
                } else {
                  toast.error("there was an error", {
                    toastId: "error",
                  });
                }
              });
          } else {
            toast.error("there was an error", {
              toastId: "error",
            });
          }
        });
    }
  };

  const handleFile = (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    setImage(formData);
  };
  return (
    <>
      <Modal
        className={customStyle.modalPositionLogin}
        size="lg"
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <div className={customStyle.topHeader}>
          <img
            src={crossIcon}
            alt="cross"
            className={customStyle.crossIconPost}
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
                  Write on your Mind
                </h2>
              </div>
            </Row>
            <Row className="mb-3">
              <Col xs={12} md={6}>
                <Form onSubmit={handlePost}>
                  <Form.Group className="mb-3" controlId="image">
                    <Form.Control
                      onChange={handleFile}
                      name="image"
                      type="file"
                      accept="image/*"
                      className="py-2"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      name="category"
                      type="text"
                      placeholder="Enter Category"
                      className="py-2"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      name="title"
                      type="text"
                      placeholder="Enter Title"
                      className="py-2"
                    />
                  </Form.Group>
                  <Form.Control
                    name="description"
                    as="textarea"
                    placeholder="Enter description"
                    style={{ height: "100px" }}
                  />

                  <div className="d-flex align-items-center justify-content-between">
                    <Button
                      disabled={simpleSpinner}
                      variant={simpleSpinner ? "secondary" : "primary"}
                      type="submit"
                      className={
                        customStyle.createBtn + " rounded-pill mt-lg-4"
                      }>
                      {simpleSpinner ? "Loading..." : "Post Now"}
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
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PostModal;
