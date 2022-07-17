export interface SourceArticleProps {
  id: string;
  name: string;
}

export interface ArticleProps {
  source: SourceArticleProps;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface ListArticleProps {
  articles: Array<ArticleProps>;
}

export interface ServerError {
  errorMessage: string;
}

export interface ResponseServer {
  data: any;
  message: string;
  status: number;
}
