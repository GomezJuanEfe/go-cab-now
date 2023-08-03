import { useState } from 'react';

const useForm = (formId) => {
  const [form, setForm] = useState({ id: formId });

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
    console.log(formUpdated);
  };

  return { form, handleForm };
};

export default useForm;
