import "./Services.css";
import CardItem from "./CardItem";

function Services() {
  return (
    <div className="services-area" id="services">
      <h1>Services</h1>
      <div className="services-area__container">
        <div className="services-area__wrapper">
          {/* <ul className='services-area__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services-area'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services-area'
            />
          </ul> */}
          <ul className="services-area__items">
            <CardItem
              src="images/img_svs_1.svg"
              title="Haircut"
              text="Lorem ipsum dolor sit amet, conse adipiscing incididunt ut Haircut."
              label="Haircut"
              path="/serviceDetails/1"
            />
            <CardItem
              src="images/img_svs_2.svg"
              title="Hair Styling"
              text="Lorem ipsum dolor sit amet, conse adipiscing incididunt ut Hair Styling."
              label="Styling"
              path="/serviceDetails/2"
            />
            <CardItem
              src="images/img_svs_3.svg"
              title="Makeup"
              text="Lorem ipsum dolor sit amet, conse adipiscing incididunt ut Makeup."
              label="Makeup"
              path="/serviceDetails/3"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
