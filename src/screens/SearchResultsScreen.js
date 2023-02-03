import { Text } from "native-base";
import { useState, useEffect } from "react";
import SearchFilter from "../filters/SearchFilter";
import SearchWithoutResults from "../UI/SearchUI";
import SearchWithResults from "../UI/SearchDataUI";
import { getSearch } from "../services/apiServices";

export default function SearchResultsScreen({ navigation }) {
  const [searchField, setSearchField] = useState(null);
  const [searchType, setSearchType] = useState("movie");
  const [searchList, setSearchList] = useState("");

  const searchResultsList = async () => {
    const search = await getSearch(searchField, searchType);

    setSearchList(search.results);
  };

  return (
    <>
      <SearchFilter
        searchField={searchField}
        setSearchField={setSearchField}
        searchType={searchType}
        setSearchType={setSearchType}
        searchResultsList={searchResultsList}
      />

      {searchList.length > 0 ? (
        <SearchWithResults
          searchType={searchType}
          searchList={searchList}
          navigation={navigation}
        />
      ) : (
        <SearchWithoutResults />
      )}
    </>
  );
}
