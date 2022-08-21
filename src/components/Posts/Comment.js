import React from "react";
import { useNavigate } from "react-router-dom";

const Comment = (props) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <h2 className="text-center">
        Coming Soon{" "}
        <p style={{ cursor: "pointer" }} onClick={handleBack}>
          Go Back
        </p>{" "}
      </h2>
    </div>
  );
};

export default Comment;
