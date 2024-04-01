import { createContext } from "react";
import { BaseGif } from "../models/BaseGif";

interface UserContext {
  darkTheme: boolean;
  favorites: BaseGif[];
  addToFavorites: (gif: BaseGif) => void;
  removeFavorites: (id: string) => void;
  setDarkTheme: (boolean: any) => void;
}
const defaultValues: UserContext = {
  darkTheme: false,
  favorites: [],
  addToFavorites(gif) {},
  removeFavorites(id) {},
  setDarkTheme(boolean) {},
};
const UserContext = createContext(defaultValues);
export default UserContext;
