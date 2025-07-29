type imageNewsType = {
  imageVedioId: number;
  linkType: number;
  link: string;
};

export type NewsCardType = {
  newsId?: number;
  cardImageLink: string;
  title: string;
  description?: string;
  newsDate: string;
  newsBodyText?: string;
  views: number;
  newsLink: string;
  newsCategoryId?: number;
  newsTime?: string;
  newsCategoryName?: string;
  class?: string;
  hideShareIcon?: boolean;
  imageNews?: Array<imageNewsType>;
};

export type NewsCategoriesType = Pick<
  NewsCardType,
  "newsCategoryId" | "newsCategoryName"
>;

export type NewsKeywordsType = Pick<
  NewsCardType,
  "newsId" | "newsCategoryId"
> & {
  keywordId: number;
  keyword: string;
};
