import React from 'react';
import styled from 'styled-components';
import { InputInfo } from 'types/inputInterface';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import InputLabel from './InputLabel';
import Button from 'components/common/Button';
import { LoginForm, SignUpForm } from 'types/userDataType';
import { ERROR_MESSAGES, PLACEHOLDER } from 'utils/constants/VALIDATION';

type FormValues = LoginForm | SignUpForm;

interface InputFormProps {
  onSubmit: SubmitHandler<any>;
  defaultValues: Record<string, any>;
  inputInfo: InputInfo[];
  buttonName: string;
  isSignUp: boolean;
}
const InputForm = ({
  inputInfo,
  onSubmit,
  defaultValues,
  buttonName,
  isSignUp,
}: InputFormProps) => {
  const methods = useForm<FormValues>({
    mode: 'onBlur',
    defaultValues: defaultValues,
  });
  const {
    /* eslint-disable-next-line */
    handleSubmit,
    formState: { isSubmitting, errors },
    watch,
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
        {isSignUp && (
          <InputLabel
            id="pwConfirm"
            label="비밀번호 확인"
            type="password"
            placeholder={PLACEHOLDER.password_check}
            validation={{
              required: ERROR_MESSAGES.password_check,
              validate: (value: string) =>
                value === watch('password') || '비밀번호가 일치하지 않습니다.',
            }}
            errmsg={errors['pwConfirm' as keyof typeof errors]?.message}
          />
        )}
        <Button type="submit" disabled={isSubmitting} className="login">
          {buttonName}
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
