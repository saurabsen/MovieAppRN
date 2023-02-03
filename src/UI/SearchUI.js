import { Box, Center, Text } from "native-base";

export default function SearchUI() {
  return (
    <>
      <Box>
        <Center>
          <Text
            fontWeight="bold"
            fontSize={25}
            justifyContent="center"
            mt={150}
          >
            Please initiate the search
          </Text>
        </Center>
      </Box>
    </>
  );
}
