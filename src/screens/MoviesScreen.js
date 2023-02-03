import React, { useState, useEffect } from "react";
import { Box, Center } from "native-base";
import MoviesDropDown from "../filters/MoviesDropdownFilter";
import MovieList from "../UI/MovieUI";
import { getMovies } from "../services/apiServices";

export default function MoviesScreen({ navigation }) {
  const [service, setService] = useState("popular");
  const [movieList, setMovieList] = useState("");

  const allMovies = async () => {
    const movies = await getMovies(service);
    setMovieList(movies.results);
  };

  useEffect(() => {
    allMovies();
  }, [service]);

  return (
    <Box flex="1">
      <Center>
        <MoviesDropDown service={service} setService={setService} />
      </Center>
      <Box flex={1}>
        <MovieList movieList={movieList} navigation={navigation} />
      </Box>
    </Box>
  );
}
