import { useState } from 'react';

const useForm = (initialValue) => {
  const [form, setForm] = useState(initialValue);

  const handleForm = (e, isMantine = false, input = '') => {
    let formUpdated;
    if (isMantine) {
      formUpdated = {
        ...form,
        [input]: e,
      };
    } else {
      const { name, value } = e.target;
      formUpdated = {
        ...form,
        [name]: value,
      };
    }
    setForm(formUpdated);
  };
  const overrideForm = (newForm) => {
    setForm(newForm);
  };

  return { form, handleForm, overrideForm };
};

export default useForm;
