import ProfileRatingView from './view/profile-rating-view.js';
import NavigationView from './view/films-navigation-view.js';
import SortView from './view/sort-view.js';
import FilmsPresenter from './presenter/films-presenter.js';
import { render } from './framework/render.js';
import FilmsModel from './model/films-model.js';
import CommentsModel from './model/comments-model.js';

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');

const filmsModel = new FilmsModel();
const commentsModel = new CommentsModel(filmsModel);

render(new ProfileRatingView(), siteHeaderElement);
render(new NavigationView(), siteMainElement);
render(new SortView(), siteMainElement);

const filmsPresenter = new FilmsPresenter(siteMainElement, filmsModel, commentsModel);
filmsPresenter.init();
