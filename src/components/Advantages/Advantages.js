import React from 'react';

import './advantages.scss';

const Advantages = (props) => {
    return (
        <section className="advantages">
            <div className="wrapper flex">
                <article className="advantages__item">
                    <h3>Площадка 3200 кв.м</h3>
                    <p>Застекленная, освещенная, со спец. декорациями</p>
                </article>
                <article className="advantages__item">
                    <h3>Лаунж зона</h3>
                    <p>Раздевалка, туалет, камера хранения, кухня и бар</p>
                </article>
                <article className="advantages__item">
                    <h3>Охраняемая парковка</h3>
                    <p>Для авто, мото, вело транспорта</p>
                </article>
                <article className="advantages__item">
                    <h3>Фото-видео</h3>
                    <p>Незабываемые селфи, друзья обзавидуются</p>
                </article>
            </div>
        </section>
    );
};

export default Advantages;