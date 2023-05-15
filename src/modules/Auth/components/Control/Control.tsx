import React, { forwardRef, InputHTMLAttributes, Ref } from 'react';

import { Input } from '@/components';
import { ValidationMessage } from '@/modules/Auth/components/styles';

interface ControlProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  id: string;
  placeholder: string;
  errorMessage?: string;
}

const Control = forwardRef(
  (
    { type, id, placeholder, errorMessage, ...rest }: ControlProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    return (
      <>
        <Input
          ref={ref}
          type={type}
          id={id}
          placeholder={placeholder}
          {...rest}
        />
        <ValidationMessage className={errorMessage ? 'invalid' : ''}>
          {errorMessage}
        </ValidationMessage>
      </>
    );
  },
);

export default Control;
