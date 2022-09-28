import AbstractView from '../framework/view/abstract-view.js';

const createFilterTemplate = (filter) => `<nav class="main-navigation">
<a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
<a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${filter.watchlist}</span></a>
<a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${filter.history}</span></a>
<a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${filter.favorites}</span></a>
</nav>`;

export default class FilterView extends AbstractView {
  #filter = null;

  constructor(filter) {
    super();
    this.#filter = filter;
  }

  get template() {
    return createFilterTemplate(this.#filter);
  }
}
