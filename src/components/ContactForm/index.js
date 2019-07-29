import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MapBox from '../MapBox/MapBox';

// import arrow from '../../images/right-arrow.svg';
import Title from '../ui/Title';
import './contact-form.scss';

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: '',
      email: '',
    };
  }

  render() {
    return (
      <div className="advantages bg">
        <Title primary level={2}>
          Как нас найти
        </Title>
        <div className="wrapper wrapper--lg flex">
          <div className="contacts">
            <p className="contacts__info">Одесса, Украина</p>

            <a className="contacts__link" href="https://www.google.com/maps/place/%D0%B7%D0%B0%D0%B2%D0%BE%D0%B4+%22%D0%91%D0%B8%D0%BE%D1%81%D1%82%D0%B8%D0%BC%D1%83%D0%BB%D1%8F%D1%82%D0%BE%D1%80%22/@46.5063207,30.6980114,17z/data=!4m12!1m6!3m5!1s0x40c62e2592cddf41:0x5f72b9aac64fe588!2z0LfQsNCy0L7QtCAi0JHQuNC-0YHRgtC40LzRg9C70Y_RgtC-0YAi!8m2!3d46.506317!4d30.7002001!3m4!1s0x40c62e2592cddf41:0x5f72b9aac64fe588!8m2!3d46.506317!4d30.7002001">
                Хаджибеевская дорога 2,
              <span className="text-color-yellow test-relative">
                завод «Биостимулятор»
              </span>
            </a>

            <a className="contacts__link" href="/">+38 093 543 4241</a>
            <p>Viber, Telegram</p>

            <ul className="contacts__list">
              <li>
                <a className="link" href="/">
                  <svg fill="#FFDC26" viewBox="0 0 512 512">
                    <path d="M256 0C153.755 0 70.573 83.182 70.573 185.426c0 126.888 165.939 313.167 173.004 321.035 6.636 7.391 18.222 7.378 24.846 0 7.065-7.868 173.004-194.147 173.004-321.035C441.425 83.182 358.244 0 256 0zm0 278.719c-51.442 0-93.292-41.851-93.292-93.293S204.559 92.134 256 92.134s93.291 41.851 93.291 93.293-41.85 93.292-93.291 93.292z" />
                  </svg>
                </a>
              </li>

              <li>
                <a className="link" href="/">
                  <svg fill="#FFDC26" viewBox="0 0 512 512">
                    <path d="M305 256c0 27.063-21.937 49-49 49s-49-21.937-49-49 21.938-49 49-49 49 21.938 49 49zm65.594-86.695a45.533 45.533 0 0 0-10.996-16.902 45.52 45.52 0 0 0-16.902-10.996c-5.18-2.012-12.96-4.406-27.293-5.06-15.504-.707-20.152-.86-59.402-.86s-43.902.148-59.402.855c-14.332.656-22.117 3.05-27.293 5.063a45.47 45.47 0 0 0-16.902 10.996 45.57 45.57 0 0 0-11 16.902c-2.012 5.18-4.406 12.965-5.06 27.297-.707 15.5-.86 20.148-.86 59.402l.86 59.402c.652 14.332 3.047 22.113 5.06 27.293a45.563 45.563 0 0 0 10.996 16.902 45.52 45.52 0 0 0 16.902 10.996c5.18 2.016 12.965 4.4 27.297 5.063 15.5.707 20.145.855 59.398.855l59.402-.855c14.332-.652 22.117-3.047 27.297-5.062a48.68 48.68 0 0 0 27.898-27.898c2.012-5.18 4.406-12.96 5.063-27.293.707-15.504.855-20.152.855-59.402l-.855-59.402c-.652-14.332-3.047-22.117-5.062-27.297zM256 331.484c-41.7 0-75.488-33.793-75.488-75.484S214.3 180.516 256 180.516 331.484 214.3 331.484 256 297.688 331.484 256 331.484zm78.47-136.312c-9.742 0-17.64-7.898-17.64-17.64s7.898-17.64 17.64-17.64 17.64 7.898 17.64 17.64-7.898 17.64-17.64 17.64zM256 0C114.637 0 0 114.637 0 256s114.637 256 256 256 256-114.637 256-256S397.363 0 256 0zm146.113 316.605c-.7 15.648-3.2 26.332-6.832 35.684a75.166 75.166 0 0 1-42.992 42.992c-9.348 3.633-20.035 6.117-35.68 6.832-15.676.715-20.684.887-60.605.887s-44.93-.172-60.6-.887c-15.645-.715-26.332-3.2-35.68-6.832a72.02 72.02 0 0 1-26.039-16.957 72.04 72.04 0 0 1-16.953-26.035c-3.633-9.348-6.12-20.035-6.832-35.68-.723-15.68-.9-20.687-.9-60.6l.887-60.605c.7-15.648 3.195-26.332 6.828-35.684 3.7-9.8 9.48-18.695 16.96-26.035a72.01 72.01 0 0 1 26.035-16.957c9.352-3.633 20.035-6.117 35.684-6.832C211.07 109.172 216.078 109 256 109s44.93.172 60.605.9c15.648.7 26.332 3.195 35.684 6.824a72.06 72.06 0 0 1 26.039 16.961 72.02 72.02 0 0 1 16.953 26.035c3.637 9.352 6.12 20.035 6.836 35.684.715 15.676.883 20.684.883 60.605l-.887 60.605zm0 0" />
                  </svg>
                </a>
              </li>

              <li>
                <a className="link" href="/">
                  <svg viewBox="0 0 486.392 486.392">
                    <path fill="#FFDC26" d="M243.196 0C108.89 0 0 108.89 0 243.196s108.89 243.196 243.196 243.196S486.392 377.5 486.392 243.196C486.392 108.86 377.5 0 243.196 0zm62.866 243.165l-39.854.03-.03 145.917h-54.69V243.196H175v-50.28l36.48-.03-.06-29.61c0-41.04 11.126-65.997 59.43-65.997h40.25v50.31h-25.17c-18.817 0-19.73 7.022-19.73 20.124l-.06 25.17h45.234l-5.32 50.28z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <MapBox />
          <form className="contact-form">
            <h4 className="contact-form__title">Жду звонка</h4>
            <input
              type="text"
              className="contact-form__input"
              aria-label="Имя"
              placeholder="Имя"
              name="name"
            />
            <input
              type="text"
              className="contact-form__input"
              aria-label="Телефон"
              placeholder="Телефон"
              name="phone"
            />
            <input
              type="text"
              className="contact-form__input"
              aria-label="E-mail"
              placeholder="E-mail"
              name="email"
            />

            <button className="contact-form__btn" type="submit">
              Отправить
            </button>
          </form>
        </div>

        <footer className="footer">
          @All rights reserved 2019
        </footer>
      </div>
    );
  }
}

ContactForm.contextTypes = {
  posX: PropTypes.number,
  posY: PropTypes.number,
};

export default ContactForm;
