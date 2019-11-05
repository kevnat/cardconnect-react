import React, { Component } from "react";
import API from '../../utils/API';
import { 
    Formik, 
    Field, 
    ErrorMessage
  } 
    from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col } from 'reactstrap';


export default class VoidForm extends Component {
render() {
    return (
        <div>
        <Formik>
          initialValues={{ retref: '303959381743' }}
            onSubmit={(values, { setSubmitting }) => {
              API.runVoid(values)
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
              retref: Yup.string()
                .required('Enter retref')
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
                      <Col>
                      <form onSubmit={handleSubmit}>
                      <label htmlFor="retref" style={{ display: 'float' }}>
                        retref:
                      </label>
                      <Field
                        id="retref"
                        placeholder="303959381743"
                        type="text"
                        value={values.retref}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.retref && touched.retref ? 'text-input error' : 'text-input'
                        }
                      />
                      <button
                        type="button"
                        className="outline"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                      >
                        Reset
                      </button>
                      </form>
                      </Col>
                    </Row>
                    );
              }}
          </Formik>
        </div>
    );
    }
  }


/*
 export default function CreditCardForm() {
    const [values, setValues] = React.useState({
      name: "",
      number: "",
      expiration: "",
      cvc: ""
    });
    const handleChange = React.useCallback(
      event => {
        const { name, value } = event.target;
        setValues(v => ({ ...v, [name]: value }));
      },
      [setValues]
    );

    const [focused, setFocus] = React.useState<FOCUS_TYPE | undefined>(undefined);
    const handleFocus = React.useCallback(
      event => setFocus(event.target.name as FOCUS_TYPE),
      [setFocus]
    );
    const handleBlur = React.useCallback(() => setFocus(undefined), [setFocus]);
    */