import { Alert, Divider } from 'antd';
import { useFormik } from 'formik';
import { FormField } from '../form-field/form-field';
import { Link } from '../link/link';
import { Submit } from '../submit-button/submit-button';
import S from './register.styles';
import { Auth, AuthError, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import * as Yup from 'yup';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { LoadingPage } from '@pages/loading/loading-page';
import { auth as initAuth } from '@lib/firebase/firebase';
import { useRef, useState, Dispatch, SetStateAction, useEffect } from 'react';
import { useMutation } from 'react-query';
import { getReadableAuthError } from '@lib/firebase/get-readable-auth-error';
import { AuthSite } from '@pages/auth/auth-page';

export const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<AuthError | null>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const username = nameRef.current?.value;
  const setPage: Dispatch<SetStateAction<AuthSite.SIGNUP | AuthSite.LOGIN | undefined>> =
    useOutletContext();

  useEffect(() => {
    setPage(AuthSite.SIGNUP);
  }, [setPage]);

  const signUp = async ({
    auth,
    email,
    password,
  }: {
    auth: Auth;
    email: string;
    password: string;
  }) => {
    setError(null);
    return createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        if (initAuth.currentUser) {
          updateProfile(initAuth.currentUser, {
            displayName: username,
          }).then(() => navigate('/app/today'));
        }
      })
      .catch((err) => setError(err));
  };

  const { mutate, isLoading } = useMutation(signUp);

  const { getFieldProps, values, handleSubmit, errors, touched, handleBlur } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validateOnBlur: true,
    validationSchema: Yup.object({
      name: Yup.string()
        .trim()
        .min(5, 'Use at least 5 characters.')
        .max(12, 'Use up to 12 characters.')
        .required('Field is required'),
      email: Yup.string().trim().required('Please enter a valid email address.'),
      password: Yup.string()
        .trim()
        .min(6, 'Use at least 6 characters.')
        .max(50, 'Use up to 50 characters')
        .required('Field is required')
        .matches(/^(?=.*\d)[a-zA-Z\d*.!@$%^&(){}[\]:;<>,.?/~_+\-/=|\\]{6,}/),
      confirmPassword: Yup.string()
        .required('Field is required')
        .when('password', {
          is: (val: string | undefined) => val && val.length > 0,
          then: Yup.string().oneOf([Yup.ref('password')], 'Both passwords must match.'),
        }),
    }),
    onSubmit: () => {
      mutate({ auth: initAuth, email: values.email, password: values.password });
    },
  });

  console.log(error);

  if (isLoading && !error) {
    return <LoadingPage />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormField
        label="Name"
        touched={touched.name}
        inputProps={getFieldProps('name')}
        error={errors.name}
        onBlur={handleBlur}
        inputRef={nameRef}
      />
      <FormField
        label="Email"
        inputProps={getFieldProps('email')}
        type="email"
        error={errors.email}
        touched={touched.email}
        onBlur={handleBlur}
      />
      <FormField
        label="Password"
        inputProps={getFieldProps('password')}
        type="password"
        error={errors.password}
        touched={touched.password}
        onBlur={handleBlur}
      />
      <FormField
        label="Confirm Password"
        inputProps={getFieldProps('confirmPassword')}
        type="password"
        error={errors.confirmPassword}
        touched={touched.confirmPassword}
        onBlur={handleBlur}
      />
      {error && <Alert message={getReadableAuthError(error?.code)} type="error" />}
      <Submit>Sign Up</Submit>
      <Divider />
      <S.Footer>
        <S.Text>Already signed up?</S.Text>
        <Link to="/auth/login" color="Red">
          Go to login
        </Link>
      </S.Footer>
    </form>
  );
};
