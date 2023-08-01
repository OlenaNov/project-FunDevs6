import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { useState, useEffect } from 'react';
import {
  Form,
  Input,
  SearchBtn,
  ClearBtn,
} from '../NoticesSearch/NoticesSearch.styled';

const NewsSearch = ({ onFormSubmit }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!query) onFormSubmit(query);
  }, [onFormSubmit, query]);

  const submitHandler = e => {
    e.preventDefault();

    onFormSubmit(query);
  };

  const onInputChange = e => {
    const searchQuery = e.target.value;

    setQuery(searchQuery);
  };

  return (
    <Form onSubmit={submitHandler}>
      <Input
        type="text"
        name="query"
        id="searchQquery"
        onChange={onInputChange}
        value={query}
        placeholder="Search"
      />
      <SearchBtn type="submit" query={query} aria-label="Submit">
        <FiSearch />
      </SearchBtn>
      <ClearBtn
        type="button"
        onClick={() => setQuery('')}
        query={query}
        aria-label="Discard query"
      >
        <IoMdClose />
      </ClearBtn>
    </Form>
  );
};

NewsSearch.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default NewsSearch;
