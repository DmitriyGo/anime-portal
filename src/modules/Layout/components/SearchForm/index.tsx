import { Search } from '@styled-icons/boxicons-regular';

import { StyledForm } from './styles';

import { StyledButton } from '@/components';
import { FONT_SIZES } from '@/theme';

const SearchForm = () => {
  //TODO filter page
  //TODO search page
  return (
    <StyledForm>
      <input type="text" placeholder="Search anime..." />
      <div>
        <Search size={25} />
        <StyledButton br="3px" to={'#'} fsize={FONT_SIZES['10']} p="5px">
          Filter
        </StyledButton>
      </div>
    </StyledForm>
  );
};

export default SearchForm;
