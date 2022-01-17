import "./index.scss";

const Description = ({ title, desc }) => {
  return (
    <div className="description-container">
      <div className="title">
        <h2>{title}</h2>
        <span>{desc}</span>
      </div>
      <div className="link">바로가기</div>
    </div>
  );
};

export default Description;
