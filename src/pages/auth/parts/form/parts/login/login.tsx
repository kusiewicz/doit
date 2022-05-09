// import { Divider } from 'antd';
import { Divider } from 'antd';
import { useFormik } from 'formik';
import { useState } from 'react';
import { FormField } from '../form-field/form-field';
import { Link } from '../link/link';
import { Submit } from '../submit-button/submit-button';
import S from './login.styles';

export const Login = () => {
  const [keepLogged, setKeepLogged] = useState(false);

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
      <S.KeepLogged onClick={() => setKeepLogged((v) => !v)}>
        <S.Checkbox type="checkbox" checked={keepLogged} />
        <S.Text>Keep me logged in</S.Text>
      </S.KeepLogged>
      <Link color="Grey">Forgot your password?</Link>
      <Divider />
      <S.Footer>
        <S.Text>Don't have an account?</S.Text>
        <Link color="Red">Sign up</Link>
      </S.Footer>
    </form>
  );
};
