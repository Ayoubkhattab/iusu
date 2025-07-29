"use server";

import { DecisionsTypeTypes } from "../_types/DecisionsTypes";

export default async function getDecisionsTypes(): Promise<
  Array<DecisionsTypeTypes>
> {
  const resource: string = "DecisionsTypes";

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
