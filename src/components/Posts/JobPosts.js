import eye from "../../assets/eye.png";
import share from "../../assets/share-icon.png";
import dot from "../../assets/3dot-icon.png";
import locationIcon from "../../assets/location-icon.png";


const JobPosts = ({
  coverImg,
  categoryImg,
  title,
  date,
  location,
  button,
  icon,
  profile,
  name,
  color,
}) => {
  return (
    <article
      style={{
        background: "#FFFFFF",
        border: "1px solid #E0E0E0",
        borderRadius: "4px",
        marginBottom: "16px",
      }}>
      <img src={coverImg} className="img-fluid" alt="" />
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
          <img
            src={dot}
            role="button"
            style={{ width: "28px", height: "28px" }}
            alt=""
          />
        </div>
        <div
          className="d-flex align-items-center"
          style={{
            fontWeight: "500",
            fontSize: "15px",
            lineHeight: "20px",
            color: "#000000",
          }}>
          <p className="d-flex align-items-center">
            <img
              src={icon}
              style={{ width: "20px", height: "20px", marginRight: "4px" }}
              alt=""
            />
            {date}
          </p>
          <p className="ms-md-5 d-flex align-items-center">
            <img src={locationIcon} style={{ marginRight: "4px" }} alt="" />
            {location}
          </p>
        </div>
        <button
          className="btn"
          style={{
            display: "block",
            width: "100%",
            border: "0.7px solid #A9AEB8",
            marginTop: "16px",
            marginBottom: "32px",
            color: `${ color }`,
          }}
          type="button">
          {button}
        </button>
        <div className="row row-cols-2">
          <div className="col d-flex align-items-center">
            <img src={profile} alt="" role="button" />
            <h3
              style={{
                fontWeight: "600",
                fontSize: "18px",
                lineHeight: "23px",
                marginLeft: "10px",
              }}>
              {name}
            </h3>
          </div>

          <div className="col">
            <div className="d-flex justify-content-end align-items-center">
              <img
                src={eye}
                className="img-fluid"
                style={{ width: "18px", height: "18px", marginRight: "8px" }}
                alt=""
              />
              1.4k views
              <img src={share} alt="" className="ms-5" role="button" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default JobPosts;
