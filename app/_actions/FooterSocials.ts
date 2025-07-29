// "use server";

import { NewsCardType } from "../_types/NewsCardType";
import logRequest from "./Logger";

export default async function getFooterSocials(): Promise<Array<any>> {
  const resource: string = "SocialMediasLinks";

  let url = `${process.env.API_URI}/${resource}`;

  const searchParams = new URLSearchParams({});

  let fullUrl = `${url}?${searchParams}`;

  const result = await fetch(fullUrl, {
    next: {
      //   revalidate: false,
    },
  });

  // await logRequest(result.url);

  if (!result.ok) {
    throw new Error("error in api");
  }

  const response = await result.json();

  return response;
}
