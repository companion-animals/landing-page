export function getDateInYYYYMMDD(date: Date) {
  const year = `${date.getFullYear()}`;

  let month = `0${date.getMonth() + 1}`;
  month = month.substring(month.length - 2);

  let dd = `0${date.getDate()}`;
  dd = dd.substring(dd.length - 2);

  return `${year}-${month}-${dd}`;
}
