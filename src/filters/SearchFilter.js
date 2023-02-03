import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import {
  Box,
  Button,
  Center,
  CheckIcon,
  FormControl,
  HStack,
  Icon,
  IconButton,
  Input,
  Select,
  Stack,
  VStack,
} from "native-base";
import React from "react";

export default function SearchFilter(props) {
  return (
    <Box mt={1}>
      <Center>
        <VStack my="1" space={5} w="100%" maxW="300px">
          <VStack w="100%" space={3} alignSelf="center">
            <FormControl isRequired>
              <Stack>
                <FormControl.Label>Search Movie/TV Show Name</FormControl.Label>
                <Input
                  placeholder="The Karate Kid"
                  width="100%"
                  borderRadius="4"
                  py="3"
                  px="1"
                  fontSize="14"
                  onChangeText={(e) => props.setSearchField(e)}
                  InputLeftElement={
                    <Icon
                      m="2"
                      ml="3"
                      size="6"
                      color="gray.400"
                      as={<MaterialIcons name="search" />}
                    />
                  }
                  InputRightElement={
                    <Icon
                      m="2"
                      mr="3"
                      size="6"
                      color="gray.400"
                      as={<MaterialIcons name="mic" />}
                    />
                  }
                />
              </Stack>
            </FormControl>
            <HStack>
              <FormControl width="60%" isRequired>
                <FormControl.Label>Choose Search Type</FormControl.Label>
                <Select
                  selectedValue={props.searchType}
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size={5} />,
                  }}
                  onValueChange={(itemValue) => props.setSearchType(itemValue)}
                  mt="0"
                  py="3"
                  px="1"
                  mr="5"
                  my="0"
                >
                  <Select.Item label="movie" value="movie" />
                  <Select.Item label="multi" value="multi" />
                  <Select.Item label="tv" value="tv" />
                </Select>
                <FormControl.ErrorMessage _text={{ color: "gray.700" }}>
                  Please select a search type
                </FormControl.ErrorMessage>
              </FormControl>
              <Button
                alignSelf="flex-start"
                mt="8"
                colorScheme="cyan"
                ml={3}
                size="lg"
                px="4"
                py="0"
                width="40%"
                onPress={() => {
                  props.searchResultsList();
                }}
                leftIcon={
                  <IconButton
                    variant="solid"
                    icon={
                      <Icon
                        size="md"
                        as={<AntDesign name="search1" />}
                        color="white"
                      />
                    }
                  />
                }
              >
                Search
              </Button>
            </HStack>
          </VStack>
        </VStack>
      </Center>
    </Box>
  );
}
