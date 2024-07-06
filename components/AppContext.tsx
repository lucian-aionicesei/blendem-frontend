import { createContext } from "react";

interface ILoadingContext {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

const defaultState = {
  isLoading: true,
  setIsLoading: () => {},
};

export const LoadingContext = createContext<ILoadingContext>(defaultState);
