import { PortableTextBlock } from "next-sanity";
import { Category } from "./category";

export type Project = {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  categories: Category[];
  thumbnail: {
    asset: {
      _id: string;
      url: string;
    };
  };
  images: {
    asset: {
      _id: string;
      url: string;
    };
  }[];
  short_description: PortableTextBlock[];
  description: PortableTextBlock[];
  projectUrl: string;
  repoUrl: string;
  technologies: string[];
  publishedAt: string;
};
