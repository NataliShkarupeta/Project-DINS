export const normalizedDate = date => {
  const dateToString = new Date(date);
  const day = dateToString.getDate().toString().padStart(2, '0');
  const month = (dateToString.getMonth() + 1).toString().padStart(2, '0');
  const year = dateToString.getFullYear().toString().slice(2);
  return `${day}.${month}.${year}`;
};
