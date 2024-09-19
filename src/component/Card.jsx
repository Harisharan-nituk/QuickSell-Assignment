import { BsFillExclamationSquareFill } from "react-icons/bs";
import { VscCircleLargeFilled } from "react-icons/vsc";
const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h1>{item.id}</h1>
        <img
          src="https://eksab-media-prod.s3.eu-west-1.amazonaws.com/393121/2048px-Eo_circle_red_letter-s.svg.png"
          alt=""
        />
      </div>
      <div className="card-title">{item.title}</div>
      <div className="card-features">
        <div className="card-feature-1">
          <p>
            <BsFillExclamationSquareFill />
          </p>
        </div>
        {item.tag && (
          <div className="card-feature-2">
            <p>
              <VscCircleLargeFilled />
            </p>
            <h3>{item.tag[0]}</h3>
          </div>
        )}
      </div>
    </div>
  );
};
export default Card;
