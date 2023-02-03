import { FlatList } from "native-base";
import { IMAGE_URL } from "../services/config";
import Card from "../components/Card";

export default function MovieUI(props) {
  return (
    <FlatList
      data={props.movieList}
      renderItem={({ item }) => (
        <Card
          poster_path={`${IMAGE_URL}${item.poster_path}`}
          original_title={item.original_title}
          popularity={item.popularity}
          release_date={item.release_date}
          navigation={props.navigation}
          id={item.id}
          type="movie"
        />
      )}
    />
  );
}
