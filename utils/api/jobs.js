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
      throw new Error(`Failed to fetch jobs: ${errorText || response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw new Error(error?.message || "Something went wrong while fetching jobs.");
  }
};

export const fetchJobById = async (id) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/job/${id}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch job: ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching job:", error);
    throw new Error(error?.message || "Something went wrong while fetching job details.");
  }
};
