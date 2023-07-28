import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';

import { Form, Input, SearchBtn, ClearBtn } from './NoticesSearch.styled';

const NoticesSearch = ({ onFormSubmit, onClear }) => {
  const [query, setQuery] = useState({ query: '' });

  const handleSubmit = e => {
    e.preventDefault();

    if (query.query.trim() === '') {
      setQuery({ query: '' });
      return;
    }

    onFormSubmit({ ...query });
  };

  const onInputChange = e => {
    setQuery({ query: e.target.value });
  };

  const handleClear = () => {
    setQuery({ query: '' });
    onClear();
  };

  const searchQuery = query.query;

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="query"
        id="query"
        onChange={onInputChange}
        value={searchQuery}
        placeholder="Search"
      />
      <SearchBtn type="submit" query={searchQuery} aria-label="submit">
        <FiSearch style={{ fontSize: 24 }} />
      </SearchBtn>

      <ClearBtn
        type="button"
        query={searchQuery}
        onClick={handleClear}
        aria-label="clear the input field"
      >
        <IoMdClose style={{ fontSize: 24 }} />
      </ClearBtn>
    </Form>
  );
};

NoticesSearch.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default NoticesSearch;
