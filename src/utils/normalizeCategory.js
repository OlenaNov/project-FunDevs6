export const normalizeCategory = category => {
  switch (category) {
    case 'lost-found':
      return 'lost/found';
    case 'for-free':
      return 'in good hands';
    default:
      return category;
  }
};
