import { redirect } from "react-router";

export const checkLogin = async () => {
  const response = await fetch(`${import.meta.env.VITE_URL}/api/user-info`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    // window.location.href = '/auth/login';
    return redirect('/auth/login')
  }

  const { result: auth } = await response.json();
  return { auth };
};
