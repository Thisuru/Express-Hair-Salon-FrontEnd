import '../App.css'
import StripeCheckout from "react-stripe-checkout";
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

const StripeCheckoutButton = ({serviceAmount, serviceEmail}) => {

  // toast.configure();
    const history = useHistory();

    const [product, setProduct] = useState({
        name: "CleanUp",
        price: 500,
        description: "This is about Hair Cut",
        email: "vopiyop985@vasqa.com"
    });

    const giveServiceName = (serviceAmount) => {
      var serviceName = ''
      if(serviceAmount === 20){
        serviceName = 'Hair'
      } else if (serviceAmount === 25){
        serviceName = 'Facial'
      } else {
        serviceName = 'CleanUp'
      }

      return serviceName;
    }

    async function handleToken(token, addresses) {
        const response = await axios.post(
          "http://localhost:5000/checkout",
          { token, product }
        );

        console.log(response.status)
    
        if (response.status === 200) {
          // toast("Success! Check email for details", { type: "success" });
          sendEmail(product.email)
        } else {
          toast("Something went wrong", { type: "error" });
        }
      }

      async function sendEmail(email) {
        const response = await axios.post(
          "http://localhost:5000/sendemail",
          { email }
        );
        console.log("Email sent Status code: ", response.status)
    
        if (response.status === 200) {
          history.push('/')
          toast("Success! Check email for details", { type: "success" });
        } else {
          toast("Something went wrong", { type: "error" });
        }
      }

    return(
        <div className="form-group container">
            <StripeCheckout
              stripeKey="pk_test_51JnOKCEuRCvzOUPDmfg4gAGSf5nhzglf2ok7UyPCXxP0WQt4PyZ3dpCBFkuoLshX0Cp576XfWSK8MoAJm8WfvGRF00SkZKOLr0"
              token={handleToken}
              amount={product.price* 100}
              name={product.name}
              email={product.email}
              billingAddress
              shippingAddress
            />
            <ToastContainer />
        </div>
    )
}

export default StripeCheckoutButton;