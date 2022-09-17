import FilmCardView from '../view/film-card-view.js';
import ShowMoreView from '../view/show-more-view.js';
import FilmsView from '../view/films-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsListContainerView from '../view/films-list-container-view.js';
import FilmCardPopupView from '../view/film-card-popup-view.js';
import {render} from '../render.js';

export default class FilmsPresenter {
  filmsComponent = new FilmsView();
  filmsListComponent = new FilmsListView();
  filmsListContainer = new FilmsListContainerView();

  init(filmsContainer, filmsModel, commentsModel) {
    this.filmsContainer = filmsContainer;
    this.filmsModel = filmsModel;
    this.commentsModel = commentsModel;

    this.films = [...filmsModel.get()];

    render(this.filmsComponent, this.filmsContainer);
    render(this.filmsListComponent, this.filmsComponent.getElement());
    render(this.filmsListContainer, this.filmsListComponent.getElement());

    for (let i = 0; i < this.films.length; i++) {
      render(new FilmCardView(this.films[i]), this.filmsListContainer.getElement());
    }

    render(new ShowMoreView(), this.filmsListComponent.getElement());

    const comments = [...this.commentsModel.get(this.films[0])];
    render(new FilmCardPopupView(this.films[0], comments), this.filmsContainer.parentElement);
  }
}
