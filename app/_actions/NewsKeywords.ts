"use server";

import { NewsKeywordsType } from "../_types/NewsCardType";

export default async function getNewsKeywords(): Promise<
  Array<NewsKeywordsType>
> {
  const resource: string = "NewsKeywords";

  const result = await fetch(`${process.env.API_URI}/${resource}`, {
    next: {
      //   revalidate: false,
    },
  });

  if (!result.ok) {
    throw new Error("error in api");
  }

  const response = await result.json();

  return response;
}
