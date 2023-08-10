import { createContext } from 'react';
import useForm from '../hooks/useForm';

export const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
  const { form: debitCardForm, handleForm: handleDebitCardForm } = useForm({
    nameOnCard: '',
    cardNumber: '',
    month: '',
    year: '',
    cvv: '',
  });
  const { form: creditCardForm, handleForm: handleCreditCardForm } = useForm({
    nameCard: '',
    cardNumberCredit: '',
    monthCredit: '',
    yearCredit: '',
    cvvCredit: '',
  });
  const { form: selectBankForm, handleForm: handleSelectBankForm } = useForm({
    selectedBank: '',
    selectedWallet: '',
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
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};
