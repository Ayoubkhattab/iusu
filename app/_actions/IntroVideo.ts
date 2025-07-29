"use server";

export default async function getIntroductoryVideos() {
  const resource: string = "IntroductoryVideos";

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
