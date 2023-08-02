import { useState, useEffect } from 'react';
import {
  FilterOpenBtn,
  FilterBtnIcon,
  FilterBtnLabel,
  FilterWrapper,
  FilterDropDownContainer,
  DropDownContent,
  DropDownContentText,
  DropDownSubMenu,
  FilterBtn,
  ArrowIcon,
  BtnLabel,
  FilterForm,
  FilterFormLabel,
  FilterFormInput,
} from './NoticesFilters.styled';
import { CSSTransition } from 'react-transition-group';

export const NoticesFilters = ({ onFilter, filters }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isAgeOpen, setIsAgeOpen] = useState(false);
  const [isGenderOpen, setIsGenderOpen] = useState(false);

  useEffect(() => {
    const filterBtn = document.getElementById('filtersBtn');
    const menu = document.getElementById('filtersMenu');

    const outsideFilterMenuClickHandler = e => {
      if (
        e.target !== menu &&
        !menu.contains(e.target) &&
        e.target !== filterBtn &&
        !filterBtn.contains(e.target)
      )
        setIsFilterOpen(false);
    };

    document.body.addEventListener('click', outsideFilterMenuClickHandler);

    return () =>
      document.body.removeEventListener('click', outsideFilterMenuClickHandler);
  }, []);

  const handleFilterClick = e => {
    setIsFilterOpen(prevState => !prevState);
  };

  const handleAgeClick = () => {
    setIsAgeOpen(prevState => !prevState);
  };

  const handleGenderClick = () => {
    setIsGenderOpen(prevState => !prevState);
  };

  const handleCheckboxChange = e => {
    onFilter(e.target);
  };

  return (
    <FilterWrapper id="filtersMenu">
      <FilterOpenBtn
        type="button"
        onClick={handleFilterClick}
        aria-label="filter switch"
        id="filtersBtn"
      >
        <FilterBtnLabel>Filter</FilterBtnLabel>
        <FilterBtnIcon />
      </FilterOpenBtn>
      <CSSTransition
        in={isFilterOpen}
        timeout={400}
        classNames="filter"
        unmountOnExit
      >
        <FilterDropDownContainer>
          <DropDownContent>
            <DropDownContentText>Filters</DropDownContentText>
            <DropDownSubMenu>
              <FilterBtn
                type="button"
                onClick={handleAgeClick}
                aria-label="switch age option"
              >
                {isAgeOpen ? (
                  <ArrowIcon />
                ) : (
                  <ArrowIcon style={{ transform: 'rotate(180deg)' }} />
                )}
                <BtnLabel>By age</BtnLabel>
              </FilterBtn>
              {isAgeOpen && (
                <FilterForm>
                  <FilterFormLabel>
                    <FilterFormInput
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      name="age"
                      value="3m-12m"
                      checked={filters.includes('3m-12m')}
                    />
                    3-12 m
                  </FilterFormLabel>
                  <FilterFormLabel>
                    <FilterFormInput
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      name="age"
                      value="1y"
                      checked={filters.includes('1y')}
                    />
                    up to 1 year
                  </FilterFormLabel>
                  <FilterFormLabel>
                    <FilterFormInput
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      name="age"
                      value="2y"
                      checked={filters.includes('2y')}
                    />
                    up to 2 year
                  </FilterFormLabel>
                </FilterForm>
              )}
            </DropDownSubMenu>
            <DropDownSubMenu>
              <FilterBtn
                type="button"
                onClick={handleGenderClick}
                aria-label="switch gender option"
              >
                {isGenderOpen ? (
                  <ArrowIcon />
                ) : (
                  <ArrowIcon style={{ transform: 'rotate(180deg)' }} />
                )}
                <BtnLabel>By gender</BtnLabel>
              </FilterBtn>
              {isGenderOpen && (
                <FilterForm>
                  <FilterFormLabel>
                    <FilterFormInput
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      name="gender"
                      value="female"
                      checked={filters.includes('female')}
                    />
                    female
                  </FilterFormLabel>
                  <FilterFormLabel>
                    <FilterFormInput
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      name="gender"
                      value="male"
                      checked={filters.includes('male')}
                    />
                    male
                  </FilterFormLabel>
                </FilterForm>
              )}
            </DropDownSubMenu>
          </DropDownContent>
        </FilterDropDownContainer>
      </CSSTransition>
    </FilterWrapper>
  );
};
export default NoticesFilters;
