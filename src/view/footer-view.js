import AbstractView from '../framework/view/abstract-view.js';

const createFooterTemplate = () => (
  `<section class="footer__statistics">
    <p>130 291 movies inside</p>
  </section>`
);

export default class FooterView extends AbstractView {

  get template() {
    return createFooterTemplate();
  }
}
