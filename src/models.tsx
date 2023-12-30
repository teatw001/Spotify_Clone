export interface ISongs {
  _id: string;
  name: string;
  author: string;
  url: string;
  links: {
    images: Image[];
  };
}
export interface Image {
  url: string;
}
