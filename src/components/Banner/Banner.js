import React from 'react';
import './banner.scss';

const Banner = (props) => {
    console.log('FilmList', props)
    return (
        <div className="parallax__stage">
            <div className="parallax__layer l--6"></div>
            <div className="parallax__layer l5"></div>
            <div className="parallax__layer l4"></div>
            <div className="parallax__layer l3"></div>
            <div className="parallax__layer l2"></div>
            <div className="parallax__layer l1"></div>
            <div className="content">
{props.children}
        </div>
</div>
    );
};

export default Banner;