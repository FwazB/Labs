import { Link } from "react-router-dom";
import { BaseGif } from "../models/BaseGif";
import { GiphyImage } from "../models/GiphyImage";
import UserContext from "../context/UserContext";
import { useContext } from "react";

interface ResultProps {
  image: BaseGif;
}

export function Result({ image }: ResultProps) {
  const { addToFavorites, removeFavorites, favorites } =
    useContext(UserContext);
  const checkIfFav = () => {
    if (favorites) {
      return favorites?.some((gif) => gif.id === image.id);
    } else {
      return false;
    }
  };
  return (
    <div className="Result">
      <Link to={`/gif/${encodeURIComponent(image.id)}`}>
        <img
          src={image.images.original.url}
          style={{
            width: image.images.original.width,
            height: image.images.original.height,
          }}
        ></img>
        {checkIfFav() ? (
          <button onClick={() => removeFavorites(image.id)}>
            Remove Favorites
          </button>
        ) : (
          <button onClick={() => addToFavorites(image)}>
            Add To Favorites
          </button>
        )}
      </Link>
    </div>
  );
}
