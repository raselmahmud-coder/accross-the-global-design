import eye from "../../assets/eye.png";
import share from "../../assets/share-icon.png";
import profile1 from "../../assets/profile1.png";
import dot from "../../assets/3dot-icon.png";
import { Button, Dropdown, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostModal from "./PostModal";

const ArticlePosts = ({
  postId,
  coverImg,
  categoryImg,
  title,
  description,
  name,
  setReFetch,
  currentLike,
  currentComment,
}) => {
  const [simpleSpinner, setSimpleSpinner] = useState(false);
  const [show, setShow] = useState(false);
  const [modalShowPost, setModalShowPost] = useState({
    showPost: false,
    editId: "",
  });
  const navigate = useNavigate()
  const handleClose = () => setShow(false);
  const handleDelete = (id) => {
    const confirm = window.confirm("are you sure?");
    if (confirm) {
      fetch(`http://localhost:5000/user-post/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 200) {
            setReFetch(true);
            toast.warn("you have deleted", {
              toastId: "deleted",
            });
          } else {
            toast.error("Encounter error!", {
              toastId: "err",
            });
          }
        });
    }
  };
  const handleLike = (id) => {
    console.log(id);
    const like = currentLike ? parseInt(currentLike) + 1 : 1;
    if (id) {
      fetch(`http://localhost:5000/user-post/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ like }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 200) {
            setReFetch(true);
            toast.success("you have liked", {
              toastId: "like",
            });
          } else {
            toast.error("Encounter error!", {
              toastId: "err",
            });
          }
        });
    }
  };
  const handleComment = (id) => {
    setShow(true);
  };
  const handleForm = (e, id) => {
    e.preventDefault();
    setSimpleSpinner(true);
    const comment = e.target.comment.value;
    // console.log(comment, id)
    fetch(`http://localhost:5000/user-post/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ comment }),
    })
      .then((res) => res.json())
      .then((data) => {
        setShow(false);
        setSimpleSpinner(false);
        if (data.status === 200) {
          toast.success("you have added comment", {
            toastId: "comment",
          });
        } else {
          toast.error("there was an error", {
            toastId: "comment-err",
          });
        }
      });
  };

  const handleEdit = (id) => {
    setModalShowPost({ ...modalShowPost, showPost: true, editId: id });
  };
  const handleGetComment = (id) => {
    // alert("Coming Some will see specific comment here");
    navigate("/comment", {data:"id"})
  };
  return (
    <>
      <PostModal
        setReFetch={setReFetch}
        id={modalShowPost.editId}
        show={modalShowPost.showPost}
        onHide={() => setModalShowPost({ showPost: false })}
      />

      {/* comment modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Post a Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => handleForm(e, postId)}>
            <Form.Control
              name="comment"
              as="textarea"
              placeholder="Enter Comment"
              style={{ height: "100px" }}
            />
            <Button
              disabled={simpleSpinner}
              variant={simpleSpinner ? "secondary" : "primary"}
              type="submit"
              className={" rounded-pill mt-lg-4"}>
              {simpleSpinner ? "Loading..." : "Comment Now"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <article
        style={{
          background: "#FFFFFF",
          border: "1px solid #E0E0E0",
          borderRadius: "4px",
          marginBottom: "16px",
        }}>
        <img src={coverImg} className="img-fluid w-100" style={{height:'220px'}} alt="" />
        <div style={{ padding: "20px" }}>
          <img src={categoryImg} className="img-fluid" alt="" />
          <div className="d-flex justify-content-between">
            <h3
              style={{
                fontWeight: "1000",
                fontSize: "22px",
                lineHeight: "134.17%",
                padding: "10px 0px",
              }}>
              {title}
            </h3>
            <div>
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
                    src={dot}
                    role="button"
                    style={{ width: "28px", height: "28px" }}
                    alt=""
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu className={"customDrop"}>
                  <Button
                    className="text-start w-100"
                    variant="light"
                    onClick={() => handleEdit(postId)}>
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDelete(postId)}
                    className="text-start w-100"
                    variant="light">
                    Delete
                  </Button>
                  <Button
                    onClick={() => handleLike(postId)}
                    className="text-start w-100"
                    variant="light">
                    Like ({currentLike ? currentLike : 0})
                  </Button>
                  <Button
                    onClick={() => handleComment(postId)}
                    className="text-start w-100"
                    variant="light">
                    Add Comment
                  </Button>
                  <Button
                    onClick={() => handleGetComment(postId)}
                    className="text-start w-100"
                    variant="light">
                    See Comment
                  </Button>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <p
            style={{
              fontWeight: "400",
              fontSize: "19px",
              lineHeight: "134.17%",
              color: "#5C5C5C",
            }}>
            {description}
          </p>
          <div className="row row-cols-2">
            <div className="col d-flex align-items-center">
              <img src={profile1} alt="" role="button" />
              <div className="">
                <h3
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    lineHeight: "23px",
                    marginLeft: "10px",
                  }}>
                  {name}
                </h3>
                <span className="d-sm-block d-lg-none ms-3">1.4k views</span>
              </div>
            </div>

            <div className="col">
              <div className="d-flex justify-content-end align-items-center">
                <img
                  src={eye}
                  className="img-fluid d-none d-lg-block"
                  style={{ width: "18px", height: "18px", marginRight: "8px" }}
                  alt=""
                />
                <span className="d-none d-lg-block">1.4k views</span>
                <img src={share} alt="" className="ms-5" role="button" />
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticlePosts;
