import { FlatList } from "native-base";

import { IMAGE_URL } from "../services/config";
import Card from "../components/Card";

export default function SearchDataUI(props) {
  const { searchType, searchList } = props;

  return (
    <>
      {searchType == "movie" ? (
        <FlatList
          data={searchList}
          renderItem={({ item }) => (
            <>
              <Card
                poster_path={`${IMAGE_URL}${item.poster_path}`}
                original_title={item.original_title}
                popularity={item.popularity}
                release_date={item.release_date}
                navigation={props.navigation}
                id={item.id}
                type="movie"
              />
            </>
          )}
        />
      ) : searchType == "tv" ? (
        <FlatList
          data={searchList}
          renderItem={({ item }) => (
            <Card
              poster_path={`${IMAGE_URL}${item.poster_path}`}
              original_title={item.original_name}
              popularity={item.popularity}
              release_date={item.first_air_date}
              navigation={props.navigation}
              id={item.id}
              type="tv"
            />
          )}
        />
      ) : (
        <FlatList
          data={searchList}
          renderItem={({ item }) => (
            <>
              {item.media_type === "movie" ? (
                <Card
                  poster_path={`${IMAGE_URL}${item.poster_path}`}
                  original_title={item.original_title}
                  popularity={item.popularity}
                  release_date={item.release_date}
                  navigation={props.navigation}
                  id={item.id}
                  type="movie"
                />
              ) : (
                <Card
                  poster_path={`${IMAGE_URL}${item.poster_path}`}
                  original_title={item.original_name}
                  popularity={item.popularity}
                  release_date={item.first_air_date}
                  navigation={props.navigation}
                  id={item.id}
                  type="tv"
                />
              )}
            </>
          )}
        />
      )}
    </>
  );
}
