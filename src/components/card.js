import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from "./button";

function Card(props) {
  const navigate = useNavigate();
  const {
    image,
    title,
    desc,
    buttonLabel = "Read More",
    buttonColor = "blue",
    buttonLink = "/post",
    buttonSize = "small",
  } = props;
  return (
    // <div class="card">
    //   <img src={image} class="card-img-top" alt="..." />
    //   <div class="card-body">
    //     <h5 class="card-title">{title}</h5>
    //     <p class="card-text">{desc}</p>
    //     <Button label={buttonLabel} color={buttonColor} />
    //   </div>
    // </div>
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <div className="text-end">
          <Button
            color={buttonColor}
            label={buttonLabel}
            size={buttonSize}
            onClick={() => {
              navigate(buttonLink);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
