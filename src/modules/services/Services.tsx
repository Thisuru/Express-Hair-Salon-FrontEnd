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
import moment from "moment";
import { CustomButton } from "../../components/CustomButton";
import axios from "axios";
import { useState } from "react";
import HTTPClient from "../../utils/HTTPClient";

export default function Services() {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<any>(null);
  const [selectedTime, setSelectedTime] = useState<any>(null);

  const submitHandler = async (data: any) => {

  //  const test = await HTTPClient.Post('http://localhost:5000/booking', {
  //     price: selectedService?.cost,
  //     service: selectedService?.label
  //   })
  
    axios.post('http://localhost:5000/booking', { 
      price: selectedService?.cost,
      service: selectedService?.label
    })
     .then((res) => {
        if(res.data.url){
          window.open( res.data.url, '_blank');
        }
     })
     .catch((err) => console.log(err));
  };

  const validationSchema = Yup.object({
    service: Yup.string().required("Required"),

    firstName: Yup.string().required("Required").max(32, "Maximum length exceed"),

    lastName: Yup.string().required("Required").max(32, "Maximum length exceed"),

    email: Yup.string().required("Required").max(32, "Maximum length exceed")
  });

  const serviceChangeHandler = (data: any, setFieldValue: any) => {
    console.log(
      "🚀 ~ Service Selected : ",
      data
    );
    setSelectedService(data);
    setFieldValue("service", data?.value);
  };

  const datePickerHandler: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
    setSelectedDate(dateString);
  };

  const timePickerHandler = (time: any, timeString: string) => {
    console.log(time, timeString);
    setSelectedTime(timeString);
  };


  return (
    <div className="salonServices">
      <div className="form-container">
        <Formik
          enableReinitialize={true}
          // initialValues={registerInfo?.data}
          // validationSchema={validationSchema}
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
            console.log("🚀 ~ file: Services.tsx ~ line 15 ~ Services ~ values", values);
            const dataDto = {
              ...values,
              selectedDate: selectedDate,
              selectedTime: selectedTime,
            };
            console.log(
              "🚀 ~ All Form Value Obj: ",
              dataDto
            );

            console.log("Email Vital: ", dataDto.email);
            

            submitHandler(dataDto);
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
                        <Field
                          name="service"
                          component={CustomSelect}
                          value={selectedService}
                          setFieldValue={setFieldValue}
                          serviceChangeHandler={(data: any) =>
                            serviceChangeHandler(data, setFieldValue)
                          }
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
                        // label={
                        //   "Label"
                        // }
                        // hasFeedback={!!touched?.nic && !!errors?.nic}
                        required
                        // help={touched?.nic && errors?.nic ? errors.nic : ''}
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
                        <DatePicker onChange={datePickerHandler} />
                      </AntForm.Item>
                    </Col>
                    <Col md={{ span: 12 }} xs={{ span: 12 }} style={{ paddingLeft: "5px" }}>
                      <AntForm.Item
                        // label={
                        //   "Label"
                        // }
                        // hasFeedback={!!touched?.nic && !!errors?.nic}
                        required
                        // help={touched?.nic && errors?.nic ? errors.nic : ''}
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
                        <TimePicker
                          onChange={timePickerHandler}
                          defaultValue={moment("00:00:00", "HH:mm:ss")}
                        />
                      </AntForm.Item>
                    </Col>
                    <Col className="total">
                      {selectedService && 
                      (<h3>Total: USD {selectedService?.cost}</h3>)}
                    </Col>
                  </Row>

                  <Row>
                    <Col span={24}>
                      <AntForm.Item>
                        <CustomButton
                          buttonStyle="btn--primary"
                          otherClasses="btn-pay"
                          htmlType="submit"
                          // onClick={submitHandler}
                        >
                          Pay Now
                        </CustomButton>
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
