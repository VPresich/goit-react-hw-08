import { selectItems } from '../contacts/selectors';

export const selectFilter = state => state.filters.name;

export const selectFilteredItems = state => {
  const items = selectItems(state);
  const strFilter = selectFilter(state);

  return strFilter?.length === 0
    ? items
    : items.filter(contact =>
        contact.name.toLowerCase().includes(strFilter.trim().toLowerCase())
      );
};
