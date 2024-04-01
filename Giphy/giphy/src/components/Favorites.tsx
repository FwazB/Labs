import { useContext } from "react";
import UserContext from "../context/UserContext";

const Favorites = () => {
  const { favorites } = useContext(UserContext);
  return (
    <div className="Favorites">
      {favorites?.map((fav) => (
        <>
          <p>{fav.title}</p>
          <img src={fav.images.original.url} alt="gif" />
          <a href={fav.url}>Check out on Giphy!</a>
        </>
      ))}
    </div>
  );
};

export default Favorites;
