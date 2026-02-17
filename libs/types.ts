export type Game = {
  title: string;
  developer?: string;
  players?: string;
  genre: string[];
  releaseYear: number;
  comment: string;
  rating?: string;
  screenshots?: { url: string }[];
  appStore?: string;
  googlePlay?: string;
  steam?: string;
  icon: {
    url: string;
    width: number;
    height: number;
  };
};
