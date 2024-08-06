import { useState, useEffect } from 'react';


function useFetchData() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://swapi.dev/api/films');
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return movies;
}

export default useFetchData;
