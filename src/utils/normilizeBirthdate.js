export const normilizeBirthdate = date => {
  const birthDate = new Date(date);

  const day = String(birthDate.getUTCDate()).padStart(2, '0');
  const month = String(birthDate.getMonth() + 1).padStart(2, '0');
  const year = String(birthDate.getUTCFullYear());

  return `${day}.${month}.${year}`;
};
