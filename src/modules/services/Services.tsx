import "../../App.css";
import { Form, Field, Formik } from "formik";
import { Col, Row, Form as AntForm, DatePicker, DatePickerProps, TimePicker } from "antd";
import {
  CustomDatePicker,
  CustomInput,
  CustomSelect,
  CustomTimePicker
} from "../../components/makeFields/CustomFormFeilds";
import * as Yup from "yup";
// import moment from "moment";
// import { CustomButton } from "../../components/CustomButton";
// import axios from "axios";
// import { useState } from "react";
import HTTPClient from "../../utils/HTTPClient";
import { BOOKING } from "../../utils/EndPoints";
import StripeCheckoutButton from "../../components/StripeCheckoutButton";

export default function Services() {
  // const [selectedService, setSelectedService] = useState<any>(null);

  const submitHandler = async (data: any) => {

    try {

      const res = await HTTPClient.Post(BOOKING, {
        price: data.service,
        // service: selectedService?.label,
        data: data
      })

      if(res?.data.url){
        window.open( res.data.url, '_blank');
      }
      
    } catch (error) {
      console.log(error);
    }
  
    // axios.post('http://localhost:5000/booking', { 
    //   price: data.service,
    //   data: data
    // })
    //  .then((res) => {
    //     if(res.data.url){
    //       window.open( res.data.url, '_blank');
    //     }
    //  })
    //  .catch((err) => console.log(err));
    
  };

  const validationSchema = Yup.object({
    service: Yup.string().required("Required"),

    firstName: Yup.string().required("Required").max(32, "Maximum length exceed"),

    lastName: Yup.string().required("Required").max(32, "Maximum length exceed"),

    email: Yup.string().required("Required").max(32, "Maximum length exceed")
  });

  // const dropdownVal = (values : any) => {
    
  //   const obj = JSON.parse(values.service);
  //   console.log("dropdownVal", obj);
  //   console.log("label", obj.cost);

  //   return obj.cost;
  // }

  return (
    <div className="salonServices">
      <div className="form-container">
        <Formik
          enableReinitialize={true}
          initialValues={{
            service: "",
            firstName: "",
            lastName: "",
            email: "",
            date: "",
            consumerUidType: "",
          }}
          validationSchema={validationSchema}

          onSubmit={(values: any, props) => {
            console.log("🚀 ~ All Form Value Obj", values);

            // dropdownVal(values)
            // submitHandler(values);
          }}>
            
          {({ errors, touched, values, handleChange, handleBlur, handleSubmit, setFieldValue }) => {
            return (
              <div className="booking-form">
                <h3>Booking details</h3>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={{ span: 24 }} xs={{ span: 24 }}>
                      <AntForm.Item
                        help={touched.service && errors.service ? errors.service.toString() : ""}
                        validateStatus={touched.service && errors.service ? "error" : "success"}>
                        {/* <Field
                          name="service"
                          component={CustomSelect}
                          value={selectedService}
                          setFieldValue={values.service}
                          serviceChangeHandler={handleChange}
                        /> */}

                        <CustomSelect 
                          name="service"
                          onChange={handleChange}
                          value={values.service}
                        />

                      </AntForm.Item>
                    </Col>
                  </Row>

                  <Row gutter={[15, 0]}>
                    <Col md={{ span: 24 }} xs={{ span: 24 }}>
                      <AntForm.Item
                        help={
                          touched.firstName && errors.firstName ? errors.firstName.toString() : ""
                        }
                        validateStatus={
                          touched.firstName && errors.firstName ? "error" : "success"
                        }>
                        <Field
                          name="firstName"
                          component={CustomInput}
                          placeholder="First Name"
                          maxLength="100"
                        />
                      </AntForm.Item>
                    </Col>
                  </Row>

                  <Row gutter={[15, 0]}>
                    <Col md={{ span: 24 }} xs={{ span: 24 }}>
                      <AntForm.Item
                        help={touched.lastName && errors.lastName ? errors.lastName.toString() : ""}
                        validateStatus={touched.lastName && errors.lastName ? "error" : "success"}>
                        <Field
                          name="lastName"
                          component={CustomInput}
                          placeholder="Last Name"
                          maxLength="100"
                        />
                      </AntForm.Item>
                    </Col>
                  </Row>

                  <Row gutter={[15, 0]}>
                    <Col md={{ span: 24 }} xs={{ span: 24 }}>
                      <AntForm.Item
                        help={touched.email && errors.email ? errors.email.toString() : ""}
                        validateStatus={touched.email && errors.email ? "error" : "success"}>
                        <Field
                          name="email"
                          component={CustomInput}
                          placeholder="Email"
                          maxLength="100"
                        />
                      </AntForm.Item>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={{ span: 12 }} xs={{ span: 12 }} style={{ paddingRight: "5px" }}>
                      <AntForm.Item
                        required
                        help={
                          touched.consumerUid && errors.consumerUid
                            ? errors.consumerUid.toString()
                            : ""
                        }
                        validateStatus={
                          touched.consumerUid && errors.consumerUid ? "error" : "success"
                        }>
                        {/* <Field
                          name="date"
                          component={CustomDatePicker}
                          placeholder={"Date"}
                          maxLength="32"
                        /> */}
                        {/* <DatePicker onChange={datePickerHandler} /> */}

                        <CustomDatePicker 
                          name="date"
                          onChange={handleChange}
                          value={values.date}
                        />

                      </AntForm.Item>
                    </Col>
                    <Col md={{ span: 12 }} xs={{ span: 12 }} style={{ paddingLeft: "5px" }}>
                      <AntForm.Item
                        required
                        help={
                          touched.consumerUid && errors.consumerUid
                            ? errors.consumerUid.toString()
                            : ""
                        }
                        validateStatus={
                          touched.consumerUid && errors.consumerUid ? "error" : "success"
                        }>
                        {/* <Field
                          name="consumerUidType"
                          component={CustomTimePicker}
                          setFieldValue={setFieldValue}
                          placeholder={"Time"}
                          // defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
                        /> */}
                        {/* <TimePicker
                          onChange={timePickerHandler}
                          defaultValue={moment("00:00:00", "HH:mm:ss")}
                        /> */}

                        <CustomTimePicker 
                          name='time'
                          onChange={handleChange}
                          value={values.time}
                        />

                      </AntForm.Item>
                    </Col>
                    <Col className="total">
                      {values.service !== '' && (<h3>Total: USD {values.service}</h3>)}
                      {/* (<h3>Total: USD {dropdownVal(values).cost}</h3>)} */}
                    </Col>
                  </Row>

                  <Row>
                    <Col span={24}>
                      <AntForm.Item>
                        {/* <CustomButton
                          buttonStyle="btn--primary"
                          otherClasses="btn-pay"
                          htmlType="submit"
                          // onClick={submitHandler}
                        >
                          Pay Now
                        </CustomButton> */}
                        <StripeCheckoutButton serviceAmount={values.service} serviceEmail={values.email}/>
                      </AntForm.Item>
                    </Col>
                  </Row>
                </Form>
              </div>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
