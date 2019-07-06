import React from 'react';

const FilmList = (props) => {
    console.log('FilmList', props)
    return (
        <ul>
            {props.films.map((film, index) => (
                <li>
                    <h3>{film.title}</h3>
                  <p>{film.opening_crawl}</p>
                </li>
        ))}
        </ul>
    );
};


export default FilmList;