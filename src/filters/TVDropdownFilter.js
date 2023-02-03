import { Box, Center, CheckIcon, Select } from "native-base";
import React, { useEffect } from "react";
import { getTvShows } from "../services/apiServices";

export default function TVDropdownFilter(props) {
  useEffect(() => {
    getTvShows(props.service);
  }, [props.service]);

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
          <Select.Item label="Airing today" value="airing_today" />
          <Select.Item label="On the air" value="on_the_air" />
          <Select.Item label="Popular" value="popular" />
          <Select.Item label="Top rated" value="top_rated" />
        </Select>
      </Box>
    </Center>
  );
}
