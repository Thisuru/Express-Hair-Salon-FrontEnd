import { Col, Row } from "antd";
import "../App.css";
import { CustomButton } from "./CustomButton";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <Row style={{ height: "100%" }}>
        <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="left-side-area">
            <div className="title_1">
              <h1>Always make room for</h1>
              <h1>beauty in your life</h1>
              <p>
                At Prague we are passionate about making people feel good while looking their best.
                Attending advanced education allows us to keep up with the latest trends and provide
                each guest with a unique & customizable result. For your convenience, Schedule your
                reservation today!
              </p>
              <CustomButton
                className="btn"
                buttonStyle="btn--outline"
                buttonSize="btn--medium"
                onClick={console.log("hey")}
                otherClasses="left-side-area-btn">
                Book now
              </CustomButton>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={12}>
          {/* <div>col-6</div> */}
        </Col>
      </Row>
    </div>
  );
}

export default HeroSection;
