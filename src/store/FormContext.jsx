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

  const { form: loginForm, handleForm: handleLoginForm, resetForm: resetLoginForm } = useForm({
    email: '',
    password: '',
  });

  const { form: signInForm, handleForm: handleSignInForm, resetForm: resetSignInForm } = useForm({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });

  const { form: createNewCar, handleForm: handleCreateNewCar } = useForm({
    carName: '',
    uploadImgCar: '',
    capacity: '',
    fareKm: '',
    carType: '',
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
        resetLoginForm,
        signInForm,
        handleSignInForm,
        createNewCar,
        handleCreateNewCar,
        resetSignInForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
