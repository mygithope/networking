export async function fetchJsonData(
  url: string,
  httpMethod: "get" | "put" | "post" | "delete" = "get",
  data?: object,
) {
  try {
    const response = await fetch(`${url}`, {
      method: httpMethod,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data ?? {}),
    });
    if (!response.ok) {
      throw new Error("Bad response from url");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
