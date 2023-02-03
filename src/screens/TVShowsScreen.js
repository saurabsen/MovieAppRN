import React, { useState, useEffect } from "react";
import { Box, Center } from "native-base";
import TVDropdown from "../filters/TVDropdownFilter";
import TVList from "../UI/TVShowUI";
import { getTvShows } from "../services/apiServices";

export default function TVShowsScreen({ navigation }) {
  const [service, setService] = useState("popular");
  const [tvList, setTvList] = useState("");

  const allTvShows = async () => {
    const tvShows = await getTvShows(service);

    setTvList(tvShows.results);
  };

  useEffect(() => {
    allTvShows();
  }, [service]);

  return (
    <Box flex="1">
      <Center>
        <TVDropdown service={service} setService={setService} />
      </Center>
      <Box flex={1}>
        <TVList tvList={tvList} navigation={navigation} />
      </Box>
    </Box>
  );
}
