import { Divider, Alert } from 'antd';
import { useFormik } from 'formik';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { FormField } from '../form-field/form-field';
import { Link } from '../link/link';
import { Submit } from '../submit-button/submit-button';
import S from './login.styles';
import { auth as initAuth } from '@lib/firebase/firebase';
import { Auth, signInWithEmailAndPassword, AuthError } from 'firebase/auth';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useMutation } from 'react-query';
import { LoadingPage } from '@pages/loading/loading-page';
import * as Yup from 'yup';
import { getReadableAuthError } from '@lib/firebase/get-readable-auth-error';
import { AuthSite } from '@pages/auth/auth-page';

export const Login = () => {
  const navigate = useNavigate();
  const [keepLogged, setKeepLogged] = useState(false);
  const [error, setError] = useState<AuthError | null>(null);
  const setPage: Dispatch<SetStateAction<AuthSite.SIGNUP | AuthSite.LOGIN | undefined>> =
    useOutletContext();

  useEffect(() => {
    setPage(AuthSite.LOGIN);
  }, [setPage]);

  const signIn = async ({
    auth,
    email,
    password,
  }: {
    auth: Auth;
    email: string;
    password: string;
  }) => {
    setError(null);
    return signInWithEmailAndPassword(auth, email, password)
      .then(() => navigate('/app/today'))
      .catch((err) => setError(err));
  };

  const { mutate, isLoading } = useMutation(signIn);

  const { getFieldProps, values, errors, touched, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnBlur: true,
    validationSchema: Yup.object({
      email: Yup.string().trim().required('Please enter a valid email address.'),
      password: Yup.string()
        .trim()
        .min(6, 'Use at least 6 characters.')
        .max(50, 'Use up to 50 characters')
        .required('Field is required'),
    }),
    onSubmit: () => {
      mutate({ auth: initAuth, email: values.email, password: values.password });
    },
  });

  if (isLoading && !error) {
    return <LoadingPage />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormField
        label="Email"
        inputProps={getFieldProps('email')}
        touched={touched.email}
        error={errors.email}
        type="email"
      />
      <FormField
        label="Password"
        inputProps={getFieldProps('password')}
        type="password"
        touched={touched.password}
        error={errors.password}
      />
      {error && <Alert message={getReadableAuthError(error?.code)} type="error" />}
      <Submit>Log in</Submit>
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
