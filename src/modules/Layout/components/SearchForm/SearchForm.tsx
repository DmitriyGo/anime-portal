import { Search } from '@styled-icons/boxicons-regular';
import { ChangeEvent, FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Input, Box, SearchForm as StyledSearchForm } from './SearchFormStyles';

import { StyledIconButton } from '@/components';
import { COLORS } from '@/theme';

interface SearchFormProps {
  mode: boolean;
  show: boolean;
}

const SearchForm: FC<SearchFormProps> = ({ mode, show }) => {
  //TODO filter + search page
  const [inputValue, setInputValue] = useState('');

  const { t } = useTranslation();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const content = (
    <>
      <Input
        value={inputValue}
        onChange={handleInputChange}
        placeholder={`${t('search_form_placeholder')}`}
      />
      <Box>
        <StyledIconButton>
          <Search size="1.5rem" color={COLORS.BLACK} />
        </StyledIconButton>
      </Box>
    </>
  );

  return (
    <StyledSearchForm $mode={!mode} $show={show}>
      {content}
    </StyledSearchForm>
  );
};

export default SearchForm;
