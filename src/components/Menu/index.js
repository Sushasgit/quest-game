import React from 'react';
import styled from 'styled-components';
import './menu.scss';

import { Link } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu';

import logo from '../../images/logo-real.png';

const StyledLogo = styled.a`
  color: ${data => (data.theme ? data.theme.titleColor : '#fff')};

  &:hover {
    opacity: 0.3;
  }
`;

const StyledLink = styled(Link)`
  color: ${data => (data.theme ? data.theme.titleColor : '#fff')};
  background-color: ${data => (data.theme ? data.theme.primaryBg : '#fff')};
  box-shadow: 0px 0px 4px 4px ${data => (data.theme ? data.theme.titleColor : '#fff')};
  &:hover {
    opacity: 0.4;
  }
`;

const LinkTitle = styled.span`
  color: ${data => (data.theme ? data.theme.titleColor : '#fff')};
`;

const Menu = () => (
  <React.Fragment>
    <StyledLogo className="logo-link" href="/">
      Real Games
      <img src={logo} alt="logo" />
    </StyledLogo>
    <ul className="menu menu--desktop">
      <li className="menu__link">
        <StyledLink to="/prices">
          <svg
            preserveAspectRatio="xMidYMid slice"
            className="menu__icon"
            fill="currentColor"
            width="40"
            height="40"
            viewBox="0 0 80 80"
          >
            <path d="M59.206.293a.999.999 0 0 0-1.414 0L54.085 4H30.802L1.532 33.511c-.666.666-1.033 1.553-1.033 2.495s.367 1.829 1.033 2.495l20.466 20.466a3.51 3.51 0 0 0 2.491 1.031 3.54 3.54 0 0 0 2.509-1.041l28.501-29.271V5.414l3.707-3.707a.999.999 0 0 0 0-1.414zm-5.707 28.581L25.574 57.553a1.53 1.53 0 0 1-2.162 0L2.946 37.087a1.532 1.532 0 0 1 .003-2.165L31.636 6h20.449l-4.833 4.833A4.969 4.969 0 0 0 44.499 10c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5a4.969 4.969 0 0 0-.833-2.753l4.833-4.833v21.46zm-6-13.874c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3c.462 0 .894.114 1.285.301l-1.992 1.992a.999.999 0 1 0 1.414 1.414l1.992-1.992c.188.391.301.823.301 1.285z" />
          </svg>
        </StyledLink>
        <LinkTitle>Цены</LinkTitle>
      </li>
      <li className="menu__link">
        <StyledLink to="/prices">
          <svg
            width="40"
            height="40"
            preserveAspectRatio="xMidYMid slice"
            viewBox="0 0 150 150"
          >
            <circle fill="currentColor" cx="19.5" cy="12.2" r="12.1" />
            <path fill="currentColor" d="M6 66.699h1.2v24c0 3.301 2.7 6 6 6h12.6c3.3 0 6-2.699 6-6V89.3c-1.1-2.101-1.8-4.5-1.8-7V50.9c0-6.1 3.7-11.4 9-13.7v-2.4c0-3.3-2.7-6-6-6H6c-3.3 0-6 2.7-6 6v25.9c0 3.3 2.6 5.999 6 5.999z"/>
            <circle fill="currentColor" cx="103.3" cy="12.2" r="12.1" />
            <path fill="currentColor" d="M83.699 34.7v2.4c5.301 2.3 9 7.6 9 13.7v31.3c0 2.5-.6 4.9-1.799 7v1.4c0 3.3 2.699 6 6 6h12.6c3.3 0 6-2.7 6-6v-24h1.199c3.301 0 6-2.7 6-6V34.7c0-3.3-2.699-6-6-6h-27c-3.299 0-6 2.699-6 6zM39.1 50.899V82.299c0 3.3 2.7 6 6 6h2.3v28.3c0 3.3 2.7 6 6 6h16.1c3.3 0 6-2.7 6-6v-28.4h2.3c3.3 0 6-2.699 6-6V50.9c0-3.3-2.7-6-6-6H45.1c-3.4-.001-6 2.7-6 5.999z"/>
            <circle fill="currentColor" cx="61.4" cy="26" r="13.9" />
          </svg>
        </StyledLink>
        <LinkTitle>Корпоративы</LinkTitle>
      </li>

      <li className="menu__link">
        <StyledLink to="/prices">
          <svg fill="currentColor" viewBox="0 0 511.882 511.882">
            <path d="M389.898 430.449l-86.29-57.527a8.887 8.887 0 0 0-11.886 1.929l-25.125 32.302c-8.143 10.612-22.839 13.641-34.514 7.113l-4.645-2.551c-16.759-9.143-37.623-20.517-79.04-61.934-41.417-41.417-52.8-62.281-61.934-79.049l-2.56-4.645c-6.527-11.672-3.498-26.366 7.113-34.505l32.293-25.134a8.878 8.878 0 0 0 1.929-11.886l-57.518-86.299a8.842 8.842 0 0 0-11.886-2.679l-36.105 21.65a34.738 34.738 0 0 0-15.899 20.489c-11.858 43.182-1.883 118.793 112.96 233.646s190.437 124.846 233.655 112.978a34.74 34.74 0 0 0 20.489-15.909l21.641-36.105a8.83 8.83 0 0 0-2.678-11.884z" />
            <path d="M510.425 15.156a4.973 4.973 0 0 0-3.572-1.456H123.767a4.973 4.973 0 0 0-5.028 5.028V151.83l21.723 32.585c7.835 11.838 5.26 27.708-5.915 36.462l-32.265 25.134a8.723 8.723 0 0 0-2.359 11.173l2.633 4.8a230.534 230.534 0 0 0 30.51 44.471h373.787a4.993 4.993 0 0 0 5.029-4.919V18.728a4.97 4.97 0 0 0-1.457-3.572zM250.661 181.434v-.046l-93.659 100.343a9.144 9.144 0 0 1-13.376-12.47l93.659-100.297a9.144 9.144 0 0 1 13.376 12.47zm64.649-7.204a30.305 30.305 0 0 1-18.286-6.034L144.211 52.319a9.16 9.16 0 0 1 11.1-14.574l152.75 115.877a12.336 12.336 0 0 0 14.501 0L475.356 37.745a9.147 9.147 0 0 1 11.054 14.574L333.596 168.196a30.303 30.303 0 0 1-18.286 6.034zm171.813 107.95a9.142 9.142 0 0 1-12.928-.448l-93.65-100.343a9.143 9.143 0 0 1 13.394-12.425l93.632 100.297a9.143 9.143 0 0 1-.448 12.919z" />
          </svg>
        </StyledLink>
        <LinkTitle>Контакты</LinkTitle>
      </li>

      <li className="menu__link">
        <StyledLink to="/prices">
          <svg width="30" height="30" viewBox="0 0 512 512">
            <path fill="currentColor" d="M390.926 122.5c-2.344 0-4.7-.82-6.598-2.488-4.148-3.649-4.555-9.965-.906-14.114.652-.742 16.27-18.226 38.125-18.34 13.316-.113 25.617 6.075 36.558 18.262 3.688 4.11 3.348 10.434-.761 14.121-4.114 3.692-10.434 3.352-14.125-.761-6.957-7.75-14.203-11.633-21.567-11.621-12.765.066-23.109 11.43-23.21 11.543a9.972 9.972 0 0 1-7.516 3.398zm0 0M332.395 227.102a9.975 9.975 0 0 1-6.598-2.489c-4.145-3.648-4.555-9.965-.906-14.113.652-.746 16.27-18.227 38.125-18.34 13.34-.082 25.617 6.074 36.558 18.262 3.688 4.11 3.348 10.433-.762 14.121-4.109 3.691-10.433 3.348-14.125-.762-6.921-7.71-14.14-11.62-21.46-11.62h-.106c-12.766.066-23.11 11.429-23.207 11.542a9.986 9.986 0 0 1-7.52 3.399zm0 0M273.332 122.5c-2.344 0-4.7-.82-6.598-2.488-4.148-3.649-4.554-9.965-.906-14.114.652-.742 16.27-18.226 38.125-18.34 13.274-.078 25.617 6.075 36.559 18.262 3.687 4.11 3.347 10.434-.762 14.121-4.113 3.692-10.434 3.352-14.125-.761-6.922-7.711-14.14-11.621-21.46-11.621h-.106c-12.766.066-23.11 11.43-23.211 11.543a9.972 9.972 0 0 1-7.516 3.398zm0 0"/>
            <path fill="currentColor" d="M506.934 1.309a9.979 9.979 0 0 0-10.051.097c-30.29 18.012-63.207 29.25-97.867 33.39-27.86 3.34-56.918 2.142-86.399-3.558-50.578-9.781-85.238-29.68-85.57-29.879a10.014 10.014 0 0 0-10.02-.03 9.986 9.986 0 0 0-5.02 8.667c0 75.961 14.81 147.55 41.7 201.7-13.238 8.527-31.539 18.878-53.719 27.827-27.84 11.23-56.148 18-84.117 20.102-34.851 2.617-69.351-2.031-102.52-13.832a9.994 9.994 0 0 0-9.87 1.84 10.012 10.012 0 0 0-3.301 9.48c2.87 14.809 4.23 21.262 8.23 35.582 1.48 5.317 6.992 8.43 12.313 6.95 5.32-1.493 8.43-7 6.949-12.32-1.992-7.153-3.281-12.153-4.461-17.38 30.68 8.778 62.277 12.02 94.16 9.618 30.027-2.25 60.348-9.489 90.106-21.489a344.615 344.615 0 0 0 55.8-28.719c5.352-3.41 9.98-6.57 13.828-9.332 1.973 12.04 3.5 24.02 4.614 35.852 7.86 83.008-4.883 158.957-35.371 202.137-13.621 19.289-29.77 30.449-47.98 33.187-25.02 3.762-51.579-6.027-76.81-28.34C94.552 438.992 70.45 402 51.872 355.891c-2.059-5.13-7.89-7.598-13.012-5.54-5.129 2.063-7.597 7.891-5.539 13.012 19.742 48.977 45.668 88.567 74.989 114.489C133.78 500.359 160.969 512 187.719 512c4.558 0 9.11-.34 13.629-1.02 23.468-3.53 44.68-17.859 61.34-41.43 19.488-27.609 32.757-67.3 38.347-114.788 2.89-24.528 3.652-50.528 2.313-77.207 18.207 14.687 38.047 22.386 58.648 22.386 41.379 0 79.719-31.078 107.938-87.515 27.12-54.242 42.058-126.13 42.058-202.43a9.976 9.976 0 0 0-5.058-8.687zm-54.891 202.168c-24.66 49.316-56.637 76.468-90.047 76.468-21.441 0-42.289-11.18-61-32.242a560.223 560.223 0 0 0-7.129-47.558 10.015 10.015 0 0 0-6.558-7.56 10.008 10.008 0 0 0-9.82 1.919c-.09.07-2.563 2.21-7.16 5.66-22.84-47.207-36.173-108.246-38.083-173.785 15.602 7.207 42.242 17.777 75.852 24.348 31.597 6.191 62.84 7.53 92.836 3.992 31.832-3.762 62.289-13.043 90.8-27.633-2.03 66.8-15.941 128.91-39.691 176.39zm0 0"/>
            <path fill="currentColor" d="M28.887 335.406c-5.524 0-10.004-4.476-10.004-10 0-5.52 4.469-10 9.992-10h.012c5.523 0 10 4.48 10 10 0 5.524-4.477 10-10 10zm0 0M79.605 355.371a9.955 9.955 0 0 1-5.152-1.437c-4.73-2.852-6.254-9-3.402-13.73 8.414-13.954 19.297-22.278 32.347-24.743 21.407-4.04 39.98 9.984 40.762 10.582 4.383 3.363 5.207 9.644 1.844 14.023-3.356 4.371-9.61 5.2-13.988 1.871-.313-.234-12.57-9.218-25.012-6.804-7.168 1.394-13.504 6.574-18.824 15.398a10 10 0 0 1-8.575 4.84zm0 0M194.691 332.945a9.979 9.979 0 0 1-5.156-1.437c-4.726-2.852-6.25-9-3.398-13.73 8.414-13.954 19.297-22.278 32.347-24.743 21.399-4.043 39.98 9.985 40.762 10.586 4.379 3.363 5.203 9.64 1.84 14.02-3.356 4.37-9.606 5.203-13.984 1.87-.317-.234-12.575-9.222-25.012-6.804-7.172 1.395-13.504 6.574-18.824 15.398a9.996 9.996 0 0 1-8.575 4.84zm0 0M182.016 457.402c-10.344 0-20.75-3.89-31.04-11.62-4.417-3.317-5.308-9.587-1.992-14.005 3.32-4.414 9.586-5.304 14.004-1.988 8.215 6.176 16.012 8.598 23.172 7.211 12.55-2.441 20.606-15.59 20.684-15.723 2.804-4.757 8.922-6.32 13.68-3.52 4.757 2.802 6.331 8.954 3.53 13.712-.5.847-12.495 20.851-33.87 25.12a41.55 41.55 0 0 1-8.168.813zm0 0"/>
          </svg>
        </StyledLink>
        <LinkTitle>Игры</LinkTitle>
      </li>
    </ul>

    <div className="menu menu--mobile">
      <BurgerMenu />
    </div>
  </React.Fragment>
);

export default Menu;
