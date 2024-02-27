import Fuse from 'fuse.js';

export const createFuseIndex = contacts => {
  const options = {
    keys: ['name', 'number'],
    threshold: 0.3,
  };

  return new Fuse(contacts, options);
};
