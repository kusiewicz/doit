import { FieldInputProps } from 'formik';
import { HTMLInputTypeAttribute } from 'react';
import S from './form-field.styles';

export const FormField = ({
  label,
  inputProps,
  name,
  onBlur,
  type,
  error,
  touched,
}: {
  label: string;
  inputProps?: FieldInputProps<string>;
  name?: string;
  onBlur?: React.FocusEventHandler;
  type?: HTMLInputTypeAttribute;
  error?: string;
  touched?: boolean;
}) => {
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input id={name} {...inputProps} onBlur={onBlur} type={type} />
      {error && touched && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
};
