import { ChangeEvent, useState } from 'react';

import { StyledForm, StyledInput, StyledInputButton } from './SearchFormStyles';

import { StyledSearch } from '@/modules/Layout/components/Header/HeaderStyles';

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
        <StyledSearch size={'1.5rem'} />
        <StyledInputButton>Filter</StyledInputButton>
      </div>
    </StyledForm>
  );
};

export default SearchForm;
