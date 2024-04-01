import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

export function Header() {
  const { setDarkTheme } = useContext(UserContext);
  return (
    <div className="Header">
      <h1>GIF APP - Powered By GIPHY</h1>
      <Link to={"/favorites"}>Favorites</Link>
      <button onClick={() => setDarkTheme((prev: any) => !prev)}>
        Switch Dark/Light
      </button>
    </div>
  );
}
