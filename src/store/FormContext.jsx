import { createContext, useState } from 'react';
import useForm from '../hooks/useForm';

export const FormContext = createContext();

export const FromProvider = ({ children }) => {
  const { form: tripForm, handleForm: handleTripForm, resetForm: resetTripForm } = useForm({
    pickUpLoc: '',
    dropOffLoc: '',
    pickUpDate: '',
  });

  const [contactForm, setContactForm] = useState({
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

  const { form: createNewCar, handleForm: handleCreateNewCar, resetForm: resetCreateCar } = useForm({
    carName: '',
    type: '',
    seats: '',
    img: '',
    luggage: '',
    air_conditioner: '',
    transmition: '',
    fare_km: '',
    driver_id: '',
  });

  return (
    <FormContext.Provider
      value={{
        tripForm,
        handleTripForm,
        resetTripForm,
        handleContactForm,
        loginForm,
        handleLoginForm,
        resetLoginForm,
        signInForm,
        handleSignInForm,
        createNewCar,
        handleCreateNewCar,
        resetCreateCar,
        resetSignInForm,
        contactForm,
        setContactForm
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
