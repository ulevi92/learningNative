import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

type Context = {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
};

type ContextState = string[];

const FavoriteContext = createContext<Context | null>(null);

export const useFavoriteContext = () => {
  const context = useContext(FavoriteContext);

  if (context === null)
    throw new Error(
      "useFavoriteContext must be used within a FavoriteContextProvider"
    );

  return context;
};

const FavoriteContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [ids, setIds] = useState<ContextState>([]);

  const addFavorite = (id: string) => setIds((prev) => [...prev, id]);

  const removeFavorite = (id: string) =>
    setIds((prev) => prev.filter((prevId) => prevId !== id));

  const value: Context = {
    ids: ids,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
