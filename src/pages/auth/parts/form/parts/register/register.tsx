import { Divider } from 'antd';
import { useFormik } from 'formik';
import { FormField } from '../form-field/form-field';
import { Link } from '../link/link';
import { Submit } from '../submit-button/submit-button';
import S from './register.styles';

export const Register = () => {
  const { getFieldProps, values } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmedPassword: '',
    },
    onSubmit: (v) => {
      console.log(v);
    },
  });

  return (
    <form>
      <FormField
        label="Name"
        inputProps={getFieldProps('name')}
        onBlur={() => console.log(values)}
        type="email"
      />
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
      <FormField
        label="Confirm Password"
        inputProps={getFieldProps('confirmedPassword')}
        onBlur={() => console.log(values)}
        type="password"
      />
      <Submit title="Sign up" />
      <Divider />
      <S.Footer>
        <S.Text>Already signed up?</S.Text>
        <Link color="Red">Go to login</Link>
      </S.Footer>
    </form>
  );
};
