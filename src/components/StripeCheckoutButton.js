import '../App.css'
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import './StripeCheckoutButton.css'

const StripeCheckoutButton = ({serviceAmount, serviceEmail}) => {

  // toast.configure();
    const history = useHistory();

    useEffect(() => {
      setProduct({
        ...product,
        price: serviceAmount,
        email:serviceEmail,
        name:giveServiceName(serviceAmount),
        imageUrl: selectImage(serviceAmount)
      })
    }, [serviceAmount, serviceEmail]);

    const [product, setProduct] = useState({
        name: "CleanUp",
        price: 500,
        description: "This is about Hair Cut",
        email: "vopiyop985@vasqa.com",
        imageUrl:"https://svgshare.com/i/CUz.svg"
    });

    const giveServiceName = (serviceAmount) => {
      var serviceName = ''
      if(serviceAmount === 20){
        serviceName = 'Haircut'
      } else if (serviceAmount === 25){
        serviceName = 'Hair Styling'
      } else {
        serviceName = 'Makeup'
      }

      return serviceName;
    }

    const selectImage = (serviceAmount) => {
      var imageUrl = ''
      if(serviceAmount === 20){
        imageUrl = 'images/img_svs_1.svg'
      } else if (serviceAmount === 25){
        imageUrl = 'images/img_svs_2.svg'
      } else {
        imageUrl = 'images/img_svs_3.svg'
      }

      return imageUrl;
    }

    async function handleToken(token, addresses) {
        const response = await axios.post(
          "http://localhost:5000/checkout",
          { token, product }
        );

        console.log(response.status)

        if (response.status === 200) {
         
          toast("Success! Check email for details", { type: "success" });
          sendEmail(product.email)
        } else {
          toast("Something went wrong", { type: "error" });
        }
      }

      async function sendEmail(email) {
        const response = await axios.post(
          "http://localhost:5000/sendemail",
          { email, product }
        );
        console.log("Email sent Status code: ", response.status)
    
        if (response.status === 200) {
          history.push('/thankyou')
          toast("Success! Check email for details", { type: "success" });
        } else {
          toast("Something went wrong", { type: "error" });
        }
      }

    return(
        <div className="form-group container">
            <StripeCheckout
              className="center"
              stripeKey="pk_test_51JnOKCEuRCvzOUPDmfg4gAGSf5nhzglf2ok7UyPCXxP0WQt4PyZ3dpCBFkuoLshX0Cp576XfWSK8MoAJm8WfvGRF00SkZKOLr0"
              token={handleToken}
              amount={product.price* 100}
              name={product.name}
              email={product.email}
              billingAddress
              shippingAddress
              panelLabel="Pay Now"
              image={product.imageUrl}

            />
            <ToastContainer />
        </div>
    )
}

export default StripeCheckoutButton;