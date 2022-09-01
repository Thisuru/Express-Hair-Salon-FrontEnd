import { Col, Row } from "antd";
import "../../App.css";
import { CustomButton } from "../../components/CustomButton";
import "../../components/HeroSection.css";
import {withRouter} from 'react-router-dom';


export default function ServiceDetails() {

  const makeReserve = () => {
    console.log('Make Reservation button clicked');
  }

  return (
    // <h1 className='services-details'>Haircut</h1>
    <div className="services-details">
      <Row style={{ height: "100%" }}>
        <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={12}>
          <div style={{height: '74%'}} className="left-side-area">
            <div className="title_1">
              <h1 style={{color: 'black', lineHeight: '80px'}}>Haircut</h1>
              <p style={{color: "black"}}>
                At Prague we are passionate about making people feel good while looking their best.
                Attending advanced education allows us to keep up with the latest trends and provide
                each guest with a unique & customizable result. For your convenience, Schedule your
                reservation today!
              </p>
              <CustomButton
                className="btn"
                buttonStyle="btn--primary"
                buttonSize="btn--medium"
                onClick={() => makeReserve()}
                otherClasses="left-side-area-btn">
                Make a Reservation
              </CustomButton>
            </div>
          </div>
        </Col>
        {/* <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={12}>
          <div>col-6</div>
        </Col> */}
      </Row>
    </div>
  );
}
