export type ProjectMeta = {
  title: string;
  publishedAt: string;
  date: string;
  description: string;
  thumbnail: string;
  repository: string;
  status: string;
  url: string;
  status: "string"
  tags: [];
};

export type BlogMeta = {
  title: string;
  description: string;
  publishedAt: string;
  coverImage: string;
  published: boolean;
  tags: [];
  readingTime: string;
};
