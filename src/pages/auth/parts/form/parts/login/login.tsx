import { useFormik } from 'formik';
import { FormField } from '../form-field/form-field';
import { Submit } from '../submit-button/submit-button';

export const Login = () => {
  const { getFieldProps, values } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (v) => {
      console.log(v);
    },
  });

  return (
    <form>
      <FormField
        label="Email"
        inputProps={getFieldProps('email')}
        onBlur={() => console.log(values)}
        type="email"
      />
      <FormField
        label="Password"
        inputProps={getFieldProps('password')}
        onBlur={() => console.log(values)}
        type="password"
      />
      <Submit title="Log in" />
    </form>
  );
};
