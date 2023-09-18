import { createContext, useState } from 'react';
import useForm from '../hooks/useForm';

export const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
  const [discount, setDiscount] = useState(0);
  const {
    form: debitCardForm,
    handleForm: handleDebitCardForm,
    resetForm: resetDebitCardForm,
  } = useForm({
    nameOnCard: '',
    cardNumber: '',
    month: '',
    year: '',
    cvv: '',
  });
  const {
    form: creditCardForm,
    handleForm: handleCreditCardForm,
    resetForm: resetCreditCardForm,
  } = useForm({
    nameCard: '',
    cardNumberCredit: '',
    monthCredit: '',
    yearCredit: '',
    cvvCredit: '',
  });
  const {
    form: selectBankForm,
    handleForm: handleSelectBankForm,
    resetForm: resetBankForm,
  } = useForm({
    selectedBank: '',
  });
  const {
    form: selectWalletForm,
    handleForm: handleSelectWalletForm,
    resetForm: resetWalletForm,
  } = useForm({
    selectedWallet: '',
  });

  const resetGeneralForm = () => {
    resetDebitCardForm();
    resetCreditCardForm();
    resetBankForm();
    resetWalletForm();
  };

  return (
    <PaymentContext.Provider
      value={{
        debitCardForm,
        handleDebitCardForm,
        creditCardForm,
        handleCreditCardForm,
        selectBankForm,
        handleSelectBankForm,
        selectWalletForm,
        handleSelectWalletForm,
        resetGeneralForm,
        discount,
        setDiscount
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};
