import { Search } from '@styled-icons/boxicons-regular';
import { ChangeEvent, FC, useState } from 'react';

import {
  StyledInput,
  StyledInputButton,
  StyledDiv,
  StyledSearchFormSmall,
  StyledSearchFormExtended,
} from './SearchFormStyles';
import { SearchFormMode } from '../../helpers/types';

import { StyledIconButton } from '@/components';
import { COLORS } from '@/theme';

interface SearchFormProps {
  mode: SearchFormMode;
  show: boolean;
}

const SearchForm: FC<SearchFormProps> = ({ mode, show }) => {
  //TODO filter + search page
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const content = (
    <>
      <StyledInput
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search anime..."
      />
      <StyledDiv>
        <StyledIconButton>
          <Search size={'1.5rem'} color={COLORS.BLACK} />
        </StyledIconButton>
        <StyledInputButton>Filter</StyledInputButton>
      </StyledDiv>
    </>
  );

  return (
    <>
      {mode === SearchFormMode.small && (
        <StyledSearchFormSmall>{content}</StyledSearchFormSmall>
      )}
      {mode === SearchFormMode.extended && show && (
        <StyledSearchFormExtended>{content}</StyledSearchFormExtended>
      )}
    </>
  );
};

export default SearchForm;
