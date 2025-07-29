"use server";

export default async function logRequest(request: any) {
  try {
    const response = await fetch("http://localhost/log.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error sending log to PHP script:", error);
  }
}
