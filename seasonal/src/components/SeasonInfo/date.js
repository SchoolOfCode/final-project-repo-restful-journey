export function getDate() {
    
  const date = new Date();
  const day = date.getDate();
  const year = date.getFullYear();
  const month = date.toLocaleString('default', { month: 'long' });
  let ordinal = '';

  if (day === 1 || day === 21 || day === 31) {
    ordinal = 'st';
  } else if (day === 2 || day === 22) {
    ordinal = 'nd';
  } else if (day === 3) {
    ordinal = 'rd';
  } else {
    ordinal = 'th';
  }
  const currentDate = `${month}, ${day}${ordinal} ${year}`;

  return { month, currentDate };
}
