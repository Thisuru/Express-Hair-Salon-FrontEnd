import "../../App.css";
import { Form, Field, Formik } from "formik";
import { Col, Row, Form as AntForm } from "antd";
import {
  CustomDatePicker,
  CustomInput,
  CustomSelect,
  CustomTimePicker
} from "../../components/makeFields/CustomFormFeilds";
import * as Yup from "yup";
import moment from "moment";
import { Button } from "../../components/Button";
import axios from "axios";

export default function Services() {

  const submitHandler = () => {
    axios.post('http://localhost:5000/booking')
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

  return (
    <div className="salonServices">
      <div className="form-container">
        <Formik
          enableReinitialize={true}
          // initialValues={registerInfo?.data}
          // validationSchema={validationSchema}
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            date: '',
            consumerUidType: ''
          }}
          validationSchema={validationSchema}
          onSubmit={(values: any, props) => {
            console.log("🚀 ~ file: Services.tsx ~ line 15 ~ Services ~ values", values);
          }}>
          {({ errors, touched, values, handleChange, handleBlur, handleSubmit, setFieldValue }) => {
            return (
              <div className="booking-form">
                <h3>Booking details</h3>
                <Form action="/booking" method="POST" onSubmit={handleSubmit}>
                  <Row>
                    <Col md={{ span: 24 }} xs={{ span: 24 }}>
                      <AntForm.Item
                        help={touched.service && errors.service ? errors.service.toString() : ""}
                        validateStatus={touched.service && errors.service ? "error" : "success"}>
                        <Field
                          name="service"
                          component={CustomSelect}
                          setFieldValue={setFieldValue}
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
                        <Field
                          name="date"
                          component={CustomDatePicker}
                          placeholder={"Date"}
                          maxLength="32"
                        />
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
                        <Field
                          name="consumerUidType"
                          component={CustomTimePicker}
                          setFieldValue={setFieldValue}
                          placeholder={"Time"}
                          // defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
                        />
                      </AntForm.Item>
                    </Col>
                    <Col className="total">
                      <h3>Total: USD 25.00</h3>
                    </Col>
                  </Row>

                  <Row>
                    <Col span={24}>
                      <AntForm.Item>
                        <Button
                          buttonStyle="btn--primary"
                          otherClasses="btn-pay"
                          htmlType="submit"
                          onClick={submitHandler}
                        >
                          Pay Now
                        </Button>
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
