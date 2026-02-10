export type Game = {
  title: string;
  platforms: string[];
  genre: string[];
  releaseYear: number;
  comment: string;
  icon: {
    url: string;
    width: number;
    height: number;
  };
};
