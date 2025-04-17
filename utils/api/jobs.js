export const fetchJobs = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/job`);
  
      if (!response.ok) {
        throw new Error("Failed to fetch jobs");
      }
  
      return await response.json();
    } catch (error) {
      throw new Error(error?.message || "Something went wrong");
    }
};