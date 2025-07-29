"use server";

export default async function getFaqs() {
  const resource: string = "Faqs";

  const result = await fetch(`${process.env.API_URI}/${resource}`, {
    next: {
      revalidate: 3600,
    },
  });

  if (!result.ok) {
    throw new Error("error in api");
  }

  const response = await result.json();

  return response;
}
