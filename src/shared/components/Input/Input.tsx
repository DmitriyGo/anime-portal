import React, {
  ChangeEvent,
  forwardRef,
  InputHTMLAttributes,
  Ref,
} from 'react';

import { StyledInput } from './InputStyles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

// eslint-disable-next-line react/display-name
const Input = forwardRef(
  ({ onChange, ...rest }: InputProps, ref: Ref<HTMLInputElement>) => {
    return <StyledInput ref={ref} onChange={onChange} {...rest} />;
  },
);

export default Input;
