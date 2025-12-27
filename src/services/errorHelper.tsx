import axios from "axios";

export const getAxiosErrorMessage = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message || error.response?.statusText || "Weather service error";
  }
  return "Unexpected error occurred";
};
