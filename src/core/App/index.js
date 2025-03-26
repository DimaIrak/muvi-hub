import { useEffect, useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { Normalize } from "styled-normalize";
import { getMovieListFromApi } from "../../features/MuviList/getMuviesListFromApi";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const muviList = await getMovieListFromApi();
        setMovies(muviList.results);
      } catch (error) {
        console.error(
          "Blad pobierania danych:", error
        );
      }
    };

    fetchMovies()
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <div>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </div>
    </ThemeProvider>
  );
}

export default App;
