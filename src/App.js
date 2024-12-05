import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegistrationForm = () => {
 
  const validationSchema = Yup.object({
    username: Yup.string().required("Ім'я користувача обов'язкове"),
    email: Yup.string()
      .email("Некоректна електронна пошта")
      .required("Електронна пошта обов'язкова"),
    password: Yup.string()
      .min(6, "Пароль має містити щонайменше 6 символів")
      .required("Пароль обов'язковий"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Паролі повинні співпадати")
      .required("Підтвердження пароля обов'язкове"),
  });

  const handleSubmit = (values) => {
    console.log("Дані форми:", values);
    alert("Форма успішно надіслана!");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Реєстрація</h2>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="username">Ім'я користувача</label>
              <Field
                type="text"
                id="username"
                name="username"
                className="input-field"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="error-message"
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="email">Електронна пошта</label>
              <Field
                type="email"
                id="email"
                name="email"
                className="input-field"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="password">Пароль</label>
              <Field
                type="password"
                id="password"
                name="password"
                className="input-field"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="confirmPassword">Підтвердження пароля</label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="input-field"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="error-message"
              />
            </div>

            <button type="submit" style={{ padding: "10px 20px" }}>
              Зареєструватися
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
