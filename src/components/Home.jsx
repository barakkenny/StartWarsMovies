import React from "react";
import useFetchData from "./utils/useFetchData";
import "./Home.css";

function Home() {
  const moviesData = useFetchData();

  return (
    <section className="home__container">
      <header className="header">
        <h1>STAR WARS</h1>
      </header>
      <section className="movie__container">
        {moviesData.map((movies) => {
          const { title, release_date, opening_crawl } = movies;
          return (
            <section className="movie__content">
              <h1>{title}</h1>
              <h4>{release_date}</h4>
              <p>{opening_crawl.substring(0, 260) + "..."}</p>
              <hr className="horizontal__line" />
              <h5>More Info</h5>
            </section>
          );
        })}
      </section>
    </section>
  );
}

export default Home;
