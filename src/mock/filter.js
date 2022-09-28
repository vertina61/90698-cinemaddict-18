import { Filter } from './const.js';
import { getRandomInteger } from '../utils.js';


export const generateFilterList = () =>
  Filter.reduce((obj, item) => { obj[item] = getRandomInteger(100); return obj; }, {});
