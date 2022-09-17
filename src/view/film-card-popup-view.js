import {createElement} from '../render.js';
import { formatStringToDate } from '../utils.js';
import{formatMinutesToTime} from '../utils.js';
import { createCommentTemplate } from './create-comment-template.js';
import { createCommentNextTemplate } from './create-comment-next-template.js';

const generateGenreTitle = (genres) =>
  (genres.length > 1)
    ? 'Genres'
    : 'Genre';

const generateGenreList = (genres) =>
  genres.map((genreItem) =>
    `<span class="film-details__genre">${genreItem}</span>`
  ).join('');

const createFilmCardPopupTemplate = ({filmInfo}, comments) =>`
<section class="film-details">
   <div class="film-details__inner"
     <div class="film-details__top-container">
         <div class="film-details__close">
          <button class="film-details__close-btn" type="button">close</button>
         </div>

       <div class="film-details__info-wrap">
       <div class="film-details__poster">
       <img class="film-details__poster-img" src=${filmInfo.poster} alt="${filmInfo.alternativeTitle}">
       <p class="film-details__age">${filmInfo.ageRating}+</p>
       </div>
        <div class="film-details__info">
        <div class="film-details__info-head">
        <div class="film-details__title-wrap">
          <h3 class="film-details__title">${filmInfo.title}</h3>
          <p class="film-details__title-original">${filmInfo.title}</p>
        </div>
        <div class="film-details__rating">
          <p class="film-details__total-rating">${filmInfo.totalRating}</p>
        </div>
       </div>
       <table class="film-details__table">
        <tr class="film-details__row">
          <td class="film-details__term">Director</td>
          <td class="film-details__cell">${filmInfo.director}</td>
        </tr>
        <tr class="film-details__row">
          <td class="film-details__term">Writers</td>
          <td class="film-details__cell">${filmInfo.writers}</td>
        </tr>
        <tr class="film-details__row">
          <td class="film-details__term">Actors</td>
          <td class="film-details__cell">${filmInfo.actors}</td>
        </tr>
        <tr class="film-details__row">
          <td class="film-details__term">Release Date</td>
          <td class="film-details__cell">${formatStringToDate(filmInfo.release.date)}</td>
        </tr>
        <tr class="film-details__row">
          <td class="film-details__term">Runtime</td>
          <td class="film-details__cell">${formatMinutesToTime(filmInfo.runtime)}</td>
        </tr>
        <tr class="film-details__row">
          <td class="film-details__term">Country</td>
          <td class="film-details__cell">${filmInfo.release.releaseCountry}</td>
        </tr>
        <tr class="film-details__row">
          <td class="film-details__term">${generateGenreTitle(filmInfo.genre)}</td>
          <td class="film-details__cell">
            <span class="film-details__genre">${generateGenreList(filmInfo.genre)}</span>
            </td>
        </tr>
        </table>
        <p class="film-details__film-description">
        ${filmInfo.description}
        </p>
        </div>
        </div>

         <section class="film-details__controls">
          <button type="button" class="film-details__control-button film-details__control-button--watchlist" id="watchlist" name="watchlist">Add to watchlist</button>
         <button type="button" class="film-details__control-button film-details__control-button--active film-details__control-button--watched" id="watched" name="watched">Already watched</button>
          <button type="button" class="film-details__control-button film-details__control-button--favorite" id="favorite" name="favorite">Add to favorites</button>
         </section>
    </div>
        <div class="film-details__bottom-container">
         <section class="film-details__comments-wrap">
            <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments.length}</span></h3>
           ${createCommentTemplate(comments)}
           ${createCommentNextTemplate(comments)}
    
          </section>
       </div>
      </div>
  </section>`;

export default class FilmCardPopupView {
  constructor(film, comments) {
    this.film = film;
    this.comments = comments;
  }

  getTemplate() {
    return createFilmCardPopupTemplate(this.film, this.comments);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
