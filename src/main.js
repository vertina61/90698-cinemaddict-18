import ProfileRatingView from './view/profile-rating-view.js';
import NavigationView from './view/films-navigation-view.js';
import SortView from './view/sort-view.js';
import FilmsPresenter from './presenter/films-presenter.js';
import {render} from './render.js';

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');

render(new ProfileRatingView(), siteHeaderElement);
render(new NavigationView(), siteMainElement);
render(new SortView(), siteMainElement);

const filmsPresenter = new FilmsPresenter();
filmsPresenter.init(siteMainElement);
