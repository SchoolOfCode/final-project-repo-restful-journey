import { getDate } from './date';

function SeasonInfo() {
  const { currentDate, month } = getDate();

  return <div>{currentDate}</div>;
}

export default SeasonInfo;
