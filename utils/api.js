const fetchOblicua = async (endpoint, data = null, method = "GET") => {
  try {
    const url = `${process.env.BASE_URL}/${endpoint}`;
    const token = process.env.OBLICUA_API_KEY;

    if (!token) throw new Error("API key is missing");

    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
        token: `${token}`,
      },
    };

    if (method !== "GET" && data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(
        `API request failed: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export { fetchOblicua };
