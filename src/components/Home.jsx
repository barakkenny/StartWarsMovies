import React from 'react';
import useFetchData from './utils/useFetchData';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const moviesData = useFetchData();
  
  return (
    <section className="home__container">
      <header className="header">
        <h1>STAR WARS</h1>
      </header>
      <section className="movie__container">
        {moviesData.map((movie) => {
          const { title, release_date, opening_crawl } = movie;
          return (
            <section key={title} className="movie__content">
              <h1>{title}</h1>
              <h4>{release_date}</h4>
              <p>{opening_crawl.substring(0, 260) + '...'}</p>
              <hr className="horizontal__line" />
              <Link to="#" className="more__info">More Info</Link>
            </section>
          );
        })}
      </section>
    </section>
  );
}

export default Home;
