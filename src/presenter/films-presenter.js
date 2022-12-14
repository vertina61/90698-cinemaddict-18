import FilmCardView from '../view/film-card-view.js';
import ShowMoreView from '../view/show-more-view.js';
import FilmsView from '../view/films-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsListContainerView from '../view/films-list-container-view.js';
import FilmCardPopupView from '../view/film-card-popup-view.js';
import FilmListEmptyView from '../view/film-list-empty-view.js';
import { render, remove } from '../framework/render.js';
import { FILM_COUNT_PER_STEP, FILM_COUNT} from '../mock/const.js';

export default class FilmsPresenter {
  #filmsComponent = new FilmsView();
  #filmsListComponent = new FilmsListView();
  #filmsListContainer = new FilmsListContainerView();
  #showMoreView = new ShowMoreView ();

  #filmCardPopupComponent = null;
  #filmsContainer = null;
  #filmsModel = null;
  #commentsModel = null;

  #films = [];

  #renderedFilmCount = FILM_COUNT_PER_STEP;

  constructor(filmsContainer, filmsModel, commentsModel) {
    this.#filmsContainer = filmsContainer;
    this.#filmsModel = filmsModel;
    this.#commentsModel = commentsModel;
  }

  init = () => {
    this.#films = [...this.#filmsModel.get()];

    if(this.#films.length === 0){
      render(new FilmListEmptyView(), this.#filmsContainer);
    } else {
      render(this.#filmsComponent, this.#filmsContainer);
      render(this.#filmsListComponent, this.#filmsComponent.element);
      render(this.#filmsListContainer, this.#filmsListComponent.element);

      this.#films.slice(0, this.#renderedFilmCount).forEach((film) => {
        this.#renderFilm(film, this.#filmsListContainer.element);
      });
      if (this.#renderedFilmCount < FILM_COUNT) {
        render(this.#showMoreView, this.#filmsListComponent.element);
        this.#showMoreView.setClickHandler(this.#onShowFilmButtonMore);
      }
    }
  };

  #renderFilm(film, filmsContainer) {
    const filmCardViewComponent = new FilmCardView(film);
    filmCardViewComponent.setFilmClickHandler(() => {
      this.#addFilmCardPopupComponent(film);
      document.addEventListener('keydown', this.#onEscKeyDown);
    });
    render(filmCardViewComponent, filmsContainer);
  }

  #renderFilmCardPopup(film) {
    const comments = [...this.#commentsModel.get(film)];
    this.#filmCardPopupComponent = new FilmCardPopupView(film, comments);
    this.#filmCardPopupComponent.closeBtnClickHandler(() => {
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

  #onShowFilmButtonMore = ()=> {
    this.#films
      .slice(this.#renderedFilmCount, this.#renderedFilmCount + FILM_COUNT_PER_STEP)
      .forEach((film) => {
        this.#renderFilm(film, this.#filmsListContainer.element);
      });

    this.#renderedFilmCount += FILM_COUNT_PER_STEP;

    if (this.#renderedFilmCount >= this.#films.length) {
      remove(this.#showMoreView);
    }
  };
}


