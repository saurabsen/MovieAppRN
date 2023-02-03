import { BASE_URL } from "../services/config";
import { useEffect, useState } from "react";
import { API_KEY } from "../services/config";
import axios from "axios";
import { Box, Center, HStack, Text, Image, VStack } from "native-base";
import { IMAGE_URL } from "../services/config";
import Loading from "./LoadingScreen";

export default function DetailsScreen(props) {
  const { id, type } = props.route.params;
  const [info, setInfo] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  let imageURL = `${IMAGE_URL}${info.poster_path}`;

  let released = "";
  if (type == "movie") {
    released = info.release_date;
  } else {
    released = info.first_air_date;
  }

  const getDetails = async () => {
    const url = `${BASE_URL}/${type}/${id}?api_key=${API_KEY}&language=en-US&page=1`;
    const response = await axios.get(url);
    setInfo(response.data);
    setIsLoading(true);
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <>
      {isLoading ? (
        <Box margin={10}>
          <VStack>
            <Center>
              <Text mb={10} fontSize={25} fontWeight="bold">
                {info.original_title}
              </Text>
              <Image source={{ uri: imageURL }} alt="Poster" size="2xl" />
              <Text mt={10} mb={10}>
                {info.overview}
              </Text>
            </Center>
            <HStack>
              <Text>Popularity: {info.popularity}</Text>
              <Text> | </Text>
              <Text>Release Date: {released}</Text>
            </HStack>
          </VStack>
        </Box>
      ) : (
        <Loading />
      )}
    </>
  );
}
