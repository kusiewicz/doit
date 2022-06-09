import { Divider } from 'antd';
import { useFormik } from 'formik';
import { FormField } from '../form-field/form-field';
import { Link } from '../link/link';
import { Submit } from '../submit-button/submit-button';
import S from './register.styles';
import { getAuth, createUserWithEmailAndPassword, Auth } from 'firebase/auth';
import { useMutation } from 'react-query';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const initAuth = getAuth();

export const Register = () => {
  const navigate = useNavigate();

  const signIn = async ({
    auth,
    email,
    password,
  }: {
    auth: Auth;
    email: string;
    password: string;
  }) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const { mutate } = useMutation(signIn, {
    onSuccess: () => {
      navigate('/app/today');
    },
  });

  const { getFieldProps, values, submitForm, errors, touched, handleBlur } = useFormik({
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
        .min(6, 'Use at least 5 characters.')
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

  return (
    <form>
      <FormField
        label="Name"
        touched={touched.name}
        inputProps={getFieldProps('name')}
        error={errors.name}
        onBlur={handleBlur}
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
      <Submit title="Sign up" onClick={() => submitForm()} />
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
