import { axiosBase } from "../api/axios";
import { cookies } from "next/headers";

export async function getCurrentUserSS() {
  const cookieStore = cookies();
  const session_id = cookieStore.get("session_id")?.value;

  if (session_id) {
    try {
      const response = await axiosBase.get(`users/me`, {
        headers: {
          Cookie: `session-id=${session_id}`,
        },
      });
      if (response.data === undefined) {
        return null;
      }
      return response.data;
    } catch (err: any) {
      return null;
    }
  }

  return null;
}