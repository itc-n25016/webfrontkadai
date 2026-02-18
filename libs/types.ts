export type Game = {
  title: string;
  developer?: string;
  players?: string;
  genre: string[];
  releaseYear: number;
  rating?: string;
  screenshots?: { url: string }[];
  appStore?: string;
  googleplay?: string;
  steam?: string;
  icon: {
    url: string;
    width: number;
    height: number;
  };
};
