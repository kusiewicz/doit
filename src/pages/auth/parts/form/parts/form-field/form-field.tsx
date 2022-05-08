import { FieldInputProps } from 'formik';
import { HTMLInputTypeAttribute } from 'react';
import S from './form-field.styles';

export const FormField = ({
  label,
  inputProps,
  name,
  onBlur,
  type,
}: {
  label: string;
  inputProps?: FieldInputProps<string>;
  name?: string;
  onBlur?: () => void;
  type?: HTMLInputTypeAttribute;
}) => {
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input id={name} {...inputProps} onBlur={onBlur} type={type} />
    </S.Wrapper>
  );
};
