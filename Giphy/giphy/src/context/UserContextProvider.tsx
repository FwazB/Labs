import { ReactNode, useEffect, useState } from "react";
import UserContext from "./UserContext";
import { BaseGif } from "../models/BaseGif";

interface Props {
  children: ReactNode;
}
const UserContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState({
    name: "Fawaz",
    id: "123",
    favorites: [],
    darkTheme: true,
  });
  const [favorites, setFavorites] = useState<BaseGif[]>([]);
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    setFavorites(user.favorites);
    setDarkTheme(user.darkTheme);
  }, [user]);
  const addToFavorites = (gif: BaseGif) => {
    setFavorites([...favorites, gif]);
  };
  const removeFavorites = (id: string) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  console.log(favorites);
  return (
    <UserContext.Provider
      value={{
        favorites,
        darkTheme,
        addToFavorites,
        removeFavorites,
        setDarkTheme,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
