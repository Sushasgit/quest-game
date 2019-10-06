import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled, { withTheme } from 'styled-components';

import Title from '../ui/Title';
import './contact-form.scss';
import Input from '../ui/Input';
import Icon from '../ui/Icon';
import Footer from '../Footer';
import Logo from '../ui/Logo';

const StyledForm = styled.form`
  border-radius: 4px;
  padding: 25px 25px 0;
  max-width: 100%;
  text-align: center;
  max-width: 50%;
  color: ${data => (data.theme ? data.theme.titleColor : '#fff')};

  background-color: ${data => (data.theme ? data.theme.contactForm.bgForm : '#fff')};

  @media(max-width: 700px) {
    max-width: 100%;
  }

  & > *:not(last-child) {
    margin-bottom: 40px;
  }
`;

const StyledButton = styled.button`
    display: inline-block;
    font-family: 'MontserratBold', Arial;
    text-decoration: none;
    padding: 15px;
    margin-bottom: 12px;
    font-size: 14px;
    text-transform: uppercase;
    line-height: 100%;
    letter-spacing: 0.05em;
    width: min-content;
    position: relative;
    z-index: 1;
    border: 1px solid ${props => (props.theme ? props.theme.primaryBtnText : '#fff')};
    background-color:  ${props => (props.theme ? props.theme.primaryBtn : '#fff')};
    color: ${props => (props.theme ? props.theme.primaryBtnText : '#fff')};

    &::before, &::after {
        display: inline-block;
        content: '';
        opacity: 0.3;
        border: 1px solid ${data => (data.theme ? data.theme.titleColor : '#fff')};
        position: absolute;

        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        transition: opacity 0.5s, transform 1s ease;
        z-index: 0;
    }

    &:hover {
        border: 1px solid transparent;
        opacity: 0.7;
    }

    &:hover::after {
        opacity: 0.6;
        transform: rotate(-3deg);
    }

    &:hover::before{
        opacity: 0.6;
        transform: rotate(3deg);
    }
`;

const TitleForm = styled.h3`
  font-size: 30px;
  color: ${data => (data.theme ? data.theme.titleColor : '#fff')};
  text-align: center;
`;


const StyledLink = styled.a`
  color: ${data => (data.theme ? data.theme.titleColor : '#fff')};

  &:hover {
    opacity: 0.3;
  }
`;

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
      <React.Fragment>
        <Title primary level={2}>
          Как нас найти
        </Title>
        <div className="wrapper wrapper--lg flex">
          <div className="contacts">
            <Logo standard />
            <p className="contacts__info">Одесса, Украина</p>

            <StyledLink className="contacts__link" href="https://www.google.com/maps/place/%D0%B7%D0%B0%D0%B2%D0%BE%D0%B4+%22%D0%91%D0%B8%D0%BE%D1%81%D1%82%D0%B8%D0%BC%D1%83%D0%BB%D1%8F%D1%82%D0%BE%D1%80%22/@46.5063207,30.6980114,17z/data=!4m12!1m6!3m5!1s0x40c62e2592cddf41:0x5f72b9aac64fe588!2z0LfQsNCy0L7QtCAi0JHQuNC-0YHRgtC40LzRg9C70Y_RgtC-0YAi!8m2!3d46.506317!4d30.7002001!3m4!1s0x40c62e2592cddf41:0x5f72b9aac64fe588!8m2!3d46.506317!4d30.7002001">
                Хаджибеевская дорога 2,
              <h4 className="test-relative">
                завод «Биостимулятор»
              </h4>
            </StyledLink>

            <StyledLink className="contacts__link" href="/">+38 093 543 4241</StyledLink>
            <p>Viber, Telegram</p>

            <ul className="contacts__list">
              <li>
                <StyledLink aria-label="Наш адрес" className="link" href="/">
                  <Icon name="marker" />
                </StyledLink>
              </li>

              <li>
                <StyledLink aria-label="Instagram" className="link" href="/">
                  <Icon name="insta" />
                </StyledLink>
              </li>

              <li>
                <StyledLink aria-label="Facebook" className="link" href="/">
                  <Icon name="facebook" />
                </StyledLink>
              </li>
            </ul>
          </div>
          <StyledForm>
            <TitleForm level={3}>
              Жду звонка
            </TitleForm>
            <Input name="Name" />
            <Input name="Phone" />
            <Input name="Email" />

            <StyledButton type="submit">
              Отправить
            </StyledButton>
          </StyledForm>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

ContactForm.contextTypes = {
  posX: PropTypes.number,
  posY: PropTypes.number,
};

export default withTheme(ContactForm);
