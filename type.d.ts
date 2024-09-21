export type ProjectMeta = {
  title: string;
  publishedAt: string;
  date: string;
  description: string;
  repository: string;
  status: string;
  url: string;
  tags: [];
  published: boolean;
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
