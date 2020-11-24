import React, {Component} from "react";
import API from '../../utils/API';
import { DisplayFormikState } from "../payFormTwo/helper";
import { DisplayResponse } from "../payFormTwo/helper2";
import {
    Container,
    Col,
    Row,
    FormGroup,
    Label,
    Input, 
    Button
  } from "reactstrap";
  import { 
    Formik, 
    Field, 
    ErrorMessage, 
    //getIn 
  } 
    from 'formik';
  // import Panel from '../panel';
  import * as Yup from 'yup';

  export default class ConfigForm extends Component {
    render() {
      return (
        <div>
          <Container>
          <Formik
            initialValues={{ merchid: '496160873888', site: 'fts', gwkey: 'blag', boltmerchid: '496160873888', bolthsn: 'fts', boltkey: 'blag' }}
            onSubmit={(values, { setSubmitting }) => {
              API.setConfig(values)
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
              merchid: Yup.string()
                .required('gateway merchant id'),
              site: Yup.string()
                .required('gateway site'),
              gwkey: Yup.string()
                .email()
                .required('gateway key'),
              boltmerchid: Yup.string()
                .min(15)
                .max(16)
                .required('bolt merchant id'),
              bolthsn: Yup.string()
                .length(4)
                .required('bolt hsn'),
              boltkey: Yup.string()
                .min(3)
                .max(4)
                .required('bolt key')
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
                handleReset
              } = props;
              return (
                <Row>
                  
                  <Col md={{ size: 4, order: 1 }}>
                    <h5>Input Form</h5>
                    {/* <br></br> */}
                    {/* <PaymentInputs/> */}
                    <form onSubmit={handleSubmit}>
                    
                      {/* <Field component="select" name="Month">
                  <option value="January">Red</option>
                  <option value="February">Green</option>
                  <option value="blue">Blue</option>
                </Field> */}
                <br />
                {/* <br /> */}
                <h6><strong> Gateway Configuration</strong></h6>

                      <label htmlFor="merchid" style={{ display: 'float' }}>
                        gw merchid:  
                      </label>
                      <Field
                        id="merchid"
                        placeholder="99.99"
                        type="text"
                        value={values.merchid}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.merchid && touched.merchid ? 'text-input error' : 'text-input'
                        }
                      />
                      <ErrorMessage name="merchid" />
                      <br />

                      <label htmlFor="site" style={{ display: 'float' }}>
                        gw site:
                </label>
                      <Field
                        id="site"
                        placeholder="Enter your site"
                        type="text"
                        value={values.site}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.site && touched.site ? 'text-input error' : 'text-input'
                        }
                      />
                      <ErrorMessage name="site" />

                      <br />
                      <label htmlFor="gwkey" style={{ display: 'float' }}>
                        gw key:
                </label>
                      <Field
                        id="gwkey"
                        placeholder="First and Last Name"
                        type="text"
                        value={values.gwkey}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.gwkey && touched.gwkey ? 'text-input error' : 'text-input'
                        }
                      />
                      <ErrorMessage name="gwkey" />
                      <br />
              <h6><strong> Bolt Configuration</strong></h6>

                      <label htmlFor="boltmerchid" style={{ display: 'float' }}>
                        bolt merchid:
                </label>
                      <Field
                        id="boltmerchid"
                        placeholder="4444333322221111"
                        type="text"
                        value={values.boltmerchid}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.boltmerchid && touched.boltmerchid ? 'text-input error' : 'text-input'
                        }
                      />
                      <ErrorMessage name="boltmerchid" />
                      <br />
                      <label htmlFor="bolthsn" style={{ display: 'float' }}>
                        bolt hsn:
                </label>
                      <Field
                        id="bolthsn"
                        placeholder="184009SC4290"
                        type="text"
                        value={values.bolthsn}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.bolthsn && touched.bolthsn ? 'text-input error' : 'text-input'
                        }
                      />
                      <ErrorMessage name="bolthsn" />
                      <br />
                <label htmlFor="boltkey" style={{ display: 'float' }}>
                        bolt key:
                </label>
                      <Field
                        id="boltkey"
                        placeholder="123"
                        type="text"
                        value={values.boltkey}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.boltkey && touched.boltkey ? 'text-input error' : 'text-input'
                        }
                      />
                      <ErrorMessage name="boltkey" />
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
                  <Col md={{ size: 4, order: 2 }}>
                  <h5>Form State</h5>
                    <DisplayFormikState {...props} />
                  </Col>
                  <Col md={{ size: 4, order: 3 }}>
                    <h5>Auth Response</h5>
                    <DisplayResponse
                      setupResp={(this.state)}
                    />
                </Col>
                <Col md={{ size: 4, order: 4 }}>
                    
                </Col>
                <Col md={{ size: 4, order: 5 }}>
                    
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