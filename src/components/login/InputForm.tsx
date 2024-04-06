import React from 'react';
import styled from 'styled-components';
import { InputInfo } from 'types/inputInterface';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import InputLabel from './InputLabel';
import Button from 'components/common/Button';
import { LoginForm, SignUpForm } from 'types/userDataType';

type FormValues = LoginForm | SignUpForm;

interface InputFormProps {
  onSubmit: SubmitHandler<any>;
  defaultValues: Record<string, any>;
  inputInfo: InputInfo[];
}
const InputForm = ({ inputInfo, onSubmit, defaultValues }: InputFormProps) => {
  const methods = useForm<FormValues>({
    mode: 'onBlur',
    defaultValues: defaultValues,
  });
  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={methods.handleSubmit(onSubmit)}>
        {inputInfo.map(input => (
          <InputLabel
            key={input.id}
            id={input.id}
            label={input.label}
            type={input.type}
            placeholder={input.placeholder}
            validation={input.validation}
            errmsg={errors[input.id as keyof typeof errors]?.message}
          />
        ))}
        <Button type="submit" disabled={isSubmitting} className="login">
          로그인
        </Button>
      </StyledForm>
    </FormProvider>
  );
};
const StyledForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;
export default InputForm;
