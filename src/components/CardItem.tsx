import { Link } from "react-router-dom";
import { CustomButton } from "./CustomButton";

function CardItem(props: any) {
  return (
    <>
      <li className="services-area__item">
        <Link className="services-area__item__link" to={props.path}>
          <figure className="services-area__item__pic-wrap" data-category={props.label}>
            <img className="services-area__item__img" alt="Travel Image" src={props.src} />
          </figure>
          <div className="services-area__item__info">
            <h5 className="services-area__item__title">{props.title}</h5>
            <p className="services-area__item__text"> {props.text}</p>
            <CustomButton
              className="btn"
              onClick={console.log("hey")}
              otherClasses="services-area__item-btn">
              MAKE A RESERVATION
            </CustomButton>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
