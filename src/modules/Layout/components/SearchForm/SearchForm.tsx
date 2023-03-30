import { Search } from '@styled-icons/boxicons-regular';
import { ChangeEvent, useState } from 'react';

import { StyledForm, StyledInput, StyledInputButton } from './SearchFormStyles';

import { StyledIconButton } from '@/components';

const SearchForm = () => {
  //TODO filter page
  //TODO search page
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <StyledForm>
      <StyledInput
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search anime..."
      />
      <div>
        <StyledIconButton>
          <Search size={'1.5rem'} />
        </StyledIconButton>
        <StyledInputButton>Filter</StyledInputButton>
      </div>
    </StyledForm>
  );
};

export default SearchForm;
