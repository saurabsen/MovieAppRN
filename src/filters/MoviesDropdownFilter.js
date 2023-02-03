import { Select, Box, CheckIcon, Center } from "native-base";
import React from "react";

export default function MoviesDropDownFilter(props) {
  return (
    <Center>
      <Box maxW="300">
        <Select
          selectedValue={props.service}
          minWidth="200"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={5}
          mb={5}
          onValueChange={(itemValue) => props.setService(itemValue)}
        >
          <Select.Item label="Now playing" value="now_playing" />
          <Select.Item label="Popular" value="popular" />
          <Select.Item label="Top rated" value="top_rated" />
          <Select.Item label="Upcoming" value="upcoming" />
        </Select>
      </Box>
    </Center>
  );
}
