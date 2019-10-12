import React from 'react';
import { Formik, Field } from 'formik';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';


export default function PaymentInputs() {
    const {
      meta,
      wrapperProps,
      getCardImageProps,
      getCardNumberProps,
      getExpiryDateProps,
      getCVCProps
    } = usePaymentInputs();
  
    // return (
    //   <PaymentInputsWrapper {...wrapperProps}>
    //     <svg {...getCardImageProps({ images })} />
    //     <input {...getCardNumberProps()} />
    //     <input {...getExpiryDateProps()} />
    //     <input {...getCVCProps()} />
    //   </PaymentInputsWrapper>
    // );
    return (
        <Formik
          initialValues={{
            cardNumber: '',
            expiryDate: '',
            cvc: ''
          }}
          onSubmit={data => 
            console.log(data)}
          validate={() => {
            let errors = {};
            if (meta.erroredInputs.cardNumber) {
              errors.cardNumber = meta.erroredInputs.cardNumber;
            }
            if (meta.erroredInputs.expiryDate) {
              errors.expiryDate = meta.erroredInputs.expiryDate;
            }
            if (meta.erroredInputs.cvc) {
              errors.cvc = meta.erroredInputs.cvc;
            }
            return errors;
          }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <PaymentInputsWrapper {...wrapperProps}>
                  <svg {...getCardImageProps({ images })} />
                  <Field name="cardNumber">
                    {({ field }) => (
                      <input {...getCardNumberProps({ onBlur: field.onBlur, onChange: field.onChange })} />
                    )}
                  </Field>
                  <Field name="expiryDate">
                    {({ field }) => (
                      <input {...getExpiryDateProps({ onBlur: field.onBlur, onChange: field.onChange })} />
                    )}
                  </Field>
                  <Field name="cvc">
                    {({ field }) => <input {...getCVCProps({ onBlur: field.onBlur, onChange: field.onChange })} />}
                  </Field>
                </PaymentInputsWrapper>
              </div>
              <br/>
                <button type="submit">
                Submit
                </button>
            </form>
          )}
        </Formik>
      );
  }