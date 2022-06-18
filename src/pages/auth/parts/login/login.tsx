import { Divider } from 'antd';
import { useFormik } from 'formik';
import { useState } from 'react';
import { FormField } from '../form-field/form-field';
import { Link } from '../link/link';
import { Submit } from '../submit-button/submit-button';
import S from './login.styles';
import { auth } from '@lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [keepLogged, setKeepLogged] = useState(false);

  const navigate = useNavigate();

  const { getFieldProps, values, submitForm } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: () => {
      console.log('chuj');
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then(() => {
          navigate('/app/today');
        })
        .catch(() => {
          return;
        });
    },
  });

  return (
    <form>
      <FormField label="Email" inputProps={getFieldProps('email')} type="email" />
      <FormField label="Password" inputProps={getFieldProps('password')} type="password" />
      <Submit onClick={submitForm}>Log in</Submit>
      <S.KeepLogged onClick={() => setKeepLogged((v) => !v)}>
        <S.Checkbox type="checkbox" checked={keepLogged} />
        <S.Text>Keep me logged in</S.Text>
      </S.KeepLogged>
      <Link to="" color="Grey">
        Forgot your password?
      </Link>
      <Divider />
      <S.Footer>
        <S.Text>Don't have an account?</S.Text>
        <Link to="/auth/register" color="Red">
          Sign up
        </Link>
      </S.Footer>
    </form>
  );
};
