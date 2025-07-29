"use server";

import { NewsCardType } from "../_types/NewsCardType";

export default async function getSingleNews(id: number): Promise<{
  cardsNews: NewsCardType;
  relatedNews: Array<NewsCardType>;
}> {
  const resource: string = `CardsNews/${id}`;

  const result = await fetch(`${process.env.API_URI}/${resource}`, {
    next: {
      //   revalidate: false,
    },
  });

  if (result.ok) {
    const response = await result.json();

    return response;
  } else if (!result.ok && result.status == 404) {
    throw new Error("no data exists");
  } else {
    throw new Error("unhandled exception");
  }
}
