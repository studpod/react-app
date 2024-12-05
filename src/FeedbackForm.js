import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const schema = yup.object().shape({
  name: yup.string().required("Ім'я є обов'язковим."),
  email: yup
    .string()
    .email('Введіть коректну електронну адресу.')
    .required("Електронна пошта є обов'язковою."),
  message: yup
    .string()
    .min(10, 'Повідомлення повинно містити щонайменше 10 символів.')
    .required("Повідомлення є обов'язковим."),
});

const FeedbackForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Дані форми:', data);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', fontFamily: 'Arial' }}>
      <h2>Форма зворотного зв'язку</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name">Ім'я:</label>
          <input
            id="name"
            type="text"
            {...register('name')}
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Електронна пошта:</label>
          <input
            id="email"
            type="email"
            {...register('email')}
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="message">Повідомлення:</label>
          <textarea
            id="message"
            {...register('message')}
            style={{ width: '100%', padding: '8px', margin: '5px 0', height: '100px' }}
          />
          {errors.message && <p style={{ color: 'red' }}>{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#FFF', border: 'none', cursor: 'pointer' }}
        >
          Відправити
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
