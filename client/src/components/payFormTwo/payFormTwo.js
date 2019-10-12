import React, { Component } from "react";
import { DisplayFormikState } from "./helper";
import { DisplayResponse } from "./helper2";
import { 
  Formik, 
  Field, 
  ErrorMessage, 
  //getIn 
} 
  from 'formik';
// import Panel from '../panel';
import * as Yup from 'yup';
import API from '../../utils/API';
import { Container, Row, Col } from 'reactstrap';
import Tokenizer from "../../components/tokenizer";
import PaymentInputs from "../../components/paymentInputs";


export default class PayFormTwo extends Component {
  render() {
    return (
      <div>
        <Container>
          <Formik
            initialValues={{ amount: '1.00', name: 'kevin', email: 'k@n.com', account: '4444333322221111', expiry: '0823', cvv: '123', postal: '55555' }}
            onSubmit={(values, { setSubmitting }) => {
              API.runAuth(values)
                .then(result => {
                  // setState(state: any, callback?: () => void): void
                  this.setState(
                    {
                      lastRes: result.data
                    },
                    () => {
                      console.log(this.state);
                      console.log("in callback")
                    }
                  )
                })
                .catch(error => {
                  console.log(error);
                  throw error;
                })
              setTimeout(() => {
                // alert("Click ok to confirm details.\n" + JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 200);
            }}
            validationSchema={Yup.object().shape({
              amount: Yup.string()
                .required('Enter dollar amount'),
              name: Yup.string()
                .required('Name is Required'),
              email: Yup.string()
                .email()
                .required('Email is Required'),
              account: Yup.string()
                .min(15)
                .max(16)
                .required('Enter Credit Card Number'),
              expiry: Yup.string()
                .length(4)
                .required('Enter Expiration Date MMYY'),
              cvv: Yup.string()
                .min(3)
                .max(4)
                .required('Enter CVV'),
              postal: Yup.string()
                .length(5)
                .required('Enter Zip Code')
            })}
          >
            {props => {
              const {
                values,
                touched,
                errors,
                dirty,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
                handleReset,
              } = props;
              return (
                <Row>
                  
                  <Col md={{ size: 6, order: 1 }}>
                    <h5>Input Form</h5>
                    <br></br>
                    <PaymentInputs

                    />
                    <form onSubmit={handleSubmit}>
                    
                      {/* <Field component="select" name="Month">
                  <option value="January">Red</option>
                  <option value="February">Green</option>
                  <option value="blue">Blue</option>
                </Field> */}
                <br />
                <br />
                      <label htmlFor="amount" style={{ display: 'float' }}>
                        Amount:  
                      </label>
                      <Field
                        id="amount"
                        placeholder="99.99"
                        type="text"
                        value={values.amount}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.amount && touched.amount ? 'text-input error' : 'text-input'
                        }
                      />
                      <ErrorMessage name="amount" />
                      <br />

                      <label htmlFor="email" style={{ display: 'float' }}>
                        Email:
                </label>
                      <Field
                        id="email"
                        placeholder="Enter your email"
                        type="text"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.email && touched.email ? 'text-input error' : 'text-input'
                        }
                      />
                      <ErrorMessage name="email" />

                      <br />
                      <label htmlFor="name" style={{ display: 'float' }}>
                        Name:
                </label>
                      <Field
                        id="name"
                        placeholder="First and Last Name"
                        type="text"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.name && touched.name ? 'text-input error' : 'text-input'
                        }
                      />
                      <ErrorMessage name="name" />
                      <br />
                      <label htmlFor="account" style={{ display: 'float' }}>
                        Card Number:
                </label>
                      <Field
                        id="account"
                        placeholder="4444333322221111"
                        type="text"
                        value={values.account}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.account && touched.account ? 'text-input error' : 'text-input'
                        }
                      />
                      <ErrorMessage name="account" />
                      <br />
                      <label htmlFor="expiry" style={{ display: 'float' }}>
                        Expiration Date:
                </label>
                      <Field
                        id="expiry"
                        placeholder="MMYY"
                        type="text"
                        value={values.expiry}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.expiry && touched.expiry ? 'text-input error' : 'text-input'
                        }
                      />
                      <ErrorMessage name="expiry" />
                      <br />
                      <label htmlFor="cvv" style={{ display: 'float' }}>
                        CVV:
                </label>
                      <Field
                        id="cvv"
                        placeholder="123"
                        type="text"
                        value={values.cvv}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.cvv && touched.cvv ? 'text-input error' : 'text-input'
                        }
                      />
                      <ErrorMessage name="cvv" />
                      <br />
                      <label htmlFor="postal" style={{ display: 'float' }}>
                        Zip Code:
                </label>
                      <Field
                        id="postal"
                        placeholder="55555"
                        type="text"
                        value={values.postal}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.postal && touched.postal ? 'text-input error' : 'text-input'
                        }
                      />
                      <ErrorMessage name="postal" />
                      <br />
                      <br />
                      <button
                        type="button"
                        className="outline"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                      >
                        Reset
                   </button>
                      <button type="submit" disabled={isSubmitting}>
                        Submit
                </button>
                      {/* <DisplayFormikState {...props} /> */}
                    </form>
                  </Col>
                  <Col md={{ size: 6, order: 2 }}>
                  <h5>Form State</h5>
                    <DisplayFormikState {...props} />
                  </Col>
                  <Col md={{ size: 6, order: 3 }}>
                    <h5>Auth Response</h5>
                    <DisplayResponse
                      authResp={(this.state)}
                    />
                </Col>
                <Col md={{ size: 6, order: 4 }}>

                    <h5>Table</h5>   
                    <Tokenizer />
                    
                </Col>
                </Row>

              );
            }}
          </Formik>
        </Container>
      </div>
    );
  }
}
