import { createCommentTemplate } from './create-comment-template.js';
const createCommentNextTemplate = (comments) => `<ul class="film-details__comments-list">
      ${comments.map(createCommentTemplate).join('')}
          </ul>`;
export {createCommentNextTemplate};
