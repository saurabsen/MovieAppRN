import { Box, HStack, Text, Image, VStack, Button } from "native-base";

export default function Card(props) {
  const {
    poster_path,
    original_title,
    popularity,
    release_date,
    navigation,
    id,
    type,
  } = props;

  return (
    <>
      <Box ml={4} mr={4} mb={4}>
        <HStack space={2} alignItems="center">
          <Image
            source={{ uri: poster_path }}
            alt="Poster"
            size="xl"
            width="30%"
          />

          <VStack space={2} px={3} width="70%">
            <Box>
              <Text fontWeight="bold">{original_title}</Text>
              <Text>Popularity: {popularity}</Text>
              <Text>Release Date: {release_date}</Text>
            </Box>

            <Button
              size="md"
              borderRadius="4"
              variant="solid"
              width={200}
              onPress={() => {
                navigation.navigate("Details", { id, type, original_title });
              }}
            >
              More Details
            </Button>
          </VStack>
        </HStack>
      </Box>
    </>
  );
}
