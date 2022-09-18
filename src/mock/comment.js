import dayjs from 'dayjs';
import { getRandomInteger, getRandomValue } from '../utils.js';
import { names, surnames, emotions, comment, DaysDuration } from './const.js';

const generateComment = ()=>({
  author: `${getRandomValue(names)} ${getRandomValue(surnames)}`,
  comment,
  date: dayjs().subtract(getRandomInteger(DaysDuration.MIN, DaysDuration.MAX), 'day').toISOString(),
  emotion: getRandomValue(emotions),
});

const getCommentCount = (films) => films.reduce(
  (count, film)=>count + film.comments.length, 0
);

const generateComments = (films)=>{
  const commentCount = getCommentCount(films);
  return Array.from({length: commentCount}, (_value, index) => {
    const commentItem = generateComment();
    return {
      id: String(index + 1),
      ...commentItem,
    };
  });
};

export {generateComments};

