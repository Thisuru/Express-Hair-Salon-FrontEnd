import "./Services.css";
import CardItem from "./CardItem";

function Services() {
  return (
    <div className="services-area">
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
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/serviceDetails"
            />
            <CardItem
              src="images/img_svs_2.svg"
              title="Hair Styling"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/serviceDetails"
            />
            <CardItem
              src="images/img_svs_3.svg"
              title="Makeup"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/serviceDetails"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
