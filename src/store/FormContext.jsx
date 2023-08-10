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

  return (
    <FormContext.Provider
      value={{
        tripForm,
        handleTripForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
