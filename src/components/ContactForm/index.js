import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      <div className="advantages bg bg--buildings">
        <h2 className="main-title main-title--primary">Как нас найти</h2>
        <div className="wrapper flex">
          <div className="contacts">
            <p className="contacts__info">Одесса, Украина</p>

            <a className="contacts__link" href="https://www.google.com/maps/place/%D0%B7%D0%B0%D0%B2%D0%BE%D0%B4+%22%D0%91%D0%B8%D0%BE%D1%81%D1%82%D0%B8%D0%BC%D1%83%D0%BB%D1%8F%D1%82%D0%BE%D1%80%22/@46.5063207,30.6980114,17z/data=!4m12!1m6!3m5!1s0x40c62e2592cddf41:0x5f72b9aac64fe588!2z0LfQsNCy0L7QtCAi0JHQuNC-0YHRgtC40LzRg9C70Y_RgtC-0YAi!8m2!3d46.506317!4d30.7002001!3m4!1s0x40c62e2592cddf41:0x5f72b9aac64fe588!8m2!3d46.506317!4d30.7002001">
                Хаджибеевская дорога 2,
              <span className="text-color-yellow">
                завод «Биостимулятор»
              </span>
            </a>

            <a className="contacts__link" href="/">+38 093 543 4241</a>
            <p>Viber, Telegram</p>
          </div>
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
      </div>
    );
  }
}

ContactForm.contextTypes = {
  posX: PropTypes.number,
  posY: PropTypes.number,
};

export default ContactForm;
