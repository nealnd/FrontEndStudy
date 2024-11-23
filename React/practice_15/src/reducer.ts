import { Basic } from "unsplash-js/dist/methods/photos/types";

export type State = {
  loading: boolean;
  search: string;
  results: Basic[] | undefined;
  mode: boolean;
};

export type Action =
  | { type: "LOADING" }
  | { type: "DISPLAY_RESULTS"; payload: Basic[] | undefined }
  | { type: "CHANGE_MODE"; payload: boolean }
  | { type: "CHANGE_SEARCH"; payload: string };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "LOADING": {
      return { ...state, loading: true };
    }

    case "DISPLAY_RESULTS": {
      return {
        ...state,
        loading: false,
        results: action.payload,
      };
    }
    case "CHANGE_MODE": {
      return { ...state, mode: action.payload };
    }
    case "CHANGE_SEARCH": {
      return {
        ...state,
        search: action.payload,
      };
    }

    default:
      return state;
  }
};
