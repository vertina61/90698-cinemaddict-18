import { formatStringToDateWithTime } from '../utils.js';

const createCommentTemplate = (comments) => `<li class="film-details__comment">
        <span class="film-details__comment-emoji">
          <img src="./images/emoji/${comments.emotion}.png" width="55" height="55" alt="emoji-smile">
        </span>
        <div>
          <p class="film-details__comment-text">${comments.comment}</p>
          <p class="film-details__comment-info">
            <span class="film-details__comment-author">${comments.author}</span>
            <span class="film-details__comment-day">${formatStringToDateWithTime(comments.date)}</span>
            <button class="film-details__comment-delete">Delete</button>
          </p>
        </div>
      </li>`;

export {createCommentTemplate};
