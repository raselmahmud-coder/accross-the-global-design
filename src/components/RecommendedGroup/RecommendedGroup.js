import thumbs from "../../assets/thumbs-up.png";
import profile1 from "../../assets/groupImg1.png";
import profile2 from "../../assets/groupImg2.png";
import profile3 from "../../assets/groupImg3.png";
const RecommendedGroup = () => {
  return (
    <section>
      <h4 className="mt-5 mb-4">
        <img src={thumbs} alt="" /> Recommended Groups
      </h4>
      <div className="d-flex justify-content-between align-items-center">
        <p style={{ fontWeight: "400", fontSize: "14px", lineHeight: "18px" }}>
          <img
            src={profile1}
            style={{ marginRight:'12px', width: "36px", height: "36px" }}
            alt=""
          />
          Leisure
        </p>
        <p
          style={{
            padding: "4px 12px",
            borderRadius: "14px",
            background: "#EDEEF0",
          }}
          className="btn">
          Follow
        </p>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <p style={{ fontWeight: "400", fontSize: "14px", lineHeight: "18px" }}>
          <img
            src={profile2}
            style={{ marginRight:'12px', width: "36px", height: "36px" }}
            alt=""
          />
         Activism
        </p>
        <p
          style={{
            padding: "4px 12px",
            borderRadius: "14px",
            background: "#EDEEF0",
          }}
          className="btn">
          Follow
        </p>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <p style={{ fontWeight: "400", fontSize: "14px", lineHeight: "18px" }}>
          <img
            src={profile3}
            style={{ marginRight:'12px', width: "36px", height: "36px" }}
            alt=""
          />
         MBA
        </p>
        <p
          style={{
            padding: "4px 12px",
            borderRadius: "14px",
            background: "#EDEEF0",
          }}
          className="btn">
          Follow
        </p>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <p style={{ fontWeight: "400", fontSize: "14px", lineHeight: "18px" }}>
          <img
            src={profile1}
            style={{ marginRight:'12px', width: "36px", height: "36px" }}
            alt=""
          />
          Philosophy
        </p>
        <p
          style={{
            padding: "4px 12px",
            borderRadius: "14px",
            background: "#EDEEF0",
          }}
          className="btn">
          Follow
        </p>
      </div>
    </section>
  );
};

export default RecommendedGroup;
