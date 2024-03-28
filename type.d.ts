type ProjectMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  repository: string;
  url: string;
  published: boolean;
};

type BlogMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  published: boolean;
};

type ProjectPost = {
  meta: ProjectMeta;
  content: string;
};

type BlogPost = {
  meta: BlogMeta;
  content: string;
};
