import { selectItems } from '../contacts/selectors';
import { createFuseIndex } from '../../auxiliary/createFuseIndex';

export const selectFilter = state => state.filters.name;

export const selectFilteredItems = state => {
  const items = selectItems(state);
  const strFilter = selectFilter(state);

  return strFilter?.length === 0
    ? items
    : items.filter(
        contact =>
          contact.name.toLowerCase().includes(strFilter.trim().toLowerCase()) ||
          contact.number.toLowerCase().includes(strFilter.trim().toLowerCase())
      );
};

export const selectFilteredItemsByKey = state => {
  const strFilter = selectFilter(state).trim().toLowerCase();
  const items = selectItems(state);
  if (!strFilter) {
    return selectItems(state);
  }
  const fuse = createFuseIndex(items);
  const filtered = fuse.search(strFilter).map(result => result.item);
  const filteredWithOrder = items.filter(item => filtered.includes(item));

  return filteredWithOrder;
};
