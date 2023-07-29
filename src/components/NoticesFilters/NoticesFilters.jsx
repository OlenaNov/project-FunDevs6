import { useState } from 'react';
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

export const NoticesFilters = ({ onFilter, filters }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isAgeOpen, setIsAgeOpen] = useState(false);
  const [isGenderOpen, setIsGenderOpen] = useState(false);

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
    <FilterWrapper>
      <FilterOpenBtn
        type="button"
        onClick={handleFilterClick}
        aria-label="filter switch"
        name="filtersBtn"
      >
        <FilterBtnLabel>Filter</FilterBtnLabel>
        <FilterBtnIcon />
      </FilterOpenBtn>
      {isFilterOpen && (
        <FilterDropDownContainer id="filtersMenu">
          <DropDownContent>
            <DropDownContentText>Filters</DropDownContentText>
            <DropDownSubMenu>
              <FilterBtn
                type="button"
                onClick={handleAgeClick}
                aria-label="switch age option"
                name="filtersBtn"
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
                      value="0-12 m"
                      checked={filters.includes('0-12 m')}
                    />
                    3-12 m
                  </FilterFormLabel>
                  <FilterFormLabel>
                    <FilterFormInput
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      name="age"
                      value="1 year"
                      checked={filters.includes('1 year')}
                    />
                    up to 1 year
                  </FilterFormLabel>
                  <FilterFormLabel>
                    <FilterFormInput
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      name="age"
                      value="2 years +"
                      checked={filters.includes('2 years +')}
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
                name="filtersBtn"
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
      )}
    </FilterWrapper>
  );
};
export default NoticesFilters;
