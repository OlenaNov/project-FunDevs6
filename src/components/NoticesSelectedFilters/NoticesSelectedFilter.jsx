import {
  Filters,
  FilterList,
  SelectedFilterBtn,
  SelectedFilterBtnLabel,
  SelectedFilterBtnIcon,
} from './NoticesSelectedFilter.styled';

const NoticesSelectedFilter = ({ filters, handleReset }) => {
  return (
    <Filters>
      <FilterList>
        {filters.map(filter => (
          <li key={filter}>
            <SelectedFilterBtn
              type="button"
              onClick={() => handleReset(filter)}
            >
              <SelectedFilterBtnLabel>{filter}</SelectedFilterBtnLabel>
              <SelectedFilterBtnIcon />
            </SelectedFilterBtn>
          </li>
        ))}
      </FilterList>
    </Filters>
  );
};

export default NoticesSelectedFilter;
