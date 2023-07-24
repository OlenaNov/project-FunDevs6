// import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';
// import { useEffect } from 'react';

import { Form, Input, SearchBtn, ClearBtn } from './NoticesSearch.styled';

const NoticesSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  //   useEffect(() => {
  //     // if (!searchQuery) onFormSubmit(searchQuery);
  //   }, [onFormSubmit, searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();

    // onFormSubmit(searchQuery);
  };

  const onInputChange = e => {
    setSearchQuery(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="searhQuery"
        id="searchQuery"
        onChange={onInputChange}
        value={searchQuery}
        placeholder="Search"
      />
      <SearchBtn type="submit" searchQuery={searchQuery} aria-label="submit">
        <FiSearch style={{ fontSize: 20 }} />
      </SearchBtn>

      <ClearBtn
        type="button"
        searchQuery={searchQuery}
        onClick={() => setSearchQuery('')}
        aria-label="clear the input field"
      >
        <IoMdClose style={{ fontSize: 22 }} />
      </ClearBtn>
    </Form>
  );
};

export default NoticesSearch;
