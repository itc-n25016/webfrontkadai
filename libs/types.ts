export type Game = {
  title: string;
  developer?: string;
  players?: string;
  genre: string[];
  releaseYear: number;
  comment: string;
  icon: {
    url: string;
    width: number;
    height: number;
  };
};
