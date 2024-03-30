import { api } from "@/api/api";

export const getLeaderboard = async () => {
  try {
    const response = await api.get("/get-leaderboard");
    return response;
  } catch (error) {
    throw error;
  }
};
