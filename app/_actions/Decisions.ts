"use server";

import { DecisionsTypes } from "../_types/DecisionsTypes";

export default async function getDecisions(): Promise<Array<DecisionsTypes>> {
  const resource: string = "Decisions";

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
