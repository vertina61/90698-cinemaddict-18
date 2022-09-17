const NAME_COUNT = 2;
const MAX_COMMENTS_ON_FILM = 5;
const FILM_COUNT = 5;

const GenreCount = {
  MIN:1,
  MAX:3
};

const Rating = {
  MIN:0,
  MAX:10
};

const AgeRating = {
  MIN:0,
  MAX:18
};

const Runtime = {
  MIN:60,
  MAX:180
};

const posters = [
  'images/posters/made-for-each-other.png',
  'images/posters/popeye-meets-sinbad.png',
  'images/posters/sagebrush-trail.jpg',
  'images/posters/santa-claus-conquers-the-martians.jpg',
  'images/posters/the-dance-of-life.jpg',
  'images/posters/the-great-flamarion.jpg',
  'images/posters/the-man-with-the-golden-arm.jpg',
];

const genres = [
  'Animation',
  'Action',
  'Adventure',
  'Comedy',
  'Family',
  'Horror',
  'Thriller',
];

const emotions = ['smile', 'sleeping', 'puke', 'angry'];
const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.';
const comment = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.';
const countries = ['USA', 'Russia', 'Poland','Germany'];
const names = [
  'Petr',
  'Natasha',
  'Ivan',
  'Olga',
  'Inna',
  'Fedor'
];
const surnames = [
  'Petrov',
  'Ivanov',
  'Romanova',
  'Olekseeva',
  'Sergeev',
  'Nikolaev'
];

const DaysDuration = {
  MIN: 0,
  MAX: 7
};

const YearsDuration = {
  MIN: 5,
  MAX: 10
};

const titles = [
  'My Life is Murder',
  'The Bridges of Madison County',
  'Aquamarine',
  'Europa Report',
  'Haunted',
  'A Time to Dance',
  'Who Gets the Dog?',
  'Imagine Me & You',
  'The Bone Collector',
  'Why Stop Now?',
];

export {FILM_COUNT, NAME_COUNT, MAX_COMMENTS_ON_FILM, description, comment, countries, DaysDuration, YearsDuration, titles, surnames, names, posters, Rating, AgeRating, Runtime, GenreCount, genres, emotions};
