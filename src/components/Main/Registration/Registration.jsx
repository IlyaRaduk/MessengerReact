import { Formik, Form, Field, ErrorMessage } from 'formik';
import classes from './Registration.module.css';

let Registration = (props) => {
  return (
    <div className={classes.registration}>
      <h2>Пройдите регистрацию</h2>
      <Formik
        initialValues={{ email: '', password: '', name: '', city: '', country: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Необходимо заполнить поле';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Неправильный email';
          }
          if (!values.password) {
            errors.password = 'Необходимо заполнить поле';
          }
          if (!values.name) {
            errors.name = 'Необходимо заполнить поле';
          }
          if (!values.city) {
            errors.city = 'Необходимо заполнить поле';
          }
          if (!values.country) {
            errors.country = 'Необходимо заполнить поле';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
            props.registrationNewAccount(values)
            setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          //{[styles.base, styles.clickable, styles.withIcon].join(' ')}
          <Form className={classes.form}>
            <Field className={classes.email} type="text" name="name" placeholder='Введите имя' />
            <ErrorMessage className={classes.error} name="name" component="div" />

            <Field className={classes.email} type="text" name="country" placeholder='Введите страну' />
            <ErrorMessage className={classes.error} name="country" component="div" />

            <Field className={classes.email} type="text" name="city" placeholder='Введите город' />
            <ErrorMessage className={classes.error} name="city" component="div" />

            <Field className={classes.email} type="email" name="email"  placeholder='Введите email' />
            <ErrorMessage className={classes.error} name="email" component="div" />

            <Field className={classes.password} type="password" name="password" placeholder='Введите пароль' />
            <ErrorMessage className={classes.error} name="password" component="div" />

            <button className={classes.submit} type="submit" disabled={isSubmitting}>
              Зарегистрироваться
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Registration;