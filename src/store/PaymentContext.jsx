import { createContext } from 'react';
import useForm from '../hooks/useForm';

export const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {

  const { form: debitCardForm, handleForm: handleDebitCardForm, overrideForm: overrideDebitForm } = useForm({
    nameOnCard: '',
    cardNumber: '',
    month: '',
    year: '',
    cvv: '',
  });
  const { form: creditCardForm, handleForm: handleCreditCardForm, overrideForm: overrideCreditForm } = useForm({
    nameCard: '',
    cardNumberCredit: '',
    monthCredit: '',
    yearCredit: '',
    cvvCredit: '',
  });
  const { form: selectBankForm, handleForm: handleSelectBankForm } = useForm({
    selectedBank: '',
  });

  return (
    <PaymentContext.Provider
      value={{
        debitCardForm,
        handleDebitCardForm,
        creditCardForm,
        handleCreditCardForm,
        selectBankForm,
        handleSelectBankForm,
        overrideDebitForm,
        overrideCreditForm,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};
