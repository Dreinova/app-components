import { useState, useEffect } from "react";

const API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL;
const API_KEY = process.env.OBLICUA_API_KEY;

export function useFetchOblicua(
  endpoint,
  method = "GET",
  body = null,
  autoFetch = true
) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(autoFetch);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const url = `${API_BASE_URL}/${endpoint}`;
      const options = {
        method,
        headers: {
          "Content-Type": "application/json",
          token: `${API_KEY}`,
        },
      };

      if (method !== "GET" && body) {
        options.body = JSON.stringify(body);
      }

      const response = await fetch(url, options);
      if (!response.ok)
        throw new Error(`Error ${response.status}: ${response.statusText}`);

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, [endpoint, method, body, autoFetch]);

  return { data, loading, error, refetch: fetchData };
}
