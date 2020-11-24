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
            initialValues=
          {
              { 
              gwmerchid: '456456456456', 
              gwsite: 'fts', 
              gwkey: 'dGVzdGluZzp0ZXN0aW5nMTIz', 
              boltmerchid: '496160873888', 
              bolthsn: '17350SC81400547', 
              boltkey: 'oD70nAoHqiIKJVSwu/9A8RrkjPsg65weh8pN8M1y4pA=' 
            }
          }
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
              gwmerchid: Yup.string()
                .required('enter gateway merchant id!'),
              gwsite: Yup.string()
                .required('gateway site'),
              gwkey: Yup.string()
                .required('gateway key'),
              boltmerchid: Yup.string()
                .required('bolt merchant id'),
              bolthsn: Yup.string()
                .required('bolt hsn'),
              boltkey: Yup.string()
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

                      <label htmlFor="gwmerchid" style={{ display: 'float' }}>
                        gw merchid:  
                      </label>
                      <Field
                        id="gwmerchid"
                        placeholder="496160873888"
                        type="text"
                        value={values.gwmerchid}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.gwmerchid && touched.gwmerchid ? 'text-input error' : 'text-input'
                        }
                      />
                      <ErrorMessage name="gwmerchid" />
                      <br />

                      <label htmlFor="gwsite" style={{ display: 'float' }}>
                        gw site:
                </label>
                      <Field
                        id="gwsite"
                        placeholder="fts"
                        type="text"
                        value={values.gwsite}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.gwsite && touched.gwsite ? 'text-input error' : 'text-input'
                        }
                      />
                      <ErrorMessage name="gwsite" />

                      <br />
                      <label htmlFor="gwkey" style={{ display: 'float' }}>
                        gw key:
                </label>
                      <Field
                        id="gwkey"
                        placeholder="dGVzdGluZzp0ZXN0aW5nMTIz"
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