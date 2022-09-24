import FilmCardView from '../view/film-card-view.js';
import ShowMoreView from '../view/show-more-view.js';
import FilmsView from '../view/films-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsListContainerView from '../view/films-list-container-view.js';
import FilmCardPopupView from '../view/film-card-popup-view.js';
import {render} from '../render.js';

export default class FilmsPresenter {
  #filmsComponent = new FilmsView();
  #filmsListComponent = new FilmsListView();
  #filmsListContainer = new FilmsListContainerView();
  #ShowMoreView = new ShowMoreView ();
  #filmCardPopupComponent = null;

  #filmsContainer = null;
  #filmsModel = null;
  #commentsModel = null;

  #films = [];

  init(filmsContainer, filmsModel, commentsModel) {
    this.#filmsContainer = filmsContainer;
    this.#filmsModel = filmsModel;
    this.#commentsModel = commentsModel;

    this.#films = [...this.#filmsModel.get()];

    render(this.#filmsComponent, this.#filmsContainer);
    render(this.#filmsListComponent, this.#filmsComponent.element);
    render(this.#filmsListContainer, this.#filmsListComponent.element);

    this.#films.forEach((film) => {
      this.#renderFilm(film, this.#filmsListContainer);
    });

    render(this.#ShowMoreView, this.#filmsListComponent.element);
  }

  #renderFilm(film, filmsContainer) {
    const filmCardViewComponent = new FilmCardView(film);
    const linkFilmCardElement = filmCardViewComponent.element.querySelector('a');
    linkFilmCardElement.addEventListener('click', () => {
      this.#addFilmCardPopupComponent(film);
      document.addEventListener('keydown', this.#onEscKeyDown);
    });

    render(filmCardViewComponent, filmsContainer.element);
  }

  #renderFilmCardPopup(film) {
    const comments = [...this.#commentsModel.get(film)];
    this.#filmCardPopupComponent = new FilmCardPopupView(film, comments);
    const closeButtonFilmDetailsElement = this.#filmCardPopupComponent.element.querySelector('.film-details__close-btn');

    closeButtonFilmDetailsElement.addEventListener('click', () => {
      this.#removeFilmCardPopupComponent();
      document.removeEventListener('keydown', this.onEscKeyDown);
    });
    render(this.#filmCardPopupComponent, this.#filmsContainer.parentElement);
  }

  #addFilmCardPopupComponent = (film) => {
    this.#renderFilmCardPopup(film);
    document.body.classList.add('hide-overflow');
  };

  #removeFilmCardPopupComponent = () => {
    this.#filmCardPopupComponent.element.remove();
    this.#filmCardPopupComponent = null;
    document.body.classList.remove('hide-overflow');
  };

  #onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.#removeFilmCardPopupComponent();
      document.removeEventListener('keydown', this.#onEscKeyDown);
    }
  };
}

