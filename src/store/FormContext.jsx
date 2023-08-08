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

  const { form: debitCardForm, handleForm: handleDebitCardForm } = useForm({
    nameOnCard: '',
    cardNumber: '',
    month: '',
    year: '',
    cvv: '',
  });
  const { form: creditCardForm, handleForm: handleCreditCardForm } = useForm({
    nameOnCard: '',
    cardNumber: '',
    month: '',
    year: '',
    cvv: '',
  });
  const { form: selectForm, handleForm: handleSelectForm } = useForm({
    industrial: '',
  });

  return (
    <FormContext.Provider
      value={{
        tripForm,
        handleTripForm,
        debitCardForm,
        handleDebitCardForm,
        creditCardForm,
        handleCreditCardForm,
        selectForm,
        handleSelectForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
