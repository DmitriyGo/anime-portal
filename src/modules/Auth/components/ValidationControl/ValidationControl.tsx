import {
  KeyboardEvent,
  forwardRef,
  Ref,
  InputHTMLAttributes,
  useState,
} from 'react';

import { ValidationMessage, Spinner, UsernameWrapper } from '../styles';

import { Input } from '@/components';
import { checkIfServiceKey, debounce } from '@/utils';

interface ValidationControlProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  id: string;
  placeholder: string;
  takenMessage: string;
  errorMessage?: string;
  onCheck: () => boolean;
}

const ValidationControl = forwardRef(
  (
    {
      onCheck,
      type,
      id,
      placeholder,
      takenMessage,
      errorMessage,
      ...rest
    }: ValidationControlProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    const [taken, setTaken] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleKeyUp = debounce(async () => {
      const taken = onCheck();

      setTaken(taken);
      setLoading(false);
    }, 400);

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      setLoading(checkIfServiceKey(event));
    };

    return (
      <>
        <UsernameWrapper>
          <Input
            ref={ref}
            type={type}
            id={id}
            placeholder={placeholder}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            {...rest}
          />
          <Spinner shown={loading} />
        </UsernameWrapper>
        <ValidationMessage className={taken || errorMessage ? 'invalid' : ''}>
          {taken ? takenMessage : errorMessage}
        </ValidationMessage>
      </>
    );
  },
);

export default ValidationControl;
