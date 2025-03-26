const fetchMovies = async () => {
    try {
      const data = await getMovieListFromApi();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  
  fetchMovies();
  