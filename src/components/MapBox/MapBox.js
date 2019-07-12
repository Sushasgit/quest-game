import * as React from 'react';
import {
  Map,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import './mapBox.scss';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const MapBox = () => {
  return (
    <div className="leaflet__overlay">
      <Map touchZoom={false} scrollWheelZoom={false} center={[46.5076323, 30.6995062]} zoom={16} style={{ height: '600px' }}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
        />
        <Marker position={[46.5076323, 30.6995062]}>
          <Popup>
            Test
          </Popup>
        </Marker>
      </Map>
      <div className="wrapper leaflet__content flex">
        <div className="contacts">
          <h2 className="contacts__title">Как нас найти</h2>

          <h4>Адрес</h4>
          <p>Одесса, Украина</p>

          <a href="https://www.google.com/maps/place/%D0%B7%D0%B0%D0%B2%D0%BE%D0%B4+%22%D0%91%D0%B8%D0%BE%D1%81%D1%82%D0%B8%D0%BC%D1%83%D0%BB%D1%8F%D1%82%D0%BE%D1%80%22/@46.5063207,30.6980114,17z/data=!4m12!1m6!3m5!1s0x40c62e2592cddf41:0x5f72b9aac64fe588!2z0LfQsNCy0L7QtCAi0JHQuNC-0YHRgtC40LzRg9C70Y_RgtC-0YAi!8m2!3d46.506317!4d30.7002001!3m4!1s0x40c62e2592cddf41:0x5f72b9aac64fe588!8m2!3d46.506317!4d30.7002001">
              Хаджибеевская дорога 2, завод «Биостимулятор»
          </a>

          <h4>Телефоны</h4>
          <a href="/">+38 093 543 4241</a>
          <p>Viber, Telegram</p>
        </div>
        <form className="contact-form">
          <h4 className="contact-form__title">Жду звонка</h4>
          <input
            type="text"
            className="contact-form__input"
            aria-label="Имя"
            placeholder="Имя"
          />
          <input
            type="text"
            className="contact-form__input"
            aria-label="Телефон"
            placeholder="Телефон"
          />
          <input
            type="text"
            className="contact-form__input"
            aria-label="E-mail"
            placeholder="E-mail"
          />

          <button className="contact-form__btn" type="submit">
              Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default MapBox;
