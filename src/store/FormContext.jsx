import { createContext } from 'react';
import useForm from '../hooks/useForm';

export const FormContext = createContext();

export const FromProvider = ({ children }) => {
  const { form: tripForm, handleForm: handleTripForm } = useForm({
    pickUpLoc: '',
    dropOffLoc: '',
    pickUpDate: '',
    dropOffDate: '',
  });

  const { form: contactForm, handleForm: handleContactForm } = useForm({
    firstName: '',
    lastName: '',
    emailAddress: '',
    contactPhone: '',
    specialRequest: '',
    promoCode: '',
  });

  const { form: loginForm, handleForm: handleLoginForm, resetForm } = useForm({
    email: '',
    password: '',
  });
  console.log(loginForm);

  const { form: signInForm, handleForm: handleSignInForm } = useForm({
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
  });

  return (
    <FormContext.Provider
      value={{
        tripForm,
        handleTripForm,
        contactForm,
        handleContactForm,
        loginForm,
        handleLoginForm,
        resetForm,
        signInForm,
        handleSignInForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
