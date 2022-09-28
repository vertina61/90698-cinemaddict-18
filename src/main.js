import ProfileRatingView from './view/profile-rating-view.js';
import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import FilmsPresenter from './presenter/films-presenter.js';
import { render } from './framework/render.js';
import FilmsModel from './model/films-model.js';
import CommentsModel from './model/comments-model.js';
import { generateFilterList } from './mock/filter.js';
import FooterView from './view/footer-view.js';

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteFooterElement = document.querySelector('.footer');

const filmsModel = new FilmsModel();
const commentsModel = new CommentsModel(filmsModel);
const navFilterList = new FilterView(generateFilterList());

render(new ProfileRatingView(), siteHeaderElement);
render(navFilterList, siteMainElement);
render(new SortView(), siteMainElement);
render(new FooterView(), siteFooterElement);

const filmsPresenter = new FilmsPresenter(siteMainElement, filmsModel, commentsModel);
filmsPresenter.init();
