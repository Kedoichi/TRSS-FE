export const fetchJobs = async (params = {}) => {
  try {
    const query = new URLSearchParams(params).toString();
    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/job${query ? `?${query}` : ""}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || `Error ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    if (error.message === "Failed to fetch" || error.message.includes("NetworkError")) {
      throw new Error("Unable to connect to the server. Please try again later.");
    }

    throw new Error(error?.message || "Something went wrong while fetching jobs.");
  }
};

export const fetchJobById = async (id) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/job/${id}`;

    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch job: ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    const isNetworkError = error.name === "TypeError" && error.message === "Failed to fetch";

    console.error("Error fetching job by ID:", error);

    throw new Error(
      isNetworkError
        ? "Unable to connect to the server. Please check your internet or try again later."
        : error.message || "Something went wrong while fetching job details."
    );
  }
};