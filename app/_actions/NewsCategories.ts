"use server";

import { NewsCategoriesType } from "../_types/NewsCardType";

export default async function getNewsCategories(): Promise<
  Array<NewsCategoriesType>
> {
  const resource: string = "NewsCategoriesNames";

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
