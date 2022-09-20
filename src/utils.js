import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(duration);
dayjs.extend(relativeTime);

//Функция генерации случайного числа
const getRandomInteger = (a = 0,b = 1)=>{
  const lower = Math.ceil(Math.min(a,b));
  const upper = Math.floor(Math.max(a,b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomValue = (items)=>
  items[getRandomInteger(0, items.length - 1)];

const formatStringToDateWithTime = (date) =>
  dayjs(date).format('YYYY/MM/DD hh:mm');

const formatStringToDate = (date) =>
  dayjs(date).format('DD MMMM YYYY');

const formatStringToYear = (date) =>
  dayjs(date).format('YYYY');

const formatMinutesToTime = (minutes) =>
  dayjs.duration(minutes, 'minutes').format('H[h] mm[m]');

export {getRandomInteger, getRandomValue, formatStringToDateWithTime, formatStringToDate, formatStringToYear, formatMinutesToTime};
