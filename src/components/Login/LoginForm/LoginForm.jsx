import { Formik, Form, Field, ErrorMessage } from 'formik';
import classes from './LoginForm.module.css';

let LoginForm = (props) => {
  return (
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Необходимо заполнить поле';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Неправильный email';
          } 
          if (!values.password){
            errors.password = 'Необходимо заполнить поле';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          props.toLogin(values)
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          //{[styles.base, styles.clickable, styles.withIcon].join(' ')}
          <Form className={classes.form}>
            <Field className={classes.email} type="email" name="email" placeholder='Введите email' />
            <ErrorMessage className={classes.error} name="email" component="div" />

            <Field className={classes.password} type="password" name="password" placeholder='Введите пароль' />
            <ErrorMessage className={classes.error}  name="password" component="div" />

            <button className={classes.submit} type="submit" disabled={isSubmitting}>
              Войти
            </button>
          </Form>
        )}
      </Formik>
  )
}

export default LoginForm;